export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "AI & ML" | "Robotics & Hardware" | "Web Apps" | "All";
  summary: string;
  tags: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
  badge?: string;
}

export const projectCategories = [
  "All",
  "AI & ML",
  "Robotics & Hardware",
  "Web Apps",
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "neurovision-ai",
    title: "NeuroVision AI",
    tagline: "Real-time edge computer vision & spatial tracking",
    category: "AI & ML",
    summary:
      "A high-throughput computer vision pipeline engineered for embedded platforms. Utilizes lightweight neural architectures and ONNX acceleration to achieve low-latency multi-class object detection and spatial distance estimation.",
    tags: ["Python", "PyTorch", "OpenCV", "YOLOv8", "Edge AI", "ONNX"],
    highlights: [
      "Sub-28ms inference latency on low-power ARM architecture",
      "Custom multi-scale object tracking and trajectory calculation",
      "Real-time visual telemetry pipeline with zero dropped frames",
    ],
    githubUrl: "https://github.com/divyagoswami9508",
    demoUrl: "#",
    featured: true,
    badge: "Featured AI Project",
  },
  {
    id: "aurallm-agent",
    title: "AuraLLM Autonomous Agent",
    tagline: "Context-aware multi-modal research & reasoning agent",
    category: "AI & ML",
    summary:
      "An autonomous agent system with recursive problem decomposition, retrieval-augmented generation (RAG), and dynamic tool execution for synthesizing unstructured data and technical research.",
    tags: ["Next.js 15", "TypeScript", "LangChain", "Vector DB", "LLMs"],
    highlights: [
      "Hybrid dense-sparse semantic retrieval across technical documents",
      "Streaming token rendering with markdown & LaTeX formula support",
      "Tool sandbox for code validation and structured data exports",
    ],
    githubUrl: "https://github.com/divyagoswami9508",
    demoUrl: "#",
    featured: true,
    badge: "AI Agent",
  },
  {
    id: "robonav-esp32",
    title: "RoboNav ESP32",
    tagline: "Autonomous obstacle avoidance & remote telemetry rover",
    category: "Robotics & Hardware",
    summary:
      "A robotic mobile platform featuring multi-sensor fusion (ultrasonic, infrared, and IMU), closed-loop PID velocity control, and low-latency bi-directional WebSocket telemetry for remote cockpit monitoring.",
    tags: ["ESP32", "Arduino C++", "WebSockets", "PID Control", "Hardware"],
    highlights: [
      "Autonomous dynamic path adjustment with predictive clearance",
      "Interactive web-based ground station cockpit with HUD visuals",
      "Onboard power bus telemetry and thermal anomaly protection",
    ],
    githubUrl: "https://github.com/divyagoswami9508",
    demoUrl: "#",
    featured: true,
    badge: "Robotics",
  },
  {
    id: "kisan-ai",
    title: "KisanAI Crop Diagnostic Engine",
    tagline: "Vision-based leaf disease detection tailored for Indian agriculture",
    category: "AI & ML",
    summary:
      "An accessible AI tool built to assist farmers in detecting plant pathologies directly from smartphone camera feeds, providing offline-first triage and actionable treatment suggestions in vernacular formats.",
    tags: ["TensorFlow", "Python", "FastAPI", "React", "Mobile First"],
    highlights: [
      "Deep convolutional model trained on over 45,000+ agricultural samples",
      "94.2% top-1 validation accuracy across common staple crops",
      "Lightweight model footprint optimized for low-bandwidth rural connectivity",
    ],
    githubUrl: "https://github.com/divyagoswami9508",
    demoUrl: "#",
    featured: true,
    badge: "Social Impact AI",
  },
  {
    id: "syncpulse-hub",
    title: "SyncPulse Hackathon Hub",
    tagline: "Real-time collaboration platform for student builders & hardware hackers",
    category: "Web Apps",
    summary:
      "A collaborative platform designed for college innovators to match with teammates, manage shared hardware inventories (sensors, microcontrollers), and track project sprints.",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js"],
    highlights: [
      "Real-time team discovery and instant skill-matching algorithm",
      "Collaborative hardware component reservation and checkout system",
      "Live sprint kanban boards and project showcase gallery",
    ],
    githubUrl: "https://github.com/divyagoswami9508",
    demoUrl: "#",
    featured: false,
    badge: "Community Web",
  },
  {
    id: "sensorgrid-node",
    title: "SensorGrid Ambient Node",
    tagline: "Distributed IoT air quality & environmental sensor grid",
    category: "Robotics & Hardware",
    summary:
      "A solar-assisted environmental telemetry node tracking particulate matter (PM2.5 / PM10), temperature, humidity, and atmospheric pressure with live telemetry streamed to an analytics dashboard.",
    tags: ["Raspberry Pi", "Python", "MQTT", "Sensors", "IoT"],
    highlights: [
      "Designed specifically for Delhi NCR microclimate & air monitoring",
      "Fault-tolerant MQTT queuing with local flash memory caching",
      "Automated hourly trend forecasting and threshold alerting",
    ],
    githubUrl: "https://github.com/divyagoswami9508",
    demoUrl: "#",
    featured: false,
    badge: "IoT & Environment",
  },
];

