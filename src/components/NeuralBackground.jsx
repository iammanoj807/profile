import React, { useEffect, useRef } from 'react';

/*
 * Ambient ML canvas.
 * Foreground: a sparse, static neural graph; nodes near the cursor light up and
 * draw attention lines to it.
 * Margins: faint maths that drifts with scroll - formulas plus live widgets for
 * network training, gradient descent, activation functions and a loss curve.
 */

const TRAIN_CYCLE = 2600; // ms per epoch
const EPOCHS = 50;

// Each side scrolls at a single depth so items never slide over each other.
const MATHS = [
    { side: 'left', y: 0.02, text: 'σ(Wx + b)', size: 22 },
    { side: 'left', y: 0.1, widget: 'training' },
    { side: 'left', y: 0.34, text: 'softmax(QKᵀ / √d) V', size: 18 },
    { side: 'left', y: 0.43, widget: 'activation' },
    { side: 'left', y: 0.64, text: 'ℒ = −Σ y log ŷ', size: 20 },
    { side: 'left', y: 0.73, widget: 'boundary' },
    { side: 'left', y: 0.94, text: 'P(y | x)', size: 22 },
    { side: 'right', y: 0.03, text: '∂ℒ / ∂w', size: 20 },
    { side: 'right', y: 0.11, widget: 'descent' },
    { side: 'right', y: 0.36, text: 'θ ← θ − η ∇ℒ(θ)', size: 20 },
    { side: 'right', y: 0.46, widget: 'loss' },
    { side: 'right', y: 0.66, text: 'cos(u, v) = u·v / ‖u‖‖v‖', size: 16 },
    { side: 'right', y: 0.76, text: 'ŷ = argmax f(x)', size: 18 },
    { side: 'right', y: 0.9, text: 'GELU(x) = x · Φ(x)', size: 18 }
];
const DEPTH = { left: 0.07, right: 0.11 };
const WIDGET_W = 150;

const ACTIVATIONS = [
    { label: 'ReLU(x) = max(0, x)', f: x => Math.max(0, x) },
    { label: 'σ(x) = 1 / (1 + e⁻ˣ)', f: x => 1 / (1 + Math.exp(-x)) },
    { label: 'tanh(x)', f: x => Math.tanh(x) },
    { label: 'GELU(x) = x · Φ(x)', f: x => 0.5 * x * (1 + Math.tanh(0.7978845608 * (x + 0.044715 * x ** 3))) }
];

const easeInOut = t => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

const NeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const layer = document.createElement('canvas');
        const lctx = layer.getContext('2d');
        const css = getComputedStyle(document.documentElement);
        const token = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
        const C1 = token('--a1-rgb', '139, 123, 255');
        const C2 = token('--a2-rgb', '62, 224, 255');
        const C3 = token('--a3-rgb', '180, 242, 90');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let W = 0, H = 0, raf = 0, last = performance.now();
        let nodes = [];
        const pointer = { x: -9999, y: -9999 };
        const mod = (a, n) => ((a % n) + n) % n;
        const rgba = (c, a) => `rgba(${c}, ${Math.max(0, Math.min(1, a))})`;

        // Gradient descent state: an ill-conditioned bowl, so the path zig-zags.
        const descent = { path: [], start: 0 };
        const resetDescent = (now) => {
            let u = (Math.random() < 0.5 ? -1 : 1) * (40 + Math.random() * 10);
            let v = (Math.random() < 0.5 ? -1 : 1) * (12 + Math.random() * 5);
            descent.path = [[u, v]];
            for (let i = 0; i < 16; i++) {
                u *= 0.78; // (1 - η·λ₁)
                v *= -0.74; // (1 - η·λ₂), overshoots across the valley
                descent.path.push([u, v]);
            }
            descent.start = now;
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = window.innerWidth;
            H = window.innerHeight;
            for (const [c, cx] of [[canvas, ctx], [layer, lctx]]) {
                c.width = W * dpr;
                c.height = H * dpr;
                cx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;
            const count = Math.round(Math.min(55, Math.max(22, (W * H) / 30000)));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * W,
                y: Math.random() * H,
                r: 1.1 + Math.random() * 1.3,
                act: 0,
                px: 0,
                py: 0
            }));
        };

        const linkDist = () => (W < 720 ? 130 : 175);

        /* ---------- margin widgets (drawn on the faded maths layer) ---------- */

        const label = (g, text, x, y, a) => {
            g.fillStyle = rgba('255, 255, 255', a);
            g.font = "10.5px 'Geist Mono', monospace";
            g.fillText(text, x, y);
        };

        const axes = (g, w, h, a, x0 = 0, y0 = h) => {
            g.strokeStyle = rgba('255, 255, 255', a * 0.7);
            g.lineWidth = 1;
            g.beginPath();
            g.moveTo(x0, 0);
            g.lineTo(x0, h);
            g.moveTo(0, y0);
            g.lineTo(w, y0);
            g.stroke();
        };

        const drawTraining = (g, a, now) => {
            const layers = [3, 4, 4, 2];
            const w = 128, h = 84;
            const pos = layers.map((n, l) => Array.from({ length: n }, (_, i) => [
                (l / (layers.length - 1)) * w,
                h / 2 + (i - (n - 1) / 2) * (h / 4.2)
            ]));
            const phase = (now % TRAIN_CYCLE) / TRAIN_CYCLE;
            const forward = phase < 0.5;
            const waveX = forward ? (phase / 0.5) * w : (1 - (phase - 0.5) / 0.5) * w;
            const waveColor = forward ? C2 : C3;

            g.lineWidth = 1;
            for (let l = 0; l < layers.length - 1; l++) {
                pos[l].forEach(([x1, y1], i) => pos[l + 1].forEach(([x2, y2], j) => {
                    const weight = 0.5 + 0.5 * Math.sin(now / 1100 + i * 1.7 + j * 0.9 + l);
                    const near = Math.max(0, 1 - Math.abs((x1 + x2) / 2 - waveX) / 26);
                    g.strokeStyle = near > 0.05
                        ? rgba(waveColor, a * (1.2 + near * 4))
                        : rgba(C1, a * (0.5 + weight * 1.4));
                    g.beginPath();
                    g.moveTo(x1, y1);
                    g.lineTo(x2, y2);
                    g.stroke();
                }));
            }
            pos.flat().forEach(([x, y]) => {
                const near = Math.max(0, 1 - Math.abs(x - waveX) / 18);
                g.fillStyle = near > 0.05 ? rgba(waveColor, a * (3 + near * 5)) : rgba(C1, a * 3);
                g.beginPath();
                g.arc(x, y, 2.6 + near * 1.5, 0, Math.PI * 2);
                g.fill();
            });

            const epoch = Math.floor(now / TRAIN_CYCLE) % EPOCHS + 1;
            const loss = 0.04 + 2.1 * Math.exp(-epoch / 9);
            label(g, `${forward ? 'forward' : 'backprop'} · epoch ${String(epoch).padStart(2, '0')}/${EPOCHS}`, 0, h + 18, a * 1.3);
            label(g, `loss ${loss.toFixed(3)}`, 0, h + 32, a * 1.3);
            return h + 36;
        };

        const drawActivation = (g, a, now) => {
            const w = 128, h = 70;
            const cycle = 2600, morph = 700;
            const idx = Math.floor(now / cycle) % ACTIVATIONS.length;
            const t = now % cycle;
            const next = (idx + 1) % ACTIVATIONS.length;
            const e = t > cycle - morph ? easeInOut((t - (cycle - morph)) / morph) : 0;
            const xMin = -3, xMax = 3, yMin = -1.2, yMax = 2.4;
            const sx = x => ((x - xMin) / (xMax - xMin)) * w;
            const sy = y => h - ((y - yMin) / (yMax - yMin)) * h;
            axes(g, w, h, a, sx(0), sy(0));
            g.strokeStyle = rgba(C2, a * 2.4);
            g.lineWidth = 1.6;
            g.beginPath();
            for (let i = 0; i <= 60; i++) {
                const x = xMin + (i / 60) * (xMax - xMin);
                const y = ACTIVATIONS[idx].f(x) * (1 - e) + ACTIVATIONS[next].f(x) * e;
                const py = sy(Math.max(yMin, Math.min(yMax, y)));
                i ? g.lineTo(sx(x), py) : g.moveTo(sx(x), py);
            }
            g.stroke();
            label(g, ACTIVATIONS[e > 0.5 ? next : idx].label, 0, h + 18, a * 1.3);
            return h + 22;
        };

        const drawDescent = (g, a, now) => {
            const w = WIDGET_W, h = 96;
            const cx = w / 2, cy = h / 2, rot = -0.42;
            if (!descent.path.length) resetDescent(now);
            g.save();
            g.translate(cx, cy);
            g.rotate(rot);
            g.lineWidth = 1;
            for (let k = 1; k <= 5; k++) {
                g.strokeStyle = rgba(C1, a * (2.2 - k * 0.3));
                g.beginPath();
                g.ellipse(0, 0, k * 13.5, (k * 13.5) / 2.6, 0, 0, Math.PI * 2);
                g.stroke();
            }
            const stepMs = 280;
            const shown = Math.min(descent.path.length, Math.floor((now - descent.start) / stepMs) + 1);
            g.strokeStyle = rgba(C2, a * 3.2);
            g.lineWidth = 1.4;
            g.beginPath();
            for (let i = 0; i < shown; i++) {
                const [u, v] = descent.path[i];
                i ? g.lineTo(u, v) : g.moveTo(u, v);
            }
            g.stroke();
            for (let i = 0; i < shown; i++) {
                const [u, v] = descent.path[i];
                const head = i === shown - 1;
                g.fillStyle = head ? rgba(C3, a * 6) : rgba(C2, a * 3);
                g.beginPath();
                g.arc(u, v, head ? 3.2 : 1.6, 0, Math.PI * 2);
                g.fill();
            }
            g.fillStyle = rgba('255, 255, 255', a * 3);
            g.fillRect(-1.5, -1.5, 3, 3);
            g.restore();
            if (now - descent.start > descent.path.length * stepMs + 1400) resetDescent(now);
            label(g, `gradient descent · step ${String(shown - 1).padStart(2, '0')}`, 0, h + 16, a * 1.3);
            label(g, 'η = 0.22', 0, h + 30, a * 1.3);
            return h + 34;
        };

        const drawLoss = (g, a, now) => {
            const w = 128, h = 64;
            axes(g, w, h, a);
            const epoch = Math.floor(now / TRAIN_CYCLE) % EPOCHS + 1;
            const progress = (epoch - 1 + (now % TRAIN_CYCLE) / TRAIN_CYCLE) / EPOCHS;
            const lossAt = u => Math.exp(-u * 4.5) * 0.9 + 0.05 + Math.sin(u * 55) * 0.02 * (1 - u);
            const valAt = u => lossAt(u) + 0.06 + 0.05 * u;
            const curve = (fn, color, alpha, dash) => {
                g.setLineDash(dash);
                g.strokeStyle = rgba(color, alpha);
                g.lineWidth = 1.4;
                g.beginPath();
                const steps = Math.max(2, Math.round(60 * progress));
                for (let i = 0; i <= steps; i++) {
                    const u = (i / steps) * progress;
                    const px = u * w, py = h - fn(u) * (h - 6);
                    i ? g.lineTo(px, py) : g.moveTo(px, py);
                }
                g.stroke();
                g.setLineDash([]);
            };
            curve(valAt, C1, a * 2.2, [3, 3]);
            curve(lossAt, C2, a * 2.8, []);
            g.fillStyle = rgba(C3, a * 6);
            g.beginPath();
            g.arc(progress * w, h - lossAt(progress) * (h - 6), 2.8, 0, Math.PI * 2);
            g.fill();
            label(g, 'train ── val ┄┄', 0, h + 18, a * 1.3);
            return h + 22;
        };

        const drawBoundary = (g, a) => {
            const w = 128, h = 66;
            axes(g, w, h, a);
            for (let i = 0; i < 22; i++) {
                const px = ((i * 37) % 97) / 97 * (w - 12) + 6;
                const py = ((i * 53) % 89) / 89 * (h - 12) + 6;
                const above = py < h - (px / w) * h * 0.9 - 3;
                g.fillStyle = above ? rgba(C1, a * 3) : rgba(C3, a * 2.6);
                g.beginPath();
                g.arc(px, py, 2, 0, Math.PI * 2);
                g.fill();
            }
            g.strokeStyle = rgba(C2, a * 2.4);
            g.lineWidth = 1.4;
            g.beginPath();
            g.moveTo(0, h);
            g.lineTo(w, h * 0.1);
            g.stroke();
            label(g, 'decision boundary', 0, h + 18, a * 1.3);
        };

        const WIDGETS = { training: drawTraining, activation: drawActivation, descent: drawDescent, loss: drawLoss, boundary: drawBoundary };

        const drawMaths = (scroll, now) => {
            const compact = W < 720; // phones: faint formulas only, no widgets
            const a = compact ? 0.06 : 0.145;
            const span = Math.max(H + 300, 1100);
            const g = lctx;
            g.clearRect(0, 0, W, H);
            g.textBaseline = 'alphabetic';
            MATHS.forEach((item, i) => {
                const y = mod(item.y * span - scroll * DEPTH[item.side], span) - 150;
                if (y < -200 || y > H + 20 || (compact && !item.text)) return;
                if (item.text) {
                    g.font = `italic ${compact ? item.size * 0.8 : item.size}px 'Instrument Serif', Georgia, serif`;
                    const width = g.measureText(item.text).width;
                    const x = item.side === 'left' ? 16 : W - width - 16;
                    g.fillStyle = rgba(i % 2 ? C2 : C1, a * 1.7);
                    g.fillText(item.text, x, y + Math.sin(now / 3000 + i) * 4);
                } else {
                    const x = item.side === 'left' ? 16 : W - WIDGET_W - 16;
                    g.save();
                    g.translate(x, y);
                    WIDGETS[item.widget](g, a, now);
                    g.restore();
                }
            });

            if (compact) {
                ctx.drawImage(layer, 0, 0, W, H);
                return;
            }

            // Keep the maths in the side margins: fade it out over the content column.
            const edge = Math.max(24, (W - 1228) / 2 + 24);
            const stop = px => Math.min(1, Math.max(0, px / W));
            const fade = g.createLinearGradient(0, 0, W, 0);
            fade.addColorStop(0, 'rgba(0,0,0,1)');
            fade.addColorStop(stop(edge + 10), 'rgba(0,0,0,1)');
            fade.addColorStop(stop(edge + 120), 'rgba(0,0,0,0.12)');
            fade.addColorStop(stop(W - edge - 120), 'rgba(0,0,0,0.12)');
            fade.addColorStop(stop(W - edge - 10), 'rgba(0,0,0,1)');
            fade.addColorStop(1, 'rgba(0,0,0,1)');
            g.globalCompositeOperation = 'destination-in';
            g.fillStyle = fade;
            g.fillRect(0, 0, W, H);
            g.globalCompositeOperation = 'source-over';
            ctx.drawImage(layer, 0, 0, W, H);
        };

        /* ---------- main loop ---------- */

        const frame = (now) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            const scroll = reduceMotion ? 0 : window.scrollY;
            const link = linkDist();
            ctx.clearRect(0, 0, W, H);

            drawMaths(scroll, now);

            for (const n of nodes) {
                n.px = n.x;
                n.py = n.y;
                n.act = Math.max(0, n.act - dt * 1.1);
            }

            // Edges ("weights").
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                const p = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const q = nodes[j];
                    const d = Math.hypot(p.px - q.px, p.py - q.py);
                    if (d > link) continue;
                    const w = (1 - d / link) ** 1.5;
                    const glow = Math.max(p.act, q.act);
                    ctx.strokeStyle = glow > 0.05 ? rgba(C2, w * (0.14 + glow * 0.4)) : rgba(C1, w * 0.18);
                    ctx.beginPath();
                    ctx.moveTo(p.px, p.py);
                    ctx.lineTo(q.px, q.py);
                    ctx.stroke();
                }
            }

            // Attention lines from nearby nodes to the cursor.
            const reach = 190;
            for (const n of nodes) {
                const d = Math.hypot(n.px - pointer.x, n.py - pointer.y);
                if (d < reach) {
                    const w = 1 - d / reach;
                    ctx.strokeStyle = rgba(C2, w * 0.35);
                    ctx.beginPath();
                    ctx.moveTo(n.px, n.py);
                    ctx.lineTo(pointer.x, pointer.y);
                    ctx.stroke();
                    n.act = Math.max(n.act, w * 0.35);
                }
            }

            // Nodes ("neurons") with activation rings.
            for (const n of nodes) {
                const fade = Math.min(1, n.py / 40, (H - n.py) / 40);
                ctx.fillStyle = n.act > 0.05 ? rgba(C2, (0.55 + n.act * 0.45) * fade) : rgba(C1, 0.55 * fade);
                ctx.beginPath();
                ctx.arc(n.px, n.py, n.r + n.act * 1.4, 0, Math.PI * 2);
                ctx.fill();
                if (n.act > 0.35) {
                    ctx.strokeStyle = rgba(C3, (n.act - 0.35) * 0.8);
                    ctx.beginPath();
                    ctx.arc(n.px, n.py, n.r + 3 + (1 - n.act) * 12, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }

            if (!reduceMotion) raf = requestAnimationFrame(frame);
        };

        const onPointerMove = (e) => {
            if (e.pointerType !== 'mouse') return;
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        };
        const onPointerLeave = () => {
            pointer.x = -9999;
            pointer.y = -9999;
        };
        const redrawStatic = () => reduceMotion && frame(performance.now());
        const onResize = () => {
            resize();
            redrawStatic();
        };

        resize();
        document.fonts?.ready.then(redrawStatic);
        if (reduceMotion) frame(performance.now());
        else raf = requestAnimationFrame(frame);

        window.addEventListener('resize', onResize);
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onPointerLeave);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('pointermove', onPointerMove);
            document.documentElement.removeEventListener('pointerleave', onPointerLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />;
};

export default NeuralBackground;
