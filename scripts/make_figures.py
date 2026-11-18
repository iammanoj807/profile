"""Draw the project figures shown on the homepage (src/assets/figures/*.svg).

Every number comes from the projects' own result files:
- FruitGuard AI: "Part 1 - AI Training Models/Transfer Learning on B (A->B)/results_r2_d1_transfer.json"
  (mAP@0.5:0.95 0.6457, 207 training / 56 test images) and the dissertation's COCO-pretrained
  baseline on the same Dataset B (0.5854).
- Planck AI: planck-ai/eval/results/scores.json (baseline.jsonl and faulted.jsonl, 30 tasks each).
- CogniGraph: cognigraph/eval/retrieval_results.json (original vs paraphrased questions, lexical baseline).
- NeuroArc: a diagram of the evidence guard described in neuroarc/README.md.

Run: uv run --with matplotlib python scripts/make_figures.py
"""
import os
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch

OUT = Path(__file__).resolve().parent.parent / "src" / "assets" / "figures"
OUT.mkdir(parents=True, exist_ok=True)

BLUE = "#1764c0"
LIGHT_BLUE = "#8fb6e6"
GREY = "#b9c0c8"
ORANGE = "#d9730d"
INK = "#1f2328"
MUTED = "#5d636b"

plt.rcParams.update({
    "font.family": ["Helvetica Neue", "Helvetica", "Arial", "DejaVu Sans"],
    "font.size": 15,
    "svg.fonttype": "path",
    "axes.edgecolor": "#c9ced4",
    "axes.labelcolor": MUTED,
    "xtick.color": INK,
    "ytick.color": MUTED,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "figure.facecolor": "white",
    "axes.facecolor": "white",
})


def new_fig(title, subtitle):
    fig = plt.figure(figsize=(8, 5), dpi=100)
    fig.text(0.04, 0.93, title, fontsize=21, fontweight="bold", color=INK, va="top")
    fig.text(0.04, 0.855, subtitle, fontsize=14, color=MUTED, va="top")
    return fig


def label_bars(ax, bars, texts, color=INK, size=15, pad=1.5):
    for bar, text in zip(bars, texts):
        ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + pad, text,
                ha="center", va="bottom", fontsize=size, fontweight="bold", color=color)


PREVIEW = os.environ.get("FIG_PREVIEW_DIR")  # optional: also write PNG previews here


def save(fig, name):
    fig.savefig(OUT / f"{name}.svg", format="svg", facecolor="white")
    if PREVIEW:
        fig.savefig(Path(PREVIEW) / f"{name}.png", format="png", facecolor="white")
    plt.close(fig)


# FruitGuard AI: transfer learning against the COCO-pretrained baseline on Dataset B
fig = new_fig("Transfer learning beats the COCO baseline",
              "mAP@0.5:0.95 on Dataset B (3 fruits): 207 training images, 56 test images")
ax = fig.add_axes([0.1, 0.12, 0.86, 0.62])
values = [0.5854, 0.6457]
bars = ax.bar(["COCO-pretrained\nbaseline", "Pre-train on A,\nfine-tune on B"], values,
              color=[GREY, BLUE], width=0.55)
label_bars(ax, bars, ["0.585", "0.646"], pad=0.015)
ax.text(1, 0.72, "+6.03 pp", ha="center", va="bottom", fontsize=16, fontweight="bold", color=ORANGE)
ax.set_ylim(0, 0.8)
ax.set_ylabel("mAP@0.5:0.95")
ax.tick_params(axis="x", length=0, labelsize=15)
save(fig, "fruitguard")

# Planck AI: the same 30 tasks with every provider up, then with the primary provider disabled
fig = new_fig("Still completes every task with its main LLM down",
              "30-task golden set; the fault-injection run disables Groq on every call")
ax = fig.add_axes([0.1, 0.12, 0.86, 0.6])
groups = ["Tasks completed", "Correct tool chosen", "Gradable answers right"]
normal = [100.0, 80.0, 100.0]
faulted = [100.0, 76.7, 100.0]
x = range(len(groups))
w = 0.36
b1 = ax.bar([i - w / 2 for i in x], normal, w, color=LIGHT_BLUE, label="All providers up")
b2 = ax.bar([i + w / 2 for i in x], faulted, w, color=BLUE, label="Primary provider disabled")
label_bars(ax, b1, ["30/30", "24/30", "20/20"], color=MUTED, size=13)
label_bars(ax, b2, ["30/30", "23/30", "20/20"], size=13)
ax.set_xticks(list(x), groups)
ax.set_ylim(0, 118)
ax.set_yticks([0, 25, 50, 75, 100])
ax.set_ylabel("% of tasks")
ax.tick_params(axis="x", length=0, labelsize=14)
ax.legend(loc="upper center", bbox_to_anchor=(0.5, 1.12), ncol=2, frameon=False, fontsize=13)
save(fig, "planck")

# CogniGraph: the self-written test set overstated accuracy; the rebuilt set still beats keywords
fig = new_fig("My own test questions overstated accuracy",
              "Retrieval over 6 documents, 20 questions per set")
ax = fig.add_axes([0.1, 0.12, 0.86, 0.6])
metrics = ["hit@1", "hit@3"]
series = [
    ("Own questions", [90, 100], GREY),
    ("Rebuilt questions", [55, 95], BLUE),
    ("Keyword baseline (rebuilt)", [50, 80], ORANGE),
]
w = 0.26
for k, (name, vals, color) in enumerate(series):
    xs = [i + (k - 1) * w for i in range(len(metrics))]
    bars = ax.bar(xs, vals, w, color=color, label=name)
    label_bars(ax, bars, [f"{v}%" for v in vals], size=13)
ax.set_xticks(range(len(metrics)), metrics)
ax.set_ylim(0, 120)
ax.set_yticks([0, 25, 50, 75, 100])
ax.set_ylabel("% of questions")
ax.tick_params(axis="x", length=0, labelsize=16)
ax.legend(loc="upper center", bbox_to_anchor=(0.5, 1.12), ncol=3, frameon=False, fontsize=12)
save(fig, "cognigraph")

# NeuroArc: the evidence guard as a flow diagram
fig = new_fig("The model quotes evidence; code decides",
              "Each job requirement is scored only if its quoted evidence is found in the CV")
ax = fig.add_axes([0.02, 0.02, 0.96, 0.78])
ax.set_xlim(0, 100)
ax.set_ylim(0, 62)
ax.axis("off")


def box(x, y, w, h, title, body, fill, edge):
    ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.4,rounding_size=1.6",
                                fc=fill, ec=edge, lw=1.6))
    ax.text(x + w / 2, y + h - 3.2, title, ha="center", va="top", fontsize=14.5, fontweight="bold", color=INK)
    ax.text(x + w / 2, y + h - 9.6, body, ha="center", va="top", fontsize=12, color=MUTED, linespacing=1.35)


def arrow(p, q, text=None, offset=(0, 0), color=MUTED):
    ax.add_patch(FancyArrowPatch(p, q, arrowstyle="-|>", mutation_scale=18, lw=1.8, color=color))
    if text:
        ax.text((p[0] + q[0]) / 2 + offset[0], (p[1] + q[1]) / 2 + offset[1], text,
                fontsize=13, fontweight="bold", color=color, ha="center", va="center")


box(2, 34, 27, 24, "CV + job advert", "parsed text\n(PDF, DOCX, OCR)", "#f3f5f7", "#c9ced4")
box(36.5, 34, 27, 24, "LLM output (JSON)", "per requirement:\nname, importance,\nstatus, evidence quote", "#eef4fc", LIGHT_BLUE)
box(71, 34, 27, 24, "Evidence check", "skill named in the CV,\nor 60% of the quote's\nwords found in it", "#eef4fc", BLUE)
box(71, 2, 27, 24, "Weighted score", "skills 0.60, title 0.20,\nexperience 0.12,\neducation 0.08", "#e8f1fb", BLUE)
box(36.5, 2, 27, 24, "Marked missing", "evidence cleared;\nnever adds to\nthe score", "#fdf1e6", ORANGE)
arrow((30, 46), (35.6, 46))
arrow((64.5, 46), (70.1, 46))
arrow((84.5, 33.2), (84.5, 27), "pass", offset=(5.5, 0), color=BLUE)
arrow((76, 33.2), (61, 27), "fail", offset=(-4.5, 2), color=ORANGE)
save(fig, "neuroarc")

print("wrote", sorted(p.name for p in OUT.glob("*.svg")))
