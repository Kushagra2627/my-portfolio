export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "PROGRAMMING LANGUAGES",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "Solidity", "SQL", "HTML/CSS"]
  },
  {
    category: "FRAMEWORKS & LIBRARIES",
    skills: ["React", "React Native", "Node.js", "Express.js", "Flask", "OpenCV", "Ethers.js", "Hardhat", "Tailwind CSS"]
  },
  {
    category: "DATABASES & CLOUD SERVICES",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "AWS (S3, EC2)"]
  },
  {
    category: "WEB3 & CRYPTOGRAPHY",
    skills: ["EVM Smart Contracts", "Hardhat", "Ethers.js", "SHA-256 Hashing", "JWT Authentication"]
  },
  {
    category: "CORE COMPUTER SCIENCE",
    skills: ["Data Structures & Algorithms", "Competitive Programming", "Machine Learning", "Object-Oriented Programming", "REST APIs"]
  }
];
