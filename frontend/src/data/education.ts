export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  details: string;
  coursework?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "iiit-bhopal",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology Bhopal (IIIT Bhopal)",
    location: "Bhopal, Madhya Pradesh, India",
    period: "2024 – PRESENT",
    details: "Currently in 3rd year. Pursuing rigorous curriculum in core computer science, algorithm design, software engineering, systems programming, and machine learning.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Theory of Computation",
      "Software Engineering"
    ]
  },
  {
    id: "st-marys",
    degree: "Class XII (CBSE)",
    institution: "St. Mary's Sr. Sec. School Haridwar",
    location: "Haridwar, Uttarakhand, India",
    period: "2022 – 2023",
    score: "CBSE: 89.8%",
    details: "Completed Senior Secondary Education under CBSE curriculum with distinction in Science and Mathematics."
  }
];
