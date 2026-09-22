// ══════════════════════════════════════════════════════════
//  HELP DESK – Subject Data  |  data.js
// ══════════════════════════════════════════════════════════

const MAIN_DRIVE = "https://drive.google.com/drive/folders/1LhXXsrjzi-ho9VLACnI80cPHUGIkJJxs?usp=sharing";

// ── Registration Paper Link ───────────────────────────────
const REGISTRATION_PAPER_DRIVE = "https://drive.google.com/file/d/1460N9HAFZfGR1ZW2xSIylNCJNWN2vPvY/view?usp=sharing";

// ── Subjects with direct Google Drive folder links ────────
const subjects = {

  // ─────────────────────────── CS ───────────────────────────
  cs: [
    {
      name: "Numerical Treatment",
      emoji: "🔢",
      desc: "Numerical methods for solving mathematical problems computationally — including root finding, interpolation, numerical integration, and differential equations.",
      tags: ["Algorithms", "Mathematics", "Computation"],
      drive: "https://drive.google.com/drive/folders/16p2jr5k6GjBEFwGJmruyLLfko8UoU62O?usp=drive_link"
    },
    {
      name: "Speech and Image Processing",
      emoji: "🖼️",
      desc: "Fundamentals of digital signal processing applied to speech and images — covering filters, Fourier transforms, feature extraction, and recognition techniques.",
      tags: ["DSP", "Computer Vision", "Pattern Recognition"],
      drive: "https://drive.google.com/drive/folders/1WkJPh_7QxSHhLBMa2F7yxaNq20VtJYkr?usp=drive_link"
    },
    {
      name: "Human Computer Interaction",
      emoji: "🖱️",
      desc: "Principles of UX/UI design, usability engineering, interaction design patterns, and evaluation methods for building human-centered software interfaces.",
      tags: ["UX", "UI Design", "Usability"],
      drive: "https://drive.google.com/drive/folders/101IBqXcRkbXIDqopiMHgOe6zMrfBtHoM?usp=drive_link"
    },
    {
      name: "Virtual Reality",
      emoji: "🥽",
      desc: "Concepts and technologies behind virtual and augmented reality — including 3D rendering, immersive environments, VR frameworks, and real-world applications.",
      tags: ["3D", "Immersive", "VR/AR"],
      drive: "https://drive.google.com/drive/folders/165G0SaJjIOC8QYcKHaSF7Vlj4ar3loBP?usp=drive_link"
    },
    {
      name: "Computer Graphics 2",
      emoji: "🎨",
      desc: "Advanced computer graphics: shading models, ray tracing, texture mapping, animation curves, and real-time rendering with OpenGL / WebGL.",
      tags: ["OpenGL", "Rendering", "Animation"],
      drive: "https://drive.google.com/drive/folders/1Kxiu-iJCa99FtX33BjnNnFXzl4Mcoj7B?usp=drive_link"
    }
  ],

  // ──────────────────────── SOFTWARE ────────────────────────
  software: [
    {
      name: "Software Engineering 2",
      emoji: "⚙️",
      desc: "Advanced software engineering: architectural patterns, design principles (SOLID), component-based development, software metrics, and quality assurance.",
      tags: ["Architecture", "Design Patterns", "QA"],
      drive: "https://drive.google.com/drive/folders/18hxK2diOjTQ4oedojr4R3x6GnsHu9BEU?usp=drive_link"
    },
    {
      name: "Software Testing",
      emoji: "🧪",
      desc: "Systematic approaches to testing software — unit testing, integration testing, test-driven development (TDD), test coverage, and automation frameworks.",
      tags: ["TDD", "Automation", "QA"],
      drive: "https://drive.google.com/drive/folders/1xOoVXxZv2jJLSuxR7whLwre-8TbhvAlH?usp=drive_link"
    },
    {
      name: "Data Warehousing and Data Integration",
      emoji: "🗄️",
      desc: "ETL pipelines, data warehouse architectures (star/snowflake schemas), OLAP, data lakes, and tools for integrating heterogeneous data sources.",
      tags: ["ETL", "OLAP", "Big Data"],
      drive: "https://drive.google.com/drive/folders/1jZqis9FAvk1dtgdS0jvgqqWbuZFz5Okp?usp=drive_link"
    },
    {
      name: "Software Project Management",
      emoji: "📋",
      desc: "Agile, Scrum, and traditional project management methodologies — covering planning, estimation, risk management, team coordination, and delivery.",
      tags: ["Agile", "Scrum", "Planning"],
      drive: "https://drive.google.com/drive/folders/1rH1I_31igZr0pJadiodYTPBIMflcV1dU?usp=drive_link"
    },
    {
      name: "Human Computer Interaction",
      emoji: "🖱️",
      desc: "Principles of UX/UI design, usability engineering, interaction design patterns, and evaluation methods for building human-centered software interfaces.",
      tags: ["UX", "UI Design", "Usability"],
      drive: "https://drive.google.com/drive/folders/101IBqXcRkbXIDqopiMHgOe6zMrfBtHoM?usp=drive_link"
    }
  ],

  // ───────────────────────── AI ─────────────────────────────
  ai: [
    {
      name: "Machine Learning and Pattern Recognition",
      emoji: "🧠",
      desc: "Supervised & unsupervised learning, classification, regression, clustering, neural networks, and evaluation metrics for pattern recognition tasks.",
      tags: ["ML", "Neural Networks", "Classification"],
      drive: "https://drive.google.com/drive/folders/1W48cku6LgUaWSWsM-fac_nLGoVn_DEGy?usp=drive_link"
    },
    {
      name: "Data Mining and Knowledge Discovery",
      emoji: "⛏️",
      desc: "Techniques for extracting useful knowledge from large datasets: association rules, clustering, decision trees, feature selection, and data preprocessing.",
      tags: ["KDD", "Association Rules", "Clustering"],
      drive: "https://drive.google.com/drive/folders/1oVqr0plp2McKVNK4UaZa8YeYmDgQ4ms3?usp=drive_link"
    },
    {
      name: "Speech and Image Processing",
      emoji: "🖼️",
      desc: "Digital signal processing applied to speech and images — filters, feature extraction, speech recognition basics, and image segmentation.",
      tags: ["DSP", "Computer Vision", "Speech AI"],
      drive: "https://drive.google.com/drive/folders/1WkJPh_7QxSHhLBMa2F7yxaNq20VtJYkr?usp=drive_link"
    },
    {
      name: "New Trends in AI",
      emoji: "🥽",
      desc: "VR/AR technologies, 3D interaction models, immersive AI environments, and real-world applications of virtual reality in intelligent systems.",
      tags: ["VR/AR", "3D", "Immersive AI"],
      drive: "https://drive.google.com/drive/folders/165G0SaJjIOC8QYcKHaSF7Vlj4ar3loBP?usp=drive_link"
    },
    {
      name: "Big Data Analytics",
      emoji: "📊",
      desc: "Scalable data processing with Hadoop, Spark, and MapReduce — covering distributed storage, real-time stream processing, and large-scale analytics.",
      tags: ["Hadoop", "Spark", "Distributed"],
      drive: "https://drive.google.com/drive/folders/1QWjjBTpYYRhsorGWb_IDXHCa58u9IltD?usp=drive_link"
    }
  ],

  // ─────────────────────── NETWORK ──────────────────────────
  network: [
    {
      name: "Computer Networks 2",
      emoji: "🔗",
      desc: "Advanced networking: routing protocols (OSPF, BGP), network security, QoS, SDN concepts, WAN technologies, and network performance analysis.",
      tags: ["Routing", "Security", "Protocols"],
      drive: "https://drive.google.com/drive/folders/175peFZzFrX7ZcWexSJS0bW9ope7qrwvI?usp=drive_link"
    },
    {
      name: "Cloud Computing",
      emoji: "☁️",
      desc: "Cloud service models (IaaS, PaaS, SaaS), virtualization, containers (Docker/Kubernetes), cloud providers, and deployment architectures.",
      tags: ["AWS/Azure", "Docker", "Virtualization"],
      drive: "https://drive.google.com/drive/folders/1sdlSkqo_AG_85IWx688CK8rh9jFfQl-L?usp=drive_link"
    },
    {
      name: "New Trends in Computer Networks",
      emoji: "📡",
      desc: "Emerging networking technologies: 5G/6G, software-defined networking (SDN), network function virtualization (NFV), and next-generation protocols.",
      tags: ["SDN", "5G", "NFV"],
      drive: "https://drive.google.com/drive/folders/1dSdnXwYRI66Hrp8MeXLyjklBqTFfGRUD?usp=drive_link"
    },
    {
      name: "Communications Technology",
      emoji: "📶",
      desc: "Fundamentals of digital communications: modulation techniques, channel coding, multiplexing, transmission media, and wireless communication systems.",
      tags: ["Wireless", "Modulation", "Transmission"],
      drive: "https://drive.google.com/drive/folders/1srCvnzw4_8sSl48H9Z39QtKzGZSYb2OT?usp=drive_link"
    },
    {
      name: "Internet of Things",
      emoji: "🌐",
      desc: "IoT architecture, sensors and actuators, communication protocols (MQTT, CoAP), edge computing, IoT security, and real-world smart systems.",
      tags: ["MQTT", "Sensors", "Edge Computing"],
      drive: "https://drive.google.com/drive/folders/1OTqIqZsdbVdq1pqkb1nc10iZEXnee7by?usp=drive_link"
    }
  ]
};
