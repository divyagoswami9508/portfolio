export interface ProfileData {
  name: string;
  tagline: string;
  role: string;
  currentPursuit: string;
  location: string;
  email: string;
  github: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
  typewriterTitles: string[];
  aboutBio: {
    lead: string;
    vision: string;
    philosophy: string;
  };
  coreValues: {
    title: string;
    description: string;
    icon: string;
    badge: string;
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Divya Goswami",
  tagline: "Aspiring AI Engineer · Innovator · Entrepreneur",
  role: "AI Engineer & Innovator",
  currentPursuit: "Computer Science & Artificial Intelligence",
  location: "Delhi NCR, India",
  email: "divyagoswami20081501@gmail.com",
  github: "https://github.com/divyagoswami9508",
  instagram: "https://instagram.com/divya_goswami_09",
  twitter: "https://x.com/divya_goswami_09",
  linkedin: "https://linkedin.com/in/divyagoswami", // editable placeholder
  resumeUrl: "/resume.pdf",
  avatarUrl: "/divya.jpg",
  typewriterTitles: [
    "AI Engineer",
    "Innovator",
    "Entrepreneur",
    "Problem Solver",
  ],
  aboutBio: {
    lead: "Hi, I'm Divya Goswami, an aspiring AI Engineer, innovator, and entrepreneur currently pursuing Computer Science and Artificial Intelligence. I'm passionate about technology, robotics, entrepreneurship, and solving real-world problems through innovative solutions.",
    vision: "I love exploring new ideas, learning by doing, and turning creative thinking into practical projects. My vision is to build AI-powered solutions that create meaningful impact, contribute to India's growth, and make technology more accessible and useful.",
    philosophy: "I believe in continuous learning, critical thinking, leadership, and challenging myself to think beyond the ordinary. I'm always looking for opportunities to collaborate, experiment, and transform ideas into something valuable. My goal is to build technology that doesn't just solve problems but creates possibilities for the future.",
  },
  coreValues: [
    {
      title: "Continuous Learning",
      description:
        "Relentlessly mastering foundational AI architectures, emergent models, and modern systems by building daily.",
      icon: "Sparkles",
      badge: "Growth Mindset",
    },
    {
      title: "Critical Thinking",
      description:
        "Deconstructing complex first-principles problems to architect elegant, scalable, and high-impact solutions.",
      icon: "Cpu",
      badge: "Analytical",
    },
    {
      title: "Leadership",
      description:
        "Empowering peers, coordinating collaborative sprints, and communicating a bold vision into real execution.",
      icon: "Users",
      badge: "Team Catalyst",
    },
    {
      title: "Think Beyond Ordinary",
      description:
        "Challenging default paradigms to create breakthrough innovations that open new doors for the future.",
      icon: "Compass",
      badge: "Innovation",
    },
  ],
  stats: [
    {
      label: "Current Focus",
      value: "CS & AI",
      description: "Undergraduate degree & research",
    },
    {
      label: "Core Specialization",
      value: "AI & Robotics",
      description: "Vision, LLMs & embedded hardware",
    },
    {
      label: "Location",
      value: "Delhi NCR",
      description: "India's thriving tech hub",
    },
    {
      label: "Vision",
      value: "Impact",
      description: "Tech solutions for India & beyond",
    },
  ],
};

