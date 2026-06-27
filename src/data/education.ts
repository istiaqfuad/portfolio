import type { Credential, Education } from "../types";

export const education: Education = {
  school: "University of Rajshahi",
  degree: "B.Sc. in Computer Science and Engineering",
  period: "Jan 2022 — Expected 2026",
  cgpa: "CGPA 3.58 / 4.00",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Computer Architecture",
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Discrete Mathematics",
  ],
};

export const certifications: Credential[] = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University · DeepLearning.AI",
    date: "Jul 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q6NXEZKR8TMA",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Stanford University · DeepLearning.AI",
    date: "Oct 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/B5AQT8YMBQU8",
  },
];

export const achievements: Credential[] = [
  {
    name: "Award of Merit",
    event: "International Blockchain Olympiad",
    date: "Oct 2024",
    href: "https://drive.google.com/file/d/1JBwTW0jXm-M77g4E_a-D2NaJUHX4EyMg/view?usp=sharing",
  },
  {
    name: "SDG-9 Silver Medal",
    event: "International Blockchain Olympiad",
    date: "Oct 2022",
    href: "https://drive.google.com/file/d/1r5VAn4hBUb7fEbmXG34dBFAzPjVzIfWr/view?usp=sharing",
  },
];
