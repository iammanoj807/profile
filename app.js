const { motion } = window.Motion;
const { useState, useEffect, useRef } = React;

// Portfolio Data
const portfolioData = {
  name: "Manoj Kumar Thapa",
  title: "Software Engineer & AI Engineer",
  description: "MSc Artificial Intelligence (Computer Science) student with a strong foundation in software development. Seeking a challenging software developer role to contribute to impactful projects and apply academic knowledge to real-world, data-driven solutions.",
  resume_link: "https://drive.google.com/file/d/1Qsc1ImHcuJYK-zkoO-c7g1x_f1oxHhVh/view?usp=sharing",
  leetcode: "https://leetcode.com/u/manojthapa/",
  blog_link: "https://hamropedia.com",
  address: "Birmingham, UK",
  phone: "+447438029689",
  phoneDisplay: "+44 7438 029689",
  phoneLink: "tel:+447438029689",

  social_links: [
    { name: "GitHub", url: "https://github.com/iammanoj807", icon: "fa-brands fa-github", color: "#FFFFFF" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/manoj-kumar-thapa-7595a5168", icon: "fa-brands fa-linkedin-in", color: "#0077B5" },
    { name: "Blog", url: "https://hamropedia.com", icon: "fa-solid fa-blog", color: "#FFA500" },
    { name: "Email", url: "mailto:thapam807@gmail.com", icon: "fa-solid fa-envelope", color: "#EA4335" }
  ],

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
        { name: "Java", icon: "fa-brands fa-java", color: "#007396" },
        { name: "SQL", icon: "fa-solid fa-database", color: "#4479A1" }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", icon: "fa-solid fa-brain", color: "#FFB81C" },
        { name: "Deep Learning", icon: "fa-solid fa-network-wired", color: "#FF6B6B" },
        { name: "PyTorch", icon: "fa-solid fa-fire", color: "#EE4C2C" },
        { name: "TensorFlow", icon: "fa-solid fa-cube", color: "#FF6F00" },
        { name: "Keras", icon: "fa-solid fa-layer-group", color: "#D00000" },
        { name: "Hugging Face", icon: "fa-solid fa-face-smile", color: "#FFD21E" },
        { name: "Scikit-learn", icon: "fa-solid fa-chart-line", color: "#F7931E" },
        { name: "OpenCV", icon: "fa-solid fa-image", color: "#5C3EEE" },
        { name: "LangChain", icon: "fa-solid fa-link", color: "#1C3144" },
        { name: "LLM", icon: "fa-solid fa-wand-magic-sparkles", color: "#9333EA" },
        { name: "Agents", icon: "fa-solid fa-robot", color: "#EF4444" },
        { name: "RAG", icon: "fa-solid fa-database", color: "#0EA5E9" },
        { name: "Vector DB", icon: "fa-solid fa-cubes", color: "#8B5CF6" },
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "React.js", icon: "fa-brands fa-react", color: "#61DAFB" },
        { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
        { name: "Spring Boot", icon: "fa-solid fa-leaf", color: "#6DB33F" },
        { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      skills: [
        { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
        { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ED" },
        { name: "Jupyter", icon: "fa-solid fa-book", color: "#F37726" },
        { name: "VS Code", icon: "fa-solid fa-code", color: "#007ACC" },
        { name: "GitHub", icon: "fa-brands fa-github", color: "#181717" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "fa-solid fa-database", color: "#00758F" },
        { name: "Firebase", icon: "fa-solid fa-fire", color: "#FF9800" }
      ]
    }
  ],
  experience: [
    {
      title: "Mentor",
      company: "Aston University",
      company_logo: "https://www.aston.ac.uk/themes/custom/aston_university/logo.svg",
      duration: "Aug 2025 - Present (3 months)",
      location: "Birmingham, England, United Kingdom · On-site",
      description: "Guiding new MSc AI students in their academic transition, supporting coursework, projects, and skill development.",
      skills: ["Leadership", "Communication", "Teaching", "Mentoring"]
    },
    {
      title: "Associate Software Engineer",
      company: "Accenture",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      duration: "October 2021 - October 2023",
      location: "Bengaluru, Karnataka, India",
      description: "Developed full-stack enterprise applications in an Agile team and optimized a key API, achieving a 40% reduction in response time for a high-traffic service."
    },
    {
      title: "Web Development Intern",
      company: "The Sparks Foundation",
      company_logo: "https://media.licdn.com/dms/image/v2/C560BAQFgHU3sTF4LfQ/company-logo_200_200/company-logo_200_200/0/1631365213896?e=1763596800&v=beta&t=QSrx27CA2yvCzY64JvJZrnuoCTUiUTLX8eIG191v168",
      duration: "October 2020 - November 2020",
      location: "Remote",
      description: "Engineered secure authentication modules and improved application performance by 30% through strategic code splitting and caching."
    }
  ],

  education: [
    {
      title: "Aston University, Birmingham",
      subtitle: "MSc Artificial Intelligence",
      duration: "Jan 2025 - Jan 2026 (Expected)",
      expected_distinction: true,
      descriptions: [
        "Specializing in advanced AI, including Deep Learning, Natural Language Processing (NLP), and Computer Vision.",
        "Applying theoretical knowledge to practical projects involving complex model architectures and MLOps principles."
      ]
    },
    {
      title: "Dr. Ambedkar Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "2017 - 2021",
      cgpa: "9.45/10",
      descriptions: [
        "Built a strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Architecture.",
        "Completed specialized coursework in Machine Learning, Deep Learning, and Full Stack Development."
      ]
    },
    {
      title: "Manimukunda College/HSS",
      subtitle: "Higher Secondary Education (+2)",
      duration: "2015 - 2017",
      descriptions: [
        "Developed strong analytical and problem-solving skills through a rigorous science and mathematics curriculum.",
        "Awarded the Mahatma Gandhi Scholarship for academic excellence.",
        "Achieved a final score of 75.8%."
      ]
    },
    {
      title: "New Horizon Institute",
      subtitle: "Secondary Education Examination (Class 10)",
      duration: "2014 - 2015",
      descriptions: [
        "Established an early foundation in STEM subjects with a focus on Computer Science and Mathematics.",
        "Achieved a final score of 85.63%."
      ]
    }
  ],

  certifications: [
    {
      title: "AI Masterclass: How AI Thinks",
      subtitle: "Saras AI Institute",
      link: "https://credsverse.com/credentials/3f44c319-2b85-4345-824f-191da7fdbef2",
      icon: "fa-solid:brain",
      iconColor: "#00FF00"
    },
    {
      title: "Machine Learning",
      subtitle: "Andrew Ng - Stanford University",
      link: "https://www.coursera.org/account/accomplishments/certificate/W29WV2DFL476",
      icon: "simple-icons:tensorflow",
      iconColor: "#FF6F00"
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Andrew Ng - deeplearning.ai",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MLU4694ENBEL",
      icon: "fa-solid:network-wired",
      iconColor: "#FFD700"
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "GUVI Training",
      link: "https://www.guvi.in/certificate?id=gfH250280A8ru61p75",
      icon: "simple-icons:opencv",
      iconColor: "#5C3EEE"
    },
    {
      title: "Data Visualization using Python",
      subtitle: "Great Learning",
      link: "https://olympus1.greatlearning.in/course_certificate/ZMICNLYY",
      icon: "fa-brands:python",
      iconColor: "#3776AB"
    },
    {
      title: "Data Visualization using Tableau",
      subtitle: "Great Learning",
      link: "https://olympus1.greatlearning.in/course_certificate/DLEKCAPR",
      icon: "simple-icons:tableau",
      iconColor: "#E97627"
    }
  ],

  projects: [
    {
      title: "Fruit Detection and Ripeness Assessment based on Transfer Learning for Agricultural Automation",
      description: "Real-time fruit classification and ripeness assessment using transfer learning. Final Year MSc project - currently in progress.",
      tags: ["Python", "Transfer Learning", "Computer Vision", "OpenCV", "Agriculture"],
      github: "https://github.com/iammanoj807",
      date: "Sep 2025 - Present",
      status: "In Progress",
      note: "Final Year MSc Project"
    },
    {
      title: "Sentiment Classification with DistilBERT",
      description: "Fine-tuned DistilBERT for sentiment classification on IMDb dataset. Achieved 86.68% accuracy with efficient model size and runtime.",
      tags: ["Python", "Transformers", "PyTorch", "HuggingFace", "NLP"],
      github: "https://github.com/iammanoj807/Sentiment-Classification-with-DistilBERT",
      date: "Jun 2025 - Jul 2025",
      accuracy: "86.68%",
      status: "Deployed"
    },
    {
      title: "Face Mask Detection",
      description: "Real-time face mask detection system using MobileNetV2 architecture. Computationally efficient with 98% accuracy.",
      tags: ["Python", "TensorFlow", "Keras", "MobileNetV2", "OpenCV"],
      github: "https://github.com/Manoj-Thapa/Face-Mask-Detection",
      date: "Apr 2021 - Jul 2021",
      accuracy: "98%",
      status: "Deployed"
    },
    {
      title: "Indian Currency Recognition for Visually Impaired using Deep Learning Technique",
      description: "Currency recognition system using CNN achieving 96% accuracy. Published research paper on this innovative accessibility project.",
      tags: ["Python", "TensorFlow", "CNN", "Research", "Accessibility"],
      link: "https://www.researchgate.net/publication/390832714_Indian_Currency_Recognition_for_Visually_Impaired_using_Deep_Learning_Technique",
      linkText: "open:repository",
      date: "Jan 2021 - Jul 2021",
      accuracy: "96%",
      status: "Deployed"
    },
  ]
};

// Terminal Splash Screen Component
const SplashScreen = ({ onComplete }) => {
  const [lines, setLines] = React.useState([]);

  React.useEffect(() => {
    const terminalLines = [
      { text: '📚 Manoj is learning...', delay: 100, class: 'terminal-info' },
      { text: '', delay: 500 },
      { text: '👤 Oh! A hiring manager is looking at your profile', delay: 700, class: 'terminal-warning' },
      { text: '', delay: 1000 },
      { text: '🔨 Building portfolio...', delay: 1200, class: 'terminal-info' },
      { text: '⚡ Loading content...', delay: 1400, class: 'terminal-info' },
      { text: '🎨 Rendering design...', delay: 1600, class: 'terminal-info' },
      { text: '', delay: 1800 },
      { text: '✓ Ready', delay: 2000, class: 'terminal-success' },
      { text: '', delay: 2200 },
      { text: '🚀 Portfolio Loaded!', delay: 2400, class: 'terminal-success' },
      { text: '', delay: 2600 },
      { text: '👋 Welcome to Manoj Kumar Thapa Portfolio', delay: 2800, class: 'terminal-success' },
      { text: '', delay: 2950 },
    ];

    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === terminalLines.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, line.delay);
    });
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
          <span style={{ marginLeft: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            manoj@portfolio:~
          </span>
        </div>
        <div className="terminal-body">
          {lines.map((line, index) => (
            <div key={index} className={`terminal-line show ${line.class || ''}`}>
              {line.text}
            </div>
          ))}
          <div className="terminal-line show">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated SVG Developer Character
const DeveloperCharacter = () => {
  return (
    <motion.svg
      className="developer-character"
      viewBox="0 0 400 400"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Desk */}
      <motion.rect
        x="50"
        y="280"
        width="300"
        height="20"
        fill="#00d4ff"
        rx="5"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Monitor */}
      <motion.rect
        x="150"
        y="180"
        width="140"
        height="100"
        fill="#0a0e27"
        stroke="#00ff88"
        strokeWidth="3"
        rx="5"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Code Lines on Monitor */}
      <motion.line
        x1="160"
        y1="200"
        x2="230"
        y2="200"
        stroke="#00ff88"
        strokeWidth="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      />
      <motion.line
        x1="160"
        y1="215"
        x2="270"
        y2="215"
        stroke="#00d4ff"
        strokeWidth="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.line
        x1="160"
        y1="230"
        x2="250"
        y2="230"
        stroke="#ffbe0b"
        strokeWidth="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
      />
      <motion.line
        x1="160"
        y1="245"
        x2="220"
        y2="245"
        stroke="#ff006e"
        strokeWidth="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
      />

      {/* Monitor Stand */}
      <rect x="210" y="280" width="20" height="30" fill="#00d4ff" />

      {/* Person Head */}
      <motion.circle
        cx="100"
        cy="230"
        r="25"
        fill="#ffbe0b"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Person Body */}
      <motion.rect
        x="75"
        y="255"
        width="50"
        height="60"
        fill="#833ab4"
        rx="5"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Arms */}
      <motion.rect
        x="60"
        y="260"
        width="70"
        height="10"
        fill="#6f00d2"
        rx="5"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Coffee Cup */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <rect x="320" y="260" width="30" height="35" fill="#0a0e27" stroke="#00ff88" strokeWidth="2" rx="3" />
        <ellipse cx="335" cy="260" rx="15" ry="5" fill="#0a0e27" stroke="#00ff88" strokeWidth="2" />
        {/* Steam */}
        <motion.path
          d="M 330 245 Q 325 235 330 225"
          stroke="#00d4ff"
          strokeWidth="2"
          fill="none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M 340 245 Q 345 235 340 225"
          stroke="#00d4ff"
          strokeWidth="2"
          fill="none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.g>

      {/* Keyboard */}
      <rect x="140" y="295" width="80" height="5" fill="#00ff88" rx="2" />

      {/* Floating Particles */}
      <motion.circle
        cx="50"
        cy="100"
        r="3"
        fill="#00ff88"
        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.circle
        cx="350"
        cy="150"
        r="3"
        fill="#00d4ff"
        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="200"
        cy="80"
        r="3"
        fill="#ff006e"
        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
    </motion.svg>
  );
};

// Typing Effect Hook
const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

// Floating Code Snippets
const FloatingCodeSnippets = () => {
  const codeSnippets = [
    'if (passionate) { hire("Manoj"); }',
    'const llm = new OpenAI({ model: "gpt-5"});',
    'function innovate() { }',
    'import skills from "Manoj Kumar Thapa";',
    'const ai = tensorflow.model();',
    'SELECT * FROM skills;',
    'docker build -t app .',
    'git commit -m "awesome"'
  ];

  return (
    <>
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="code-snippet"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [20, -20, -40]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 1.5
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </>
  );
};

// Left Sidebar Navigation - REMOVED (simplified navigation)

// Mobile Dots Navigation - REMOVED (simplified navigation)

// Navigation Component with Active Section Detection
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavigation = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">MKT</div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>{'{ home }'}</a></li>
            <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>{'{ skills }'}</a></li>
            <li><a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>{'{ experience }'}</a></li>
            <li><a onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>{'{ education }'}</a></li>
            <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>{'{ projects }'}</a></li>
            <li><a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>{'{ contact }'}</a></li>
          </ul>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Menu">
            ☰
          </button>
        </div>
      </nav>

      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <button className="mobile-nav-close" onClick={toggleMobileMenu} aria-label="Close menu">
            ✕
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><a onClick={() => handleMobileNavigation('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a onClick={() => handleMobileNavigation('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a onClick={() => handleMobileNavigation('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a onClick={() => handleMobileNavigation('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a onClick={() => handleMobileNavigation('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a onClick={() => handleMobileNavigation('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

// Background Code Rain Animation
const BackgroundCodeRain = () => {
  const codeSymbols = ['{', '}', '<', '>', '/', ';', '(', ')', '[', ']', 'const', 'if', 'return', '=', '=>', '...', '&&', '||', 'hire manoj'];

  return (
    <div className="code-rain-container">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="code-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            opacity: [0, 0.08, 0.08, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// Mouse Trail Effect
const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
    }
  };

  return (
    <>
      <motion.div
        className="cursor-trail"
        variants={variants}
        animate="default"
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid var(--accent-green)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate="default"
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 50,
          mass: 0.1
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          marginTop: '12px',
          marginLeft: '12px'
        }}
      />
    </>
  );
};

// Audio Manager (Web Audio API)
const playHoverSound = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.1);
};

const playClickSound = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.1);
};

// Glitch Text Component
const GlitchText = ({ text }) => {
  return (
    <div className="glitch-wrapper">
      <div className="glitch" data-text={text}>{text}</div>
    </div>
  );
};

// Import Animation Component
const ImportAnimation = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [stage, setStage] = useState(0); // 0: typing import, 1: pause, 2: show name

  useEffect(() => {
    const importText = text; // Only type the name to avoid duplication bug

    if (stage === 0) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < importText.length) {
          setDisplayText(importText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => setStage(1), 1000); // Pause after typing
        }
      }, 100); // Slower typing speed (Medium)
      return () => clearInterval(timer);
    } else if (stage === 1) {
      setDisplayText(text);
      setStage(2);
    }
  }, [text, stage]);

  return (
    <div className="import-animation">
      {stage === 0 ? (
        <span className="import-text">
          <span className="keyword">from</span> skills <span className="keyword">import</span> {displayText}
          <span className="cursor">|</span>
        </span>
      ) : (
        <span className="final-name">{text}</span>
      )}
    </div>
  );
};

// Availability Widget - Animated Person
const AvailabilityWidget = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonText, setButtonText] = useState('Hire Me');
  const [isWaving, setIsWaving] = useState(false);
  const modalRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsWaving(true);

    if (!showModal) {
      setShowModal(true);
      setButtonText('Hired ✨');
      setShowConfetti(true);
    } else {
      setShowModal(false);
      setButtonText('Hire Me');
      setShowConfetti(false);
    }

    setTimeout(() => setIsWaving(false), 1000);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
    setShowConfetti(false);
    setButtonText('Hire Me');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && showModal) {
        setShowModal(false);
        setShowConfetti(false);
        setButtonText('Hire Me');
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false);
        setShowConfetti(false);
        setButtonText('Hire Me');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showModal]);

  return (
    <>
      <motion.div
        className="availability-widget"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        onClick={handleClick}
      >
        <div className="widget-bubble">{buttonText}</div>
        <svg className="widget-person" viewBox="0 0 100 100">
          {/* Person sitting and thinking */}
          <circle cx="50" cy="25" r="12" fill="#ffbe0b" />
          <rect x="38" y="37" width="24" height="30" rx="3" fill="#00ff88" />
          <motion.g
            animate={isWaving ? {
              rotate: [0, -20, 20, -20, 0],
              x: [0, -2, 2, -2, 0]
            } : {
              rotate: [0, -5, 5, 0]
            }}
            transition={isWaving ? {
              duration: 0.5
            } : {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: '35px 45px' }}
          >
            <rect x="28" y="40" width="7" height="20" rx="3" fill="#ffbe0b" />
          </motion.g>
          <rect x="65" y="40" width="7" height="20" rx="3" fill="#ffbe0b" />
          <rect x="40" y="67" width="8" height="20" rx="3" fill="#4361ee" />
          <rect x="52" y="67" width="8" height="20" rx="3" fill="#4361ee" />
        </svg>

        {/* Confetti */}
        {showConfetti && (
          <div className="small-confetti-container">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="small-confetti-piece"
                style={{
                  left: `${-50 + Math.random() * 100}px`,
                  backgroundColor: ['#FFD700', '#00ff88', '#FF6B6B', '#4ECDC4'][Math.floor(Math.random() * 4)]
                }}
                initial={{ y: 0, opacity: 1, scale: 1 }}
                animate={{ y: 150, opacity: 0, scale: 0.3 }}
                transition={{
                  duration: 1.5 + Math.random() * 1,
                  delay: Math.random() * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {showModal && (
        <motion.div
          className="availability-modal"
          ref={modalRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
            ✕
          </button>
          <div className="modal-header">
            <div className="status-dot"></div>
            <div className="modal-title">Open for Opportunities</div>
          </div>
          <div className="modal-detail"><strong>Position:</strong> 2026 Graduate Software Engineer</div>
          <div className="modal-detail"><strong>Graduating:</strong> Jan 2026</div>
          <div className="modal-detail"><strong>University:</strong> Aston University</div>
          <div className="modal-detail"><strong>Location:</strong> Birmingham, UK</div>
          <div className="modal-detail"><strong>Visa:</strong> UK Graduate Route (2026-2028)</div>
          <div className="modal-detail"><strong>Sponsorship:</strong> Not Required</div>
          <div className="modal-detail"><strong>Experience:</strong> 2+ years professional experience</div>
        </motion.div>
      )}
    </>
  );
};
;

// Coding Profiles Section
const CodingProfilesSection = () => {
  return (
    <motion.div
      className="coding-profiles-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <h3>Coding Profiles</h3>
      <div className="coding-profiles">
        <motion.a
          href={portfolioData.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-badge"
          whileHover={{ scale: 1.05 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
          LeetCode Profile
        </motion.a>
      </div>
    </motion.div>
  );
};

// Hero Section
const HeroSection = () => {

  return (
    <section id="home" className="hero">
      <FloatingCodeSnippets />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-text">
          <motion.img
            src="https://lh3.googleusercontent.com/a/ACg8ocJYBguwJWq7qFGM9IKK6mgA6ElhbNp0QAxPqGrXSUAE8r-yvrKI=s576-c-no"
            alt="Manoj Kumar Thapa"
            className="profile-photo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImportAnimation text={portfolioData.name} />
          </motion.h1>
          <motion.div
            className="title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.title}
          </motion.div>
          <motion.div
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {portfolioData.description}
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href={portfolioData.resume_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View CV
            </a>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Get In Touch
            </button>
          </motion.div>
        </div>
        <div className="hero-animation">
          <DeveloperCharacter />
        </div>
      </motion.div>
    </section>
  );
};

// Skills Section - Grid Style with Proper Icons
const SkillsSection = () => {
  const [ref, inView] = useIntersectionObserver();
  const [expandedFolders, setExpandedFolders] = useState([]);

  const toggleFolder = (index) => {
    setExpandedFolders(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {"Skills"}
      </motion.h2>

      <div className="skills-container">
        {portfolioData.skills.map((category, catIndex) => {
          const isExpanded = expandedFolders.includes(catIndex);
          return (
            <motion.div
              key={catIndex}
              className="skill-folder"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <div
                className="folder-header"
                onClick={() => toggleFolder(catIndex)}
              >
                <div className={`folder-icon ${isExpanded ? 'expanded' : ''}`}>▶</div>
                <div className="folder-name">{category.category}</div>
              </div>
              <div className={`folder-contents ${isExpanded ? 'expanded' : ''}`}>
                <div className="skills-grid-layout">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-card"
                      onMouseEnter={playHoverSound}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isExpanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px rgba(57, 255, 20, 0.3)",
                        borderColor: "var(--accent-green)",
                        y: -5
                      }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      {skill.icon && skill.icon.startsWith('fa-') ? (
                        <i className={`${skill.icon} skill-card-icon`} style={{ color: skill.color || 'var(--accent-green)' }}></i>
                      ) : skill.icon ? (
                        <iconify-icon icon={skill.icon} className="skill-card-icon" style={{ color: skill.color || 'var(--accent-green)' }}></iconify-icon>
                      ) : null}
                      <div className="skill-card-name">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const [ref, inView] = useIntersectionObserver();

  return (
    <section id="experience" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="timeline" ref={ref}>
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            />
            <div className="timeline-card">
              <h3>{exp.title}</h3>
              <div className="company">
                {exp.company_logo && (
                  <img src={exp.company_logo} alt={`${exp.company} logo`} className="company-logo" />
                )}
                {exp.company}
              </div>
              <div className="duration">{exp.duration} • {exp.location}</div>
              <p className="description">{exp.description}</p>
              {exp.skills && (
                <div className="command-tags" style={{ marginTop: '1rem' }}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="command-tag">{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Projects Section - Command Line Style
const ProjectsSection = () => {
  const [ref, inView] = useIntersectionObserver();

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Project Archive
      </motion.h2>
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-terminal ${project.status === 'In Progress' ? 'in-progress' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="terminal-header-bar">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="project-command-line">
              <div className="command-prompt">project.execute("{project.title}")</div>
              <div className="command-output">
                <div className="output-line">{project.description}</div>
                {project.accuracy && (
                  <div className="output-line highlight">Accuracy: {project.accuracy}</div>
                )}
                {project.date && (
                  <div className="output-line">Timeline: {project.date}</div>
                )}
                {project.status === 'In Progress' ? (
                  <div className="output-line" style={{ color: '#ffbe0b' }}>Status: ⏳ {project.status}</div>
                ) : (
                  <div className="output-line highlight">Status: ✓ {project.status}</div>
                )}
                <div className="command-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="command-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                    >
                      [{tag}]
                    </motion.span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="command-link">
                    → open:repository
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="command-link">
                    → {project.linkText || "view:project"}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Footer Component - Debug Console Style
const Footer = () => {
  // Render proper Font Awesome icons

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Connection Port</h2>

          <motion.div
            className="debug-console"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="console-header">
              <div className="console-dot red"></div>
              <div className="console-dot yellow"></div>
              <div className="console-dot green"></div>
              <div className="console-title">System.out.println(contact_info);</div>
            </div>
            <div className="console-body">
              <div className="console-line">
                <span className="console-prompt">location:</span>
                <span className="console-value">"{portfolioData.address}"</span>
              </div>
              <div className="console-line">
                <span className="console-prompt">email:</span>
                <span className="console-value">
                  <a href="mailto:thapam807@gmail.com" target="_blank" rel="noopener noreferrer">
                    "thapam807@gmail.com"
                  </a>
                </span>
              </div>
              <div className="console-line">
                <span className="console-prompt">blog:</span>
                <span className="console-value">
                  <a href={portfolioData.blog_link} target="_blank" rel="noopener noreferrer">
                    "hamropedia.com"
                  </a>
                </span>
              </div>
              <div className="console-line">
                <span className="console-prompt">status:</span>
                <span className="console-value">"Available for 2026 Graduate Roles"</span>
              </div>
              <div className="console-line">
                <span className="console-prompt">phone:</span>
                <span className="console-value">
                  <a href={portfolioData.phoneLink || "tel:+447438029689"} target="_blank" rel="noopener noreferrer">
                    "{portfolioData.phoneDisplay || "+44 7438 029689"}"
                  </a>
                </span>
              </div>
              <div className="console-line">
                <span className="console-prompt">graduation:</span>
                <span className="console-value">"January 2026"</span>
              </div>
              <div className="console-line">
                <span className="console-prompt">leetcode:</span>
                <span className="console-value">
                  <a href="https://leetcode.com/u/manojthapa/" target="_blank" rel="noopener noreferrer">
                    "leetcode.com/u/manojthapa"
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          <div className="social-links" style={{ marginTop: '3rem' }}>
            {portfolioData.social_links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                title={link.name}
              >
                <i className={link.icon} style={{ color: link.color || 'var(--text-secondary)' }}></i>
              </motion.a>
            ))}
          </div>
          <p className="footer-text" style={{ marginTop: '2rem' }}>
            Made with <span className="heart">❤️</span> by {portfolioData.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Custom Hook for Intersection Observer
const useIntersectionObserver = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

// Education Section - Stack Trace Style
const EducationSection = () => {
  const [ref, inView] = useIntersectionObserver();

  return (
    <section id="education" className="section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Knowledge Stack
      </motion.h2>
      <div className="education-stack">
        {portfolioData.education.slice(0, 2).map((edu, index) => (
          <motion.div
            key={index}
            className="stack-frame"
            data-index={index}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3>
              {edu.title}
              {edu.expected_distinction && (
                <span className="distinction-badge">⭐ Expected Distinction</span>
              )}
              {edu.cgpa && (
                <span className="distinction-badge">⭐ {edu.cgpa} CGPA</span>
              )}
            </h3>
            <div className="stack-subtitle">{edu.subtitle}</div>
            <div className="stack-duration">{edu.duration}</div>
            <ul className="stack-description">
              {edu.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Certifications Section - Achievement Badges
const CertificationsSection = () => {
  const [ref, inView] = useIntersectionObserver();

  // Icons are now in the cert data

  return (
    <section id="certifications" className="section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Achievements Registry
      </motion.h2>
      <div className="achievement-grid">
        {portfolioData.certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div className="achievement-icon">
              {cert.icon && cert.icon.includes(':') && cert.icon.startsWith('fa-') ? (
                <i className={cert.icon.split(':')[0] + ' fa-' + cert.icon.split(':')[1]} style={{ fontSize: '3.5rem', color: cert.iconColor || 'var(--accent-green)', marginBottom: '1rem' }}></i>
              ) : cert.icon && cert.icon.startsWith('simple-icons:') ? (
                <iconify-icon icon={cert.icon} style={{ fontSize: '3.5rem', color: cert.iconColor || 'var(--accent-green)', marginBottom: '1rem' }}></iconify-icon>
              ) : cert.icon ? (
                <i className={cert.icon} style={{ fontSize: '3.5rem', color: cert.iconColor || 'var(--accent-green)', marginBottom: '1rem' }}></i>
              ) : null}
            </div>
            <h3>{cert.title}</h3>
            <div className="subtitle">{cert.subtitle}</div>
            <div className="achievement-link">
              view credential →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div>
      <BackgroundCodeRain />
      <MouseTrail />
      <Navigation />
      <AvailabilityWidget />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};


// ===== MOBILE POPUP FIX FOR HIRE ME BUTTON =====
// Handle modal positioning for mobile devices
window.addEventListener('DOMContentLoaded', () => {
  const handleModalResize = () => {
    const modal = document.querySelector('.availability-modal') || document.querySelector('.modal');
    if (modal) {
      if (window.innerWidth <= 768) {
        // Mobile: Center the modal
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.bottom = 'auto';
        modal.style.right = 'auto';
        modal.style.maxHeight = '85vh';
        modal.style.overflowY = 'auto';
      } else {
        // Desktop: Keep original positioning
        modal.style.position = 'fixed';
        modal.style.maxHeight = '90vh';
      }
    }
  };

  // Handle window resize
  window.addEventListener('resize', handleModalResize);

  // Handle modal visibility changes
  const observer = new MutationObserver(() => {
    const modal = document.querySelector('.availability-modal') || document.querySelector('.modal');
    if (modal && modal.style.display !== 'none') {
      handleModalResize();
    }
  });

  // Observe modal changes
  const config = { attributes: true, subtree: true };
  const targetElement = document.querySelector('.availability-modal') || document.querySelector('.modal');
  if (targetElement) {
    observer.observe(targetElement, config);
  }
});

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);