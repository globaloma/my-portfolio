import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Chioma Emmanuella across AI applications, frontend engineering, backend systems, and full-stack development.",
    alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="relative">
          <div className="mb-14 max-w-3xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Portfolio
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Projects that reflect how I build
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              A collection of projects across AI, frontend engineering, backend systems,
              and full-stack product development — focused on solving practical problems
              with thoughtful implementation.
            </p>
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-2">
            {projects.map((project) => {
              const category =
                project.slug === "ai-transcription-system" ||
                project.slug === "university-of-abuja-chatbot"
                  ? "AI & Machine Learning"
                  : "Full-Stack Development";

              return (
                <article
                  key={project.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/20 hover:shadow-[0_24px_60px_rgba(255,105,180,0.08)]"
                >
                  {/* Preview Area */}
                  <div className="relative border-b border-white/5 p-4 md:p-5">
                    <div className="absolute inset-0 bg-linear-to-br from-pink-400/5 via-transparent to-fuchsia-400/5" />

                    <div className="relative mb-4 flex items-center justify-between">
                      <span className="inline-flex rounded-full border border-pink-soft bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                        {category}
                      </span>
                    </div>

                    <div className="relative flex h-62.5 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/5 bg-black/30 md:h-70">
                      {project.image ? (
                        <div className="relative h-full w-full p-3 md:p-4">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-accent/20 to-secondary/10">
                          <span className="text-sm text-muted-foreground">
                            Project Preview
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col space-y-5 p-6">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-sm leading-7 text-muted-foreground md:text-base">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full bg-secondary/80 px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}

                      {project.techStack.length > 4 && (
                        <Badge
                          variant="outline"
                          className="rounded-full border-pink-soft text-xs"
                        >
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-primary"
                      >
                        Read Case Study
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}