const translations = {
  en: {
    // Nav
    navAbout: "About",
    navEducation: "Education",
    navExperience: "Experience",
    navProjects: "Projects",
    navPublications: "Publications",
    navSkills: "Skills",
    navContact: "Contact",

    // Hero
    heroName: "Zhen Wen",
    heroTitle: "Medical Engineering (M.Sc.)",
    heroSubtitle: "Soft Robotics | Additive Manufacturing | Computational Modeling",
    heroCV: "Download CV",

    // About
    aboutText: "Hi, I am Zhen Wen. I am a medical engineering graduate from the Technical University of Munich with a background in mechatronic engineering and a strong interest in robotics for healthcare. My work has mainly focused on continuum and soft-rigid hybrid robots, where I enjoy combining mechanical design, computational modeling, prototyping, and sensor integration to build systems that are both functional and biologically inspired.",

    // Education
    educationTitle: "Education",
    edu1Label: "Master",
    edu1Degree: "Medical Engineering and Assistance Systems (M.Sc.)",
    edu1School: "Technical University of Munich",
    edu1Date: "Apr 2022 — Oct 2025",
    edu1Focus: "Focus: Embedded Systems, Medical Robotics, Additive Manufacturing (3D Printing)",
    edu1Thesis: "Thesis: A Bio-Inspired Dual-Material Tendon-Driven Continuum Robot with Electromagnetic Navigation for Improved Controllability (Grade: 1.0 / Highest Distinction)",
    edu2Label: "Bachelor",
    edu2Degree: "Mechatronic Engineering (B.Eng.)",
    edu2School: "Harbin Institute of Technology",
    edu2Date: "Sep 2014 — Jul 2018",
    edu2Focus: "Focus: Mechatronic systems, fluid mechanics & hydraulics, microfluidic technology",

    // Experience
    experienceTitle: "Experience",
    exp1Title: "Research Assistant",
    exp1Company: "Technical University of Munich, Munich",
    exp1Date: "May 2024 — Oct 2025",
    exp1Desc1: "Conducted research and engineering support on robotic system prototyping, sensor integration, and embedded implementation.",
    exp1Desc2: "Designed and manufactured complex robotic joints and housings using SLS (Selective Laser Sintering) and FDM (Fused Deposition Modeling), improving structural strength-to-weight ratio and manufacturability.",
    exp1Desc3: "Integrated electromagnetic sensors into robotic systems with algorithmic fusion to enhance end-effector perception accuracy in unstructured environments.",
    exp1Desc4: "Developed and debugged STM32 microcontroller firmware in C/C++ for real-time sensor data acquisition, filtering, and high-speed communication.",

    // Projects
    projectsTitle: "Projects",
    proj1Title: "High-Durability, High-Payload Soft–Rigid Hybrid Tendon-Driven Continuum Robot",
    proj1Desc: "Proposed a soft–rigid hybrid TDCR using 3D-printed ball-socket skeleton with silicone encapsulation. Built a <b>hierarchical kinetostatic model</b> (fast kinematic mapping + quasi-static model with <b>friction compensation</b>). Developed custom casting tooling to ensure stable <b>tendon routing</b> and center channel integrity. Validated <b>control accuracy</b> against EM-tracked ground truth; comparative experiments confirmed superior payload, hysteresis, and durability.",
    proj1Keywords_1: "Kinetostatic Modeling",
    proj1Keywords_2: "Friction Compensation",
    proj1Keywords_3: "EM Tracking",
    proj1Keywords_4: "Control Validation",

    proj2Title: "Musculoskeletal-Inspired Soft–Rigid Hybrid Continuum Robot with Embodied Safety",
    proj2Desc: "Developed a musculoskeletal-inspired TDCR combining a compliant outer layer with internal rigid supports for <b>embodied safety</b>. The structural design enables <b>safe interaction control</b> through passive compliance rather than active algorithms alone. Systematically evaluated <b>payload capacity</b>, bending repeatability, and <b>contact force safety</b> with integrated sensors. Established a <b>quasi-static model</b> to predict deformation under external loads.",
    proj2Keywords_1: "Safe Interaction",
    proj2Keywords_2: "Sensor Integration",
    proj2Keywords_3: "Quasi-Static Modeling",
    proj2Keywords_4: "Payload Testing",

    proj3Title: "Soft–Rigid Hybrid Structure Design, Modeling, and Experimental Validation for TDCR",
    proj3Subtitle: "Master's Thesis",
    proj3Desc: "Built a full-stack TDCR system from design to testing. Developed a <b>kinematics-to-statics modeling framework</b> validated against experiments. Implemented <b>embedded control</b> (STM32/Arduino) for real-time actuation and data acquisition. Integrated <b>EM tracking sensors</b> for 6-DOF pose measurement and <b>sensor fusion</b>. Constructed a modular experimental platform covering actuation, sensing, and load testing.",
    proj3Keywords_1: "Modeling Framework",
    proj3Keywords_2: "Embedded Control",
    proj3Keywords_3: "Sensor Fusion",
    proj3Keywords_4: "Experimental Platform",

    proj4Title: "Three-Finger Soft Gripper with Independent Actuation and Axial Reinforcement",
    proj4Desc: "Designed a three-finger soft gripper with <b>independent tendon actuation</b> (two tendons per finger for open/close). Each finger uses a dedicated servo with <b>tendon routing algorithm</b> for coordinated control. Nitinol reinforcement between anchor and base suppresses axial compression, improving <b>force control</b> precision. Silicone casting with friction-reduction treatment enables reliable <b>motion control</b> and grasping.",
    proj4Keywords_1: "Independent Actuation",
    proj4Keywords_2: "Tendon Routing",
    proj4Keywords_3: "Force Control",
    proj4Keywords_4: "Nitinol Reinforcement",

    proj5Title: "Workspace Reconfiguration of TDCR via Concentric Rod Mechanism",
    proj5Desc: "Proposed a concentric rod mechanism for <b>workspace planning</b> and reconfiguration of TDCRs. By adjusting rod insertion depth, the bending stiffness distribution is actively regulated, enabling controllable <b>workspace expansion/contraction</b>. Built a <b>kinetostatic model</b> to predict reconfigured workspace boundaries. Validated <b>motion control</b> accuracy and demonstrated a pick-and-place task in confined-entry scenarios.",
    proj5Keywords_1: "Workspace Planning",
    proj5Keywords_2: "Kinetostatic Modeling",
    proj5Keywords_3: "Motion Control",
    proj5Keywords_4: "Pick-and-Place",

    // Publications
    publicationsTitle: "Publications",
    pubFirstAuthor: "First-Author Publications",
    pubCoAuthor: "Co-Authored Publications",

    pub1Authors: '<b>Z. Wen</b>, F. Pancheri, Z. Wang, T. C. Lueth, and Y. Sun',
    pub1: '"Enhancing Durability and Payload Capacity of Tendon-Driven Continuum Robots Using a Multimaterial Soft–Rigid Hybrid Structure,"',
    pub1Journal: "IEEE/ASME Transactions on Mechatronics",
    pub1Status: "in press, 2026. DOI: 10.1109/TMECH.2026.3683602",

    pub2Authors: '<b>Z. Wen</b>, T. C. Lueth, and Y. Sun',
    pub2: '"A Musculoskeletal-Inspired Soft–Rigid Hybrid Tendon-Driven Continuum Robot with Integrated Friction-Aware Modeling and Experimental Validation,"',
    pub2Journal: "Mechatronics",
    pub2Status: 'under review. Preprint: <a href="https://doi.org/10.5281/zenodo.19149760" target="_blank">[DOI]</a>',

    pub3Authors: 'R. Wen, <b>Z. Wen</b>, T. C. Lueth, and Y. Sun',
    pub3: '"Design of a 3D-Printed Continuum Robot with Convergent Compliant Joints for Balanced Stress Distribution,"',
    pub3Journal: "Mechatronics",
    pub3Status: 'vol. 117, 103516, 2026. <a href="https://doi.org/10.1016/j.mechatronics.2026.103516" target="_blank">[DOI]</a>',

    pub4Authors: 'Y. Sun, <b>Z. Wen</b>, and T. C. Lueth',
    pub4: '"Workspace Reconfiguration in Tendon-Driven Continuum Robots via a Concentric Rod Mechanism,"',
    pub4Journal: "IEEE/ASME Transactions on Mechatronics",
    pub4Status: "under review",

    // Skills
    skillsTitle: "Skills",
    skillProgramming: "Programming",
    skillPython: "Python (Advanced) — Automation scripts and machine learning models",
    skillMatlab: "MATLAB/Simulink (Advanced) — Control system simulations and data visualization",
    skillCpp: "C++ (Intermediate) — Embedded systems programming and numerical algorithms",
    skillSoftware: "Software & Tools",
    skillSoftwareList: "SolidWorks, AutoCAD, MS Office, Altium",
    skillLanguages: "Languages",
    skillLangEn: "English",
    skillLangDe: "German",
    skillLangZh: "Chinese",
    skillLangKo: "Korean",

    // Contact
    contactTitle: "Contact",
    contactLocation: "Munich, Germany",
    contactEmail: "wenyoung0801@gmail.com",
    contactPhone: "+49 15206331457",

    // Footer
    footer: "© 2026 Zhen Wen"
  }
};
