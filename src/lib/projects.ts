import { Project } from "./types/project";

export const projects: Project[] = [
  {
    slug: "ai-transcription-system",
    title: "AI Transcription System",
    shortDescription:
      "An AI-powered lecture transcription system built for practical student use.",
    description:
      "A system that converts audio and video lectures into text using Whisper, helping students access searchable learning content.",
    techStack: ["Next.js", "Flask", "Whisper", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    problem:
      "Students often struggle to revisit spoken lecture content efficiently, especially when lessons are long or difficult to follow in real time.",
    solution:
      "I built a transcription platform that processes uploaded lecture media and converts it into readable text, making it easier for students to review and study.",
    howItWorks: [
      "Users upload an audio or video lecture.",
      "The backend processes the file and sends it through Whisper for transcription.",
      "The generated text is stored and displayed in the frontend.",
      "Users can review the transcript for learning and revision.",
    ],
    challenges: [
      "Handling media uploads efficiently across the frontend and backend.",
      "Integrating AI transcription into a user-friendly workflow.",
      "Structuring transcripts for practical readability.",
    ],
    outcome:
      "The system demonstrates how AI can solve a real educational problem by improving access to spoken academic content.",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/tesmeg.png",
  },
  {
    slug: "university-of-abuja-chatbot",
    title: "University of Abuja Chatbot",
    shortDescription:
      "A machine learning chatbot for answering university-related questions.",
    description:
      "A chatbot that uses NLP and Naive Bayes intent classification to respond to common university queries.",
    techStack: ["Python", "Flask", "scikit-learn", "Naive Bayes", "NLP"],
    problem:
      "Students often need quick answers to repeated questions about university processes, but information can be slow to access.",
    solution:
      "I built a chatbot that classifies user intent and provides relevant responses to common academic and administrative questions.",
    howItWorks: [
      "Users type a question into the chatbot interface.",
      "The input is preprocessed using NLP techniques.",
      "A Naive Bayes model predicts the user’s intent.",
      "The chatbot returns a matching response.",
    ],
    challenges: [
      "Improving intent classification accuracy with limited training data.",
      "Designing responses that feel useful and relevant.",
      "Balancing simple ML methods with practical chatbot performance.",
    ],
    outcome:
      "The chatbot demonstrates applied machine learning for real-world support and information access.",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/bookmaker.png",
  },
  {
    slug: "bookmaker-website",
    title: "Bookmaker Website",
    shortDescription:
      "A full-stack sports platform with API integration and backend logic.",
    description:
      "A bookmaker platform built with Next.js, Flask, PostgreSQL, and API-Football, focused on system design and data-driven experiences.",
    techStack: ["Next.js", "Flask", "PostgreSQL", "API-Football", "Tailwind CSS"],
    featured: true,
    problem:
      "Sports users need a platform that presents match-related data clearly while handling dynamic updates from external APIs.",
    solution:
      "I built a full-stack platform that integrates football data from external APIs and structures it into a usable web experience.",
    howItWorks: [
      "The frontend displays fixtures and related sports data.",
      "The backend communicates with API-Football.",
      "Relevant information is processed and stored where necessary.",
      "Users interact with a responsive, data-driven interface.",
    ],
    challenges: [
      "Managing external API data reliably.",
      "Structuring backend logic for maintainability.",
      "Designing a frontend that stays clear despite dense information.",
    ],
    outcome:
      "This project highlights my ability to build full-stack systems that combine frontend experience, backend logic, and third-party integrations.",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/bookmaker.png",
  },
  {
    slug: "tesmeg-website",
    title: "Tesmeg Website",
    shortDescription:
      "A production-ready website with modern UI and backend integration.",
    description:
      "A polished web platform focused on responsive design, clean frontend implementation, and practical deployment.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    problem:
      "Businesses need websites that are modern, fast, and easy to maintain while still supporting real functionality.",
    solution:
      "I built a responsive production-ready website with modern UI patterns and backend-connected functionality.",
    howItWorks: [
      "Users navigate a clean and responsive interface.",
      "Frontend components are structured for maintainability.",
      "Backend-connected features support dynamic content and interactions.",
      "The application is deployed for real-world access.",
    ],
    challenges: [
      "Maintaining a clean UI while supporting practical features.",
      "Ensuring responsiveness across devices.",
      "Managing deployment and production readiness.",
    ],
    outcome:
      "The project demonstrates strong frontend craftsmanship and the ability to deliver polished, usable web products.",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/tesmeg.png",
  },
];