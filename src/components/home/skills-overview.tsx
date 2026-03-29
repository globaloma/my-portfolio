"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive experiences with modern frameworks.",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn UI", "Chrome Dev Tools", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Backend",
    description: "Designing reliable APIs and robust system logic.",
    skills: ["Python/Flask", "REST APIs", "PostgreSQL", "SQL", "SQLlite", "DSA", "System Design"],
  },
  {
    title: "Data Cleansing and Analysis",
    description: "Working with data to train AI models",
    skills: [ "Data Analysis", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Kaggle" ],
  },
  {
    title: "AI / ML",
    description: "Building AI models and Integrating them into web apps.",
    skills: ["Whisper", "NLP", "scikit-learn","Machine Learning", "Hugging Face" ],
  },
  {
    title: "Tools",
    description: "Managing code, deployment, and infrastructure efficiently.",
    skills: ["Git", "Supabase", "Render", "Vercel", "Github", "CLI", "Linux Commands", "VS Code", "Postman", "Figma", ],
  },
  {
    title: "Soft skills",
    description: "Effective communication, teamwork, and problem-solving.",
    skills: ["Communication", "Teamwork", "Problem-solving", "Adaptability", "Time management", "Collaboration", "Critical thinking", "Creativity", "Empathy","Teaching","Leadership"],
  },
];

export function SkillsOverview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mb-12 space-y-4 md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Skills
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            What I Work With
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            A mix of technologies I use to build fast interfaces, backend systems,
            and intelligent applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div
                className={`rounded-[2rem] border p-6 backdrop-blur-xl md:p-8 ${
                  index % 2 === 0
                    ? "border-border bg-card/70"
                    : "border-pink-soft bg-linear-to-br from-card/70 via-card/70 to-accent/10"
                }`}
              >
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">{group.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground md:text-base">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}