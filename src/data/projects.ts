export type Project = {
  title: string;
  period?: string;
  blurb: string;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
    {
    title: "Bottle Counter (CV)",
    period: "2025",
    blurb:
      "Object detection on annotated datasets to count bottles; aug experiments and export toward edge deployment.",
    tags: ["YOLOv11", "Computer Vision","AI models"],
    repo: "https://github.com/ajdeodhar/bottle-detection",
    featured: true,
  },
  {
    title: "Helmet Detection (CV)",
    period: "2025",
    blurb:
      "ResNet18 on cropped regions; now experimenting with YOLO for detection + counting (VOC-style annotations).",
    tags: ["PyTorch", "ResNet18", "YOLO", "OpenCV"],
    repo: "https://github.com/ajdeodhar/helmet-detection",
    featured: true,
  },
  // {
  //   title: "FX Trends (EDA + Tableau)",
  //   period: "2025",
  //   blurb:
  //     "Python pipeline pulled a year of FX data from Frankfurter API → EDA for trends → Tableau dashboard.",
  //   tags: ["Python", "Pandas", "API", "Tableau"],
  //   repo: "https://github.com/ajdeodhar/ganit-internship/tree/main/currency-api-capstone",
  //   featured: true,
  // },
  {
    title: "Diabetes Risk Modeling",
    period: "2025",
    blurb:
      "XGBoost / Random Forest / Linear Regression on a large healthcare dataset; cross-validated and compared metrics.",
    tags: ["XGBoost", "RandomForest", "scikit-learn"],
    repo: "https://github.com/ajdeodhar/diabetes-detection",
    featured: true,
  },

  {
  title: "MedWay — Smart Doctor Scheduling & Queue",
  period: "2025",
  blurb:
    "An application for booking clinic appointments, tracking live queue status, and receiving traffic-adjusted alerts. Includes a doctor dashboard for managing schedules and generating digital prescriptions.",
  tags: ["Next.js", "TypeScript", "Node", "PostgreSQL", "Redis", "Maps API"],
  repo: "https://github.com/Advk2k4/medway", // placeholder — update if needed
  featured: true,
},

// --- Fantasy Football Recco Chatbot -------------------------------------
{
  title: "Fantasy Football Recommendation Chatbot",
  period: "2024",
  blurb:
    "Chatbot that aggregates multi-source player stats and uses prompt templates to generate roster advice. Built automated + manual eval; achieved high F1 (0.92) for relevance and accuracy.",
  tags: ["Python", "BERTopic/Embeddings", "Pandas", "Evaluation", "Visualization"],
  //repo: "https://github.com/ajdeodhar/fantasy-recco-chatbot",
},

// --- Baseball Trajectory Simulation --------------------------------------
{
  title: "Simulating Baseball Trajectories with Air Resistance",
  period: "2023",
  blurb:
    "Numerical model for a baseball launched at varied angles with drag; computed time-of-flight, range, and apex. Validated against MLB statcast; exported results for energy-loss analysis.",
  tags: ["MATLAB", "Numerical Methods", "Physics", "Excel"],
  //repo: "https://github.com/ajdeodhar/baseball-trajectory-sim",
},

// --- Access Control System (Embedded) ------------------------------------
{
  title: "Access Control System (Embedded)",
  period: "2025 -WIP",
  blurb:
    "Programmable door access based on occupancy/health status on ATmega328P. Pure ANSI C (no Arduino libs); defined capacity thresholds and multi-level indicators; integrated I/O modules.",
  tags: ["ANSI C", "ATmega328P", "Embedded", "Digital Logic"],
  repo: "https://github.com/ajdeodhar/access-control-system",
},
{
  title: "Indian City-to-City Train Route Finder",
  period: "2025 — WIP",
  blurb:
    "Work-in-progress tool that takes any two Indian cities and lists trains between every station pair (e.g., Delhi ⇄ Kolkata: NDLS/ANVT/DLI/NZM ↔ HWH/SDAH). Expands cities into major stations, enumerates all routes, and fetches train lists per route.",
  tags: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
  repo: "https://github.com/ajdeodhar/ir-train-list", // update if different
  featured: true
},
{
  title: "MATLAB Math Explorations",
  period: "2023",
  blurb:
    "A collection of MATLAB programs developed as part of ECE 201 – Analytical Tools for Electrical and Computer Engineering at UMass Amherst. Covers symbolic computation, numerical solving, and linear algebra with clear derivations, programmatic implementations, and plotted results.",
  tags: ["MATLAB", "Numerical Methods", "Symbolic Computation", "Linear Algebra", "Engineering Math"],
  repo: "https://github.com/ajdeodhar/matlab-math-explorations",
},
{
  title: "Personal Portfolio Website",
  period: "2025",
  blurb:
    "This portfolio website itself, built with Next.js and Tailwind CSS. Features a responsive design, dark mode, and dynamic content loading.",
  tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  repo: "",
},
];
