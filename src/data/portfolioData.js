import planckShot from '../assets/projects/planck.webp';
import cognigraphShot from '../assets/projects/cognigraph.webp';
import fruitguardShot from '../assets/projects/fruitguard.webp';
import neuroarcShot from '../assets/projects/neuroarc.webp';

export const portfolioData = {
    name: "Manoj Kumar Thapa",
    title: "AI Software Engineer",
    headlineWords: ["LLM agents", "graph-RAG systems", "vision models", "production APIs"],
    description: "MSc Artificial Intelligence graduate (**Distinction**) from Aston University. I build AI systems end to end: **Python and FastAPI** on the back, **React** on the front, and **golden sets, fault injection and baselines** to show they work. Before my MSc I was a software engineer at **Accenture**, where I cut REST API latency by **40%** in Java Spring Boot services.",
    resume_link: `${import.meta.env.BASE_URL}CV.pdf`,
    address: "Birmingham, UK",
    relocation: "Open to relocation",
    visa: "UK Graduate Route visa valid to 2028",
    visaNote: "No sponsorship required",
    email: "thapam807@gmail.com",
    phone: "+447438029689",
    phoneDisplay: "+44 7438 029689",
    phoneLink: "tel:+447438029689",

    social_links: [
        { name: "GitHub", url: "https://github.com/iammanoj807", icon: "fa-brands fa-github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/manoj-kumar-thapa-7595a5168", icon: "fa-brands fa-linkedin-in" },
        { name: "LeetCode", url: "https://leetcode.com/u/manojthapa/", icon: "simple-icons:leetcode" },
        { name: "Blog", url: "https://hamropedia.com", icon: "fa-solid fa-pen-nib" },
        { name: "Email", url: "mailto:thapam807@gmail.com", icon: "fa-solid fa-envelope" }
    ],

    stats: [
        { value: 30, suffix: "/30", label: "tasks completed with the primary LLM provider disabled", source: "Planck AI" },
        { value: 95, suffix: "%", label: "retrieval hit@3, against 80% for a keyword baseline", source: "CogniGraph" },
        { value: 96.3, decimals: 1, suffix: "%", label: "accuracy from only 207 labelled images", source: "FruitGuard AI" },
        { value: 73, suffix: " FPS", label: "real-time inference with ONNX Runtime", source: "FruitGuard AI" },
        { value: 40, suffix: "%", label: "REST API latency cut in Spring Boot services", source: "Accenture" }
    ],

    marquee: [
        { name: "Python", icon: "simple-icons:python" },
        { name: "FastAPI", icon: "simple-icons:fastapi" },
        { name: "React", icon: "simple-icons:react" },
        { name: "TypeScript", icon: "simple-icons:typescript" },
        { name: "PyTorch", icon: "simple-icons:pytorch" },
        { name: "YOLOv8", icon: "fa-solid fa-eye" },
        { name: "ONNX Runtime", icon: "simple-icons:onnx" },
        { name: "LangGraph", icon: "simple-icons:langchain" },
        { name: "ChromaDB", icon: "fa-solid fa-database" },
        { name: "Docker", icon: "simple-icons:docker" },
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "Spring Boot", icon: "simple-icons:springboot" },
        { name: "Hugging Face", icon: "simple-icons:huggingface" },
        { name: "Gemini", icon: "simple-icons:googlegemini" },
        { name: "NVIDIA", icon: "simple-icons:nvidia" },
        { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" }
    ],

    projects: [
        {
            title: "FruitGuard AI",
            screenshot: fruitguardShot,
            kicker: "MSc dissertation · computer vision",
            accent: "var(--p1)",
            date: "Aug 2025 – Apr 2026",
            metric: { value: "96.3%", label: "classification accuracy" },
            subMetrics: [
                { value: "207", label: "labelled images" },
                { value: "34x", label: "less labelled data than pre-training" },
                { value: "73 FPS", label: "real-time inference" }
            ],
            description: [
                "A **YOLOv8** model fine-tuned through a two-phase transfer-learning pipeline, pre-train on a large fruit dataset then fine-tune on a small one: **96.3%** classification accuracy, 52 of 54, from only **207** labelled images.",
                "The constraint was the whole point. Labelling is the expensive part of a vision project, so what I was really measuring was how little labelled data the pipeline could survive on — 207 images against the **7,108** used for pre-training is a **34x** reduction.",
                "It beat the COCO-pretrained baseline by **+6.03 pp mAP@0.5:0.95** (0.5854 to 0.6457) and **+3.12 pp precision**.",
                "Optimized inference with **ONNX Runtime** to a real-time **73 FPS**, deployed as a live Hugging Face demo you can try in a browser."
            ],
            tags: ["PyTorch", "YOLOv8", "ONNX Runtime"],
            link: "https://huggingface.co/spaces/manojthapaa/fruit-guard-ai"
        },
        {
            title: "Planck AI",
            screenshot: planckShot,
            kicker: "Agentic research assistant",
            accent: "var(--p2)",
            date: "Sep 2025 – Nov 2025",
            metric: { value: "30/30", label: "tasks completed under fault injection" },
            subMetrics: [
                { value: "80%", label: "correct tool selection" },
                { value: "2.7 s", label: "median latency" },
                { value: "20/20", label: "graded tasks correct" }
            ],
            description: [
                "I wrote the agent loop myself instead of reaching for a framework, so the tool routing, planning, retries and failure handling are all code I can explain. It runs **4 tools** (web search, code execution in 7 languages, PDF/URL reading, image analysis) across up to **8 planning steps**.",
                "It fails over mid-run across **Groq, Gemini and NVIDIA** behind one OpenAI-compatible interface. With the primary provider disabled on every single call, it still finished **30 of 30** tasks.",
                "I wrote the evaluation before I wrote any conclusions: a **30-question golden set** and a grading rubric, both committed to Git before the first run, so I could not move the goalposts afterwards. **80%** correct tool selection, **2.7 s** median latency, and no incorrect answer among the **20** tasks the rubric could grade. The scorer excludes the other ten and prints why."
            ],
            tags: ["Python", "FastAPI", "React", "Docker"],
            github: "https://github.com/iammanoj807/planck-ai",
            link: "https://huggingface.co/spaces/manojthapaa/planck-ai"
        },
        {
            title: "CogniGraph",
            screenshot: cognigraphShot,
            kicker: "Graph RAG explorer",
            accent: "var(--p3)",
            date: "Jun 2025 – Jul 2025",
            metric: { value: "95%", label: "retrieval hit@3 on the rebuilt set, against 80% for a keyword baseline" },
            subMetrics: [
                { value: "35 pt", label: "test-set bias found and removed" },
                { value: "~1,400", label: "char silent-truncation limit found" }
            ],
            description: [
                "A knowledge-graph RAG explorer: it turns documents, including **scanned PDFs via OCR**, into an interactive **3D graph** and answers only from passages retrieved out of a **ChromaDB** vector database.",
                "I built the test corpus to be hard on purpose, six documents with deliberately overlapping vocabulary, so a question about ONNX cannot be answered by keyword-matching the word ONNX.",
                "My first test questions were written alongside that corpus, in the documents' own phrasing, and that inflated hit@1 by **35 points** (90% to 55%). I rebuilt the set in user wording and measured the corrected set at **95% hit@3**, against **80%** for a keyword baseline on the same questions.",
                "The chunk-size sweep said 2,000 characters was best. It was, but only because six documents make six chunks and the task collapses into picking one of six. The embedding model also discards text past roughly **1,400 characters** with no error raised, so I set chunk size to **1,000**."
            ],
            tags: ["Python", "ChromaDB", "NetworkX", "OCR"],
            github: "https://github.com/iammanoj807/CogniGraph",
            link: "https://huggingface.co/spaces/manojthapaa/CogniGraph"
        },
        {
            title: "NeuroArc",
            screenshot: neuroarcShot,
            kicker: "AI job application assistant",
            accent: "var(--p4)",
            date: "Nov 2025 – Dec 2025",
            metric: { value: "Verified", label: "fit scores built only from evidence found in the CV text" },
            subMetrics: [
                { value: "PDF · DOCX", label: "CV parsing with OCR fallback" },
                { value: "Live", label: "UK jobs from the Reed API" }
            ],
            description: [
                "An assistant that parses a CV (**PDF or DOCX**, with an OCR fallback), pulls live UK jobs from the **Reed API**, scores CV-to-job fit and exports a tailored CV as a PDF.",
                "The design problem here is evidence: an LLM asked whether a candidate fits will cheerfully invent the proof. So the model does not score. It returns requirement–evidence pairs as **structured JSON**, the evidence has to be an exact phrase from the CV, and code drops any requirement whose phrase is not in the document before the weighted score is computed.",
                "It is not airtight, and the README says so: the check proves the evidence came from the CV, not that it is about the skill being claimed. I built a stricter rule and reverted it, because it dropped real skills whenever the CV and the advert used different words for the same thing, like Postgres and PostgreSQL."
            ],
            tags: ["FastAPI", "React", "Groq API", "OCR"],
            github: "https://github.com/iammanoj807/NeuroArc",
            link: "https://huggingface.co/spaces/manojthapaa/NeuroArc"
        }
    ],

    experience: [
        {
            title: "Mentor, MSc Artificial Intelligence",
            company: "Aston University",
            company_logo: "https://www.aston.ac.uk/themes/custom/aston_university/logo.svg",
            duration: "Aug 2025 \u2013 Jan 2026",
            location: "Birmingham, UK",
            description: [
                "Mentored **5 MSc Artificial Intelligence students** in Python and machine learning, one-to-one, every week.",
                "The same questions came back week after week, so I built the sessions around the three that blocked people most: getting a working Python environment, debugging a training loop whose loss would not come down, and picking a baseline before picking a model."
            ],
            skills: ["Leadership", "Teaching", "Mentoring", "Python", "Machine Learning", "Technical Communication"]
        },
        {
            title: "Software Engineer",
            company: "Accenture",
            company_logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
            duration: "Oct 2021 \u2013 Oct 2022",
            location: "Bengaluru, India",
            description: [
                "Cut p95 REST API latency from roughly **850 ms to 510 ms** across **18 endpoints**, a **40%** reduction, by eliminating **6 N+1 query sites** and rewriting the SQL behind them in **Java Spring Boot**.",
                "Owned the business logic and the **PostgreSQL/MySQL** data-access layer for that service, from query design through to the endpoints that consumed it.",
                "Shipped and maintained production REST APIs on a large-scale enterprise application in a **7-engineer delivery team**, on 2-week sprints."
            ],
            skills: ["Java", "Spring Boot", "REST API design", "SQL", "PostgreSQL", "MySQL", "Performance Tuning", "Backend Development"]
        }
    ],

    skills: [
        {
            category: "LLMs & Agents",
            icon: "fa-solid fa-robot",
            wide: true,
            skills: [
                { name: "Tool / function calling" },
                { name: "Agent loops" },
                { name: "LangGraph", icon: "simple-icons:langchain" },
                { name: "RAG" },
                { name: "Prompt engineering" },
                { name: "Structured JSON output" },
                { name: "Multi-provider LLM fallback" },
                { name: "Groq · Gemini · NVIDIA" },
                { name: "OpenAI-compatible APIs" }
            ]
        },
        {
            category: "Evaluation",
            icon: "fa-solid fa-flask-vial",
            highlight: true,
            note: "How I know it works",
            description: "The numbers on this page come from golden sets, baselines and fault-injection runs, not one-off demos.",
            skills: [
                { name: "Golden-set design" },
                { name: "Fault injection" },
                { name: "Baseline controls" },
                { name: "Latency benchmarking" }
            ]
        },
        {
            category: "Languages",
            icon: "fa-solid fa-code",
            skills: [
                { name: "Python", icon: "simple-icons:python" },
                { name: "SQL", icon: "fa-solid fa-database" },
                { name: "Java", icon: "simple-icons:openjdk" },
                { name: "JavaScript", icon: "simple-icons:javascript" },
                { name: "TypeScript", icon: "simple-icons:typescript" }
            ]
        },
        {
            category: "Retrieval & Data",
            icon: "fa-solid fa-magnifying-glass-chart",
            skills: [
                { name: "ChromaDB" },
                { name: "Embeddings" },
                { name: "Semantic search" },
                { name: "OCR" },
                { name: "PostgreSQL", icon: "simple-icons:postgresql" },
                { name: "MySQL", icon: "simple-icons:mysql" }
            ]
        },
        {
            category: "ML & Computer Vision",
            icon: "fa-solid fa-eye",
            skills: [
                { name: "PyTorch", icon: "simple-icons:pytorch" },
                { name: "YOLOv8" },
                { name: "Transfer learning" },
                { name: "Fine-tuning" },
                { name: "ONNX Runtime", icon: "simple-icons:onnx" },
                { name: "Quantization" }
            ]
        },
        {
            category: "Backend & Frontend",
            icon: "fa-solid fa-layer-group",
            skills: [
                { name: "FastAPI", icon: "simple-icons:fastapi" },
                { name: "Pydantic", icon: "simple-icons:pydantic" },
                { name: "Spring Boot", icon: "simple-icons:springboot" },
                { name: "REST API design" },
                { name: "React", icon: "simple-icons:react" },
                { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" }
            ]
        },
        {
            category: "Tools & Deployment",
            icon: "fa-solid fa-rocket",
            skills: [
                { name: "Docker", icon: "simple-icons:docker" },
                { name: "Docker Compose" },
                { name: "Git", icon: "simple-icons:git" },
                { name: "Hugging Face Spaces", icon: "simple-icons:huggingface" },
                { name: "Render", icon: "simple-icons:render" }
            ]
        }
    ],

    extraSkills: ["Go", "Node.js", "Kafka", "RabbitMQ", "Kubernetes", "AWS", "DynamoDB", "Snowflake", "TensorFlow", "scikit-learn", "GitHub Actions", "JUnit", "pytest"],

    education: [
        {
            degree: "MSc Artificial Intelligence",
            school: "Aston University",
            location: "Birmingham, UK",
            duration: "Jan 2025 – Jul 2026",
            grade: "Distinction",
            gradeLabel: "70.37% overall",
            description: "Deep learning, NLP and computer vision. Dissertation: FruitGuard AI, few-shot fruit detection with YOLOv8, 96.3% accuracy from 207 labelled images, a 34x reduction against the pre-training set.",
            skills: ["PyTorch", "Deep Learning", "Computer Vision", "NLP", "Python"]
        },
        {
            degree: "BE Computer Science",
            school: "Dr. Ambedkar Institute of Technology",
            location: "Bengaluru, India",
            duration: "Aug 2017 – Sep 2021",
            grade: "9.45",
            gradeLabel: "CGPA / 10",
            description: "Data structures and algorithms, operating systems and DBMS, plus coursework in machine learning and full-stack development. Final-year project published in IJIRCCE: Indian banknote recognition for visually impaired users.",
            skills: ["C++", "Data Structures", "DBMS", "Operating Systems", "Full-stack Development"],
            publication: {
                title: "Indian Currency Recognition for Visually Impaired using Deep Learning Technique",
                venue: "IJIRCCE, Vol. 9 Issue 7, July 2021 \u00b7 DOI 10.15680/IJIRCCE.2021.0907159",
                link: `${import.meta.env.BASE_URL}indian-currency-recognition-ijircce-2021.pdf`
            }
        }
    ],

    certifications: [
        {
            title: "AI Agents Intensive",
            subtitle: "Google × Kaggle",
            link: "https://www.kaggle.com/certification/badges/manojkumarthapa/105",
            icon: "logos:google-icon"
        },
        {
            title: "Machine Learning Specialization",
            subtitle: "Stanford · Coursera",
            link: "https://www.coursera.org/account/accomplishments/certificate/W29WV2DFL476",
            icon: "fa-solid fa-brain",
            iconColor: "#ff6f6f"
        },
        {
            title: "Deep Learning Specialization",
            subtitle: "DeepLearning.AI · Coursera",
            link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MLU4694ENBEL",
            icon: "fa-solid fa-network-wired",
            iconColor: "#ffd166"
        },
        {
            title: "AI Masterclass",
            subtitle: "SARAS AI Institute",
            link: "https://credsverse.com/credentials/3f44c319-2b85-4345-824f-191da7fdbef2",
            icon: "fa-solid fa-microchip",
            iconColor: "#38d9f5"
        },
        {
            title: "Data Visualization using Python",
            subtitle: "Great Learning",
            link: "https://olympus1.greatlearning.in/course_certificate/ZMICNLYY",
            icon: "logos:python"
        },
        {
            title: "Data Visualization using Tableau",
            subtitle: "Great Learning",
            link: "https://olympus1.greatlearning.in/course_certificate/DLEKCAPR",
            icon: "simple-icons:tableau",
            iconColor: "#e97627"
        }
    ]
};
