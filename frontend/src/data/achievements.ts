export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "cf-289",
    title: "Codeforces Round 1112 Rank 289",
    subtitle: "Global Rank 289 out of thousands of international competitors",
    category: "COMPETITIVE PROGRAMMING",
    description: "Achieved rank 289 in Codeforces Round 1112, solving complex algorithmic and mathematical problems under strict time constraints.",
    badge: "GLOBAL RANK 289"
  },
  {
    id: "cf-pupil",
    title: "Codeforces Pupil Rating 1274",
    subtitle: "Official Pupil Rank on Codeforces Platform",
    category: "ALGORITHMIC COMPETENCE",
    description: "Maintained active competitive programming rating of 1274 (Pupil) with consistent problem solving performance.",
    badge: "1274 RATING"
  },
  {
    id: "dsa-500",
    title: "500+ DSA & CP Questions Solved",
    subtitle: "LeetCode, Codeforces & CodeChef",
    category: "PROBLEM SOLVING",
    description: "Solved over 500 algorithmic problems spanning graph theory, dynamic programming, binary search, segment trees, and greedy strategies.",
    badge: "500+ SOLVES"
  },
  {
    id: "sih-selection",
    title: "Smart India Hackathon Selection",
    subtitle: "College-Level Selection",
    category: "HACKATHONS",
    description: "Selected at college level for Smart India Hackathon for designing a Crowdsourced Civic Issue Platform with machine learning classification.",
    badge: "SIH SELECTED"
  },
  {
    id: "basketball-state",
    title: "State-Level Basketball Representation",
    subtitle: "State Level Athletics",
    category: "SPORTS & ATHLETICS",
    description: "Represented at state-level basketball championships, demonstrating teamwork, discipline, and competitive spirit.",
    badge: "STATE ATHLETE"
  }
];
