export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  period?: string;
  description: string;
  contributions: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badgeText?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "itursh",
    projectNumber: "PROJECT_01",
    title: "iTURSH Student Rental Platform",
    category: "FULL-STACK & RENTAL SYSTEM",
    period: "MARCH 2026 – SEPTEMBER 2026",
    description: "Student-focused equipment and property rental application built for collegiate campus environments. Engineered complete booking workflow from listing search to payment-based reservations.",
    contributions: [
      "Engineered mobile and web interfaces with React, TypeScript, and Expo Go.",
      "Designed backend data schema in PostgreSQL with Supabase Row Level Security.",
      "Implemented booking workflow: property listings, visit requests, admin confirmations, and payment-based bookings.",
      "Successfully facilitated approximately 100+ student rental bookings."
    ],
    technologies: ["React", "TypeScript", "Expo Go", "PostgreSQL", "Supabase", "AWS"],
    githubUrl: "https://github.com/Kushagra2627",
    badgeText: "FOUNDER & DEVELOPER"
  },
  {
    id: "blockchain-verifier",
    projectNumber: "PROJECT_02",
    title: "Blockchain-Based Document Verification System",
    category: "CRYPTOGRAPHY & SMART CONTRACTS",
    description: "Decentralized document integrity verification platform leveraging SHA-256 cryptographic hashing and EVM smart contracts to prevent document forgery and facilitate role-based verification.",
    contributions: [
      "Built cryptographic SHA-256 hashing pipeline supporting PDF, DOC/DOCX, and image files up to 10 MB.",
      "Authored Solidity smart contracts on Hardhat for tamper-proof document issuance and instant revocation.",
      "Implemented JWT authentication and role-based access control (Issuer, Verifier, Admin).",
      "Engineered duplicate-file prevention to prevent redundant block gas consumption."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Solidity", "Hardhat", "Ethers.js", "SHA-256"],
    githubUrl: "https://github.com/Kushagra2627",
    badgeText: "CRYPTOGRAPHIC PROOF"
  },
  {
    id: "smart-attendance",
    projectNumber: "PROJECT_03",
    title: "Smart Attendance System",
    category: "COMPUTER VISION & MACHINE LEARNING",
    description: "Automated real-time attendance system utilizing facial recognition algorithms to capture and verify student attendance in lecture halls.",
    contributions: [
      "Built computer vision pipeline using OpenCV and Python for multi-face detection.",
      "Extracted 128-dimensional facial vector embeddings for high-accuracy face recognition.",
      "Implemented liveness detection algorithms to prevent photo spoofing attacks.",
      "Generated automated, exportable attendance reports synced with faculty database formats."
    ],
    technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition"],
    githubUrl: "https://github.com/Kushagra2627",
    badgeText: "COMPUTER VISION"
  },
  {
    id: "civic-platform",
    projectNumber: "PROJECT_04",
    title: "Crowdsourced Civic Issue Platform",
    category: "SMART INDIA HACKATHON",
    description: "Geotagged civic issue reporting system designed for public infrastructure hazard tracking, automated severity classification, and municipal escalation.",
    contributions: [
      "Selected for college-level Smart India Hackathon competition.",
      "Developed web backend with Flask and Python integrated with ML classification pipelines.",
      "Engineered location-based hazard reporting with interactive status tracking.",
      "Integrated machine learning for automated problem severity categorization."
    ],
    technologies: ["Flask", "Python", "Machine Learning"],
    githubUrl: "https://github.com/Kushagra2627",
    badgeText: "SIH SELECTION"
  }
];
