export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Education" | "Leadership" | "Technical" | "Community";
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "degree-cs-ai",
    role: "B.Tech in Computer Science & Artificial Intelligence",
    organization: "University / Institute",
    location: "Delhi NCR, India",
    period: "2024 – Present",
    type: "Education",
    description:
      "Deep diving into core computer science foundations, algorithm design, artificial intelligence paradigms, computer vision, and hands-on robotics engineering.",
    highlights: [
      "Rigorous focus on Neural Networks, Machine Learning Foundations, and Data Structures",
      "Active research in edge AI acceleration and sensor telemetry pipelines",
      "Building practical solutions addressing grassroots technological challenges in India",
    ],
    skills: ["AI Foundations", "DSA", "Python", "Computer Vision", "Mathematics for ML"],
  },
  {
    id: "ai-robotics-lead",
    role: "Technical Lead & Robotics Contributor",
    organization: "Student Robotics & AI Tech Club",
    location: "Delhi NCR, India",
    period: "2025 – Present",
    type: "Leadership",
    description:
      "Spearheading hardware prototyping and embedded software development for autonomous robotic systems and campus technical showcases.",
    highlights: [
      "Architected sensor fusion pipelines integrating ultrasonic, LiDAR, and ESP32 microcontrollers",
      "Conducted hands-on robotics bootcamps for 80+ aspiring student engineers",
      "Coordinated cross-functional teams combining hardware fabrication with software telemetry",
    ],
    skills: ["ESP32", "Arduino", "Team Leadership", "Sensor Fusion", "Hardware Prototyping"],
  },
  {
    id: "hackathon-innovator",
    role: "Hackathon Innovator & Team Lead",
    organization: "Collegiate & National Hackathons",
    location: "Delhi NCR / Pan-India",
    period: "2024 – 2026",
    type: "Technical",
    description:
      "Pitched and engineered high-impact working prototypes under tight sprint constraints, bridging artificial intelligence with societal problems.",
    highlights: [
      "Developed KisanAI crop diagnostic prototype during an intense 36-hour sprint",
      "Pioneered edge vision algorithms recognized for execution speed and real-world viability",
      "Communicated technical architecture and business value clearly to jury panels",
    ],
    skills: ["Rapid Prototyping", "Pitching", "Full-Stack AI", "Critical Thinking", "Teamwork"],
  },
  {
    id: "open-source-builder",
    role: "Open Source Contributor & Independent Builder",
    organization: "GitHub Community",
    location: "Remote / Global",
    period: "2024 – Present",
    type: "Community",
    description:
      "Publishing modular Python utilities, computer vision experiment templates, and embedded robotics firmware for community exploration.",
    highlights: [
      "Shared well-documented OpenCV and ONNX deployment scripts for microcontrollers",
      "Engaged in technical knowledge sharing with peer developers worldwide",
      "Advocating for accessible, open-weight AI tools and community innovation",
    ],
    skills: ["Git/GitHub", "Open Source", "Documentation", "Linux", "Python Packaging"],
  },
];

