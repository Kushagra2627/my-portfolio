export interface DeckCardMeta {
  id: number;
  cardNumber: string;
  subtitle: string;
  badge: string;
  title: string;
  description: string;
  icon: string;
  metrics?: { label: string; value: string }[];
  tags?: string[];
}

export const deckCards: DeckCardMeta[] = [
  {
    id: 0,
    cardNumber: "01",
    subtitle: "CARD 01 // ARCHITECTURE & BIO",
    badge: "IIITB_CS_UG",
    title: "System Builder with Precision Focus",
    description: "Computer Science undergrad at Indian Institute of Information Technology, Bhopal (2024–Present). Building scalable full-stack applications, cryptographic verification engines, and ML models.",
    icon: "fingerprint",
    metrics: [
      { label: "DSA PROBLEMS", value: "500+" },
      { label: "PUPIL RATING", value: "1274 CF" },
      { label: "RENTAL BOOKINGS", value: "100+" }
    ]
  },
  {
    id: 1,
    cardNumber: "02",
    subtitle: "CARD 02 // PRODUCTION DEPLOYMENTS",
    badge: "3 BUILDS",
    title: "Featured Engineering Work",
    description: "iTURSH Student Rental Platform, Cryptographic Document Verifier on Ethereum, Real-time Smart Attendance with Face Embeddings, and SIH Selected Civic Platform.",
    icon: "terminal",
    tags: ["iTURSH", "BLOCKCHAIN VERIFIER", "ML ATTENDANCE", "CIVIC SIH"]
  },
  {
    id: 2,
    cardNumber: "03",
    subtitle: "CARD 03 // VENTURES & ROLES",
    badge: "MAR - SEPT 2026",
    title: "Founder & Lead Dev @ iTURSH",
    description: "Engineered an end-to-end peer-to-peer student rental platform from scratch. Integrated PostgreSQL with Supabase, AWS infrastructure, and handled 100+ live transactions.",
    icon: "work",
    metrics: [
      { label: "LIVE ORDERS", value: "100+" },
      { label: "TECH STACK", value: "REACT / SUPABASE / AWS" }
    ]
  },
  {
    id: 3,
    cardNumber: "04",
    subtitle: "CARD 04 // CAPABILITY REGISTRY",
    badge: "5 DOMAINS",
    title: "High-Frequency Technical Stack",
    description: "Operational command across languages, full-stack frameworks, smart contract platforms, databases, and ML algorithms.",
    icon: "memory",
    tags: ["C++ / PYTHON", "REACT / NODE.JS", "SOLIDITY / HARDHAT", "POSTGRES / SUPABASE", "AWS / OPENCV"]
  },
  {
    id: 4,
    cardNumber: "05",
    subtitle: "CARD 05 // VERIFIED MILESTONES",
    badge: "COMPETITIVE",
    title: "Codeforces Rank 289 & Honors",
    description: "Recognized performance in international competitive programming contests, institutional hackathons, Smart India Hackathon selections, and state basketball representation.",
    icon: "military_tech",
    metrics: [
      { label: "CF ROUND 1112", value: "Rank 289" },
      { label: "SIH SELECTION", value: "College Level" }
    ]
  },
  {
    id: 5,
    cardNumber: "06",
    subtitle: "CARD 06 // PEDAGOGY & ACADEMIA",
    badge: "ACCREDITATION",
    title: "IIIT Bhopal — B.Tech CSE",
    description: "Bachelor of Technology in Computer Science & Engineering (2024–Present). Deep focus on data structures, algorithms, operating systems, networks, and software engineering.",
    icon: "school",
    metrics: [
      { label: "CLASS XII CBSE", value: "89.8%" },
      { label: "HIGH SCHOOL", value: "ST. MARY'S HARIDWAR" }
    ]
  },
  {
    id: 6,
    cardNumber: "07",
    subtitle: "CARD 07 // DIRECT DISPATCH",
    badge: "OPEN FOR OPPORTUNITIES",
    title: "LET'S BUILD SOMETHING",
    description: "Available for high-impact software engineering internships, full-stack development, blockchain projects, and technical collaboration.",
    icon: "send",
    tags: ["RECRUITER READY", "EMAIL & RESUME ATTACHED"]
  }
];
