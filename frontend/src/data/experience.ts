export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  metrics: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "itursh-founder",
    role: "Founder & Developer",
    company: "iTURSH",
    location: "Bhopal, India",
    period: "MARCH 2026 – SEPTEMBER 2026",
    summary: "Founded and developed iTURSH, a student-focused rental application designed to solve equipment and utility access for university students.",
    techStack: ["React", "TypeScript", "Expo Go", "PostgreSQL", "Supabase", "AWS"],
    highlights: [
      "Engineered end-to-end booking workflow including property listings, visit requests, admin confirmations, and payment-based bookings.",
      "Constructed responsive mobile and web interfaces with React and Expo Go.",
      "Built database schema in PostgreSQL with Supabase for secure data access and real-time state sync.",
      "Configured AWS infrastructure for secure asset delivery and backend services."
    ],
    metrics: [
      "Facilitated 100+ student rental bookings on campus",
      "Built zero-downtime booking workflow & real-time inventory tracking"
    ]
  }
];
