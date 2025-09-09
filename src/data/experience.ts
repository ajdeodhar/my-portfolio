export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  link?: string; // optional: where the card should go when clicked
  links?: { label: string; href: string }[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Ganit Inc.",
    role: "Data Analyst Intern",
    period: "Summer 2025",
    bullets: [
      "Built a Python pipeline to fetch a year of FX rates from Frankfurter API.",
      "Performed EDA to uncover market trends and seasonality.",
      "Built a Tableau dashboard to communicate insights."
    ],
    //link: "https://www.ganitinc.com/",
    links: [
      { label: "FX Trends (EDA + Tableau)", href: "https://github.com/ajdeodhar/ganit-internship/tree/main/currency-api-capstone" }
    ]
  },
  {
    company: "Simulytics",
    role: "Product Management Trainee",
    period: "April 2025– Present",
    bullets: [
      "Worked on MS SQL Server tables (SKU/UoM/Bin masters) to simulate WMS operations.",
      "Developed a FastAPI email service for real-time alerts with embedded charts & PDFs.",
      "Integrated Gupshup WhatsApp API for end-to-end messaging."
    ],
    //link: "#", // put a real link if you have one
    //links: [
      //{ label: "Email Service (FastAPI)", href: "https://github.com/ajdeodhar/email-service" }
    //]
  },
  {
    company: "Techlore",
    role: "Software Engineer Intern",
    period: "2024",
    bullets: [
      "Built UI (JS/HTML/CSS) to visualize optimized logistics routes using linear programming.",
      "Integrated Lindo API to generate cost-effective network flows."
    ],
    //link: "#"
  }
];
