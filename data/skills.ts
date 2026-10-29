export interface SkillItem {
  name: string;
  level?: "Core" | "Advanced" | "Proficient" | "Exploring";
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  accentGradient: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & ML",
    description:
      "Deep learning frameworks, computer vision, data engineering, and modern generative AI architectures.",
    icon: "Brain",
    color: "violet",
    accentGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    skills: [
      { name: "Python", level: "Core" },
      { name: "NumPy", level: "Proficient" },
      { name: "Pandas", level: "Proficient" },
      { name: "scikit-learn", level: "Proficient" },
      { name: "TensorFlow", level: "Proficient" },
      { name: "PyTorch", level: "Proficient" },
      { name: "OpenCV", level: "Proficient" },
      { name: "LLMs / Prompt Engineering", level: "Advanced" },
    ],
  },
  {
    id: "web",
    name: "Web Development",
    description:
      "Full-stack responsive web applications with modern component-driven architectures and APIs.",
    icon: "Globe",
    color: "cyan",
    accentGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3 / Tailwind", level: "Core" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "React", level: "Proficient" },
      { name: "Next.js", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
    ],
  },
  {
    id: "robotics",
    name: "Robotics & Hardware",
    description:
      "Bridging digital intelligence with physical systems via microcontrollers, sensors, and actuators.",
    icon: "Cpu",
    color: "emerald",
    accentGradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    skills: [
      { name: "Arduino", level: "Proficient" },
      { name: "ESP32", level: "Proficient" },
      { name: "Raspberry Pi", level: "Proficient" },
      { name: "Sensors & Actuators", level: "Proficient" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Ecosystem",
    description:
      "Version control, development environments, cloud backends, design systems, and Unix workflows.",
    icon: "Wrench",
    color: "blue",
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    skills: [
      { name: "Git & GitHub", level: "Core" },
      { name: "VS Code", level: "Core" },
      { name: "Figma", level: "Proficient" },
      { name: "Firebase", level: "Proficient" },
      { name: "Linux / Bash", level: "Proficient" },
    ],
  },
  {
    id: "soft",
    name: "Leadership & Collaboration",
    description:
      "Cultivating purpose-driven teamwork, clear public communication, and entrepreneurial execution.",
    icon: "Sparkles",
    color: "amber",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    skills: [
      { name: "Leadership", level: "Core" },
      { name: "Public Speaking", level: "Proficient" },
      { name: "Entrepreneurship", level: "Core" },
      { name: "Team Collaboration", level: "Core" },
    ],
  },
];

