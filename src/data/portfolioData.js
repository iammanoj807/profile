import flyrankLogo from '/flyrank-logo.jpeg';

export const portfolioData = {
    name: "Manoj Kumar Thapa",
    title: "AI Software Engineer",
    headlineWords: ["LLM agents", "graph-RAG systems", "vision models", "production APIs"],
    description: "MSc Artificial Intelligence graduate from Aston University. I build AI systems end to end: **Python and FastAPI** on the back, **React** on the front, and **golden sets, fault injection and baselines** to show they work. Before my MSc I was a software engineer at **Accenture**, where I cut REST API latency by **40%** in Java Spring Boot services.",
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
        { value: 95, suffix: "%", label: "retrieval hit@3 against a keyword baseline", source: "CogniGraph" },
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
            title: "Planck AI",
            kicker: "Agentic research assistant",
            accent: "var(--p1)",
            date: "Sep 2025 – Nov 2025",
            metric: { value: "30/30", label: "tasks completed under fault injection" },
            subMetrics: [
                { value: "80%", label: "correct tool selection" },
                { value: "2.7 s", label: "median latency" },
                { value: "0", label: "incorrect answers" }
            ],
            description: [
                "Built an LLM agent in Python **without an agent framework**, orchestrating **4 tools** (web search, code execution in 7 languages, PDF/URL reading, image analysis) across up to **8 planning steps**.",
                "Designed mid-run failover across **Groq, Gemini and NVIDIA** behind one OpenAI-compatible interface, sustaining **30/30** task completion under fault injection with the primary provider disabled on every call.",
                "Built an evaluation harness with a **30-question golden set** and a rubric committed to git before the first run, measuring **80%** correct tool selection, **2.7 s** median latency and **zero** incorrect answers."
            ],
            tags: ["Python", "FastAPI", "React", "Docker"],
            github: "https://github.com/iammanoj807/planck-ai",
            link: "https://huggingface.co/spaces/manojthapaa/planck-ai"
        },
        {
            title: "CogniGraph",
            kicker: "Graph RAG explorer",
            accent: "var(--p2)",
            date: "Jun 2025 – Jul 2025",
            metric: { value: "95%", label: "retrieval hit@3" },
            subMetrics: [
                { value: "35 pt", label: "test-set bias found and removed" },
                { value: "~1,400", label: "char silent-truncation limit found" }
            ],
            description: [
                "Built a knowledge-graph RAG app that turns documents, including **scanned PDFs via OCR**, into an interactive **3D graph** and answers only from passages retrieved from a **ChromaDB** vector database.",
                "Benchmarked retrieval at **95% hit@3** against a keyword baseline; found self-written test questions overstated accuracy by **35 points** and rebuilt the set in natural user phrasing to remove the bias.",
                "Diagnosed silent truncation in the embedding model past **~1,400 characters**, which dropped text from larger chunks with no error raised, and set chunk size from that measurement."
            ],
            tags: ["Python", "ChromaDB", "NetworkX", "OCR"],
            github: "https://github.com/iammanoj807/CogniGraph",
            link: "https://huggingface.co/spaces/manojthapaa/CogniGraph"
        },
        {
            title: "FruitGuard AI",
            kicker: "MSc dissertation · computer vision",
            accent: "var(--p3)",
            date: "Aug 2025 – Apr 2026",
            metric: { value: "96.3%", label: "classification accuracy" },
            subMetrics: [
                { value: "207", label: "labelled images" },
                { value: "95%", label: "less annotation data" },
                { value: "73 FPS", label: "real-time inference" }
            ],
            description: [
                "Fine-tuned a **YOLOv8** computer-vision model with a two-phase transfer-learning pipeline to **96.3%** classification accuracy from only **207** labelled images, a **95%** reduction in annotation data.",
                "Outperformed the COCO-pretrained baseline by **+6.03% mAP@0.5:0.95** and **+3.12% precision**.",
                "Optimized inference with **ONNX Runtime** to real-time **73 FPS**, deployed as a live Hugging Face demo."
            ],
            tags: ["PyTorch", "YOLOv8", "ONNX Runtime"],
            link: "https://huggingface.co/spaces/manojthapaa/fruit-guard-ai"
        },
        {
            title: "NeuroArc",
            kicker: "AI job application assistant",
            accent: "var(--p4)",
            date: "Nov 2025 – Dec 2025",
            metric: { value: "Verified", label: "fit scores built only from evidence found in the CV" },
            subMetrics: [
                { value: "PDF · DOCX", label: "CV parsing with OCR fallback" },
                { value: "Live", label: "UK jobs from the Reed API" }
            ],
            description: [
                "Built an end-to-end assistant that parses CVs (**PDF/DOCX, OCR fallback**), pulls live UK jobs from the **Reed API**, scores CV–job fit and exports a tailored CV as PDF.",
                "Prevented hallucinated matches: the LLM returns requirement–evidence pairs as **structured JSON**, and code computes the weighted score **only from evidence verified against the CV text**."
            ],
            tags: ["FastAPI", "React", "Groq API", "OCR"],
            github: "https://github.com/iammanoj807/NeuroArc",
            link: "https://huggingface.co/spaces/manojthapaa/NeuroArc"
        }
    ],

    experience: [
        {
            title: "AI Intern",
            company: "FlyRank AI",
            company_logo: flyrankLogo,
            duration: "Jun 2026 – Aug 2026",
            location: "London, UK · Remote",
            description: [
                "Built **RAG pipelines**, structured output systems and evaluation harnesses as part of FlyRank AI's Backend AI Engineering track.",
                "Worked with **Python, FastAPI and LLM APIs** to design and ship backend AI products."
            ],
            skills: ["Python", "FastAPI", "LLM APIs", "RAG"]
        },
        {
            title: "Mentor, MSc Artificial Intelligence",
            company: "Aston University",
            company_logo: "https://www.aston.ac.uk/themes/custom/aston_university/logo.svg",
            duration: "Aug 2025 – Jan 2026",
            location: "Birmingham, UK",
            description: [
                "Mentored **10+ MSc AI students** in Python and machine learning through weekly one-to-one sessions."
            ],
            skills: ["Python", "Machine Learning", "Mentoring"]
        },
        {
            title: "Software Engineer",
            company: "Accenture",
            company_logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
            duration: "Oct 2021 – May 2022",
            location: "Bangalore, India",
            description: [
                "Cut REST API latency **40%** by eliminating **N+1 queries** and optimizing SQL in **Java Spring Boot** services.",
                "Built and maintained production REST API services for a large-scale enterprise application, implementing business logic and **PostgreSQL/MySQL** data-access layers."
            ],
            skills: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "MySQL"]
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
            grade: "70.37%",
            gradeLabel: "Overall",
            description: "Deep learning, NLP and computer vision. Dissertation: FruitGuard AI, few-shot fruit detection with YOLOv8 (96.3% accuracy from 207 labelled images)."
        },
        {
            degree: "BE Computer Science",
            school: "Dr. Ambedkar Institute of Technology",
            location: "Bangalore, India",
            duration: "Aug 2017 – Sep 2021",
            grade: "9.45",
            gradeLabel: "CGPA / 10",
            description: "Data structures and algorithms, operating systems and DBMS, plus coursework in machine learning and full-stack development."
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
