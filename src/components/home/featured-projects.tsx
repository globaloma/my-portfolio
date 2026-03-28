"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <div className="mb-12 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Selected Work
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A selection of projects that reflect my work across AI systems,
            frontend development, and full-stack application design.
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const category =
              project.slug === "ai-transcription-system"
                ? "AI Application"
                : "Full-Stack Platform";

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/20 hover:shadow-[0_24px_60px_rgba(255,105,180,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-pink-400/40 to-transparent" />

                <div className="relative border-b border-white/5 p-4 md:p-5">
                  <div className="absolute inset-0 bg-linear-to-br from-pink-400/5 via-transparent to-fuchsia-400/5" />

                  <div className="relative mb-4">
                    <span className="inline-flex rounded-full border border-pink-soft bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                      {category}
                    </span>
                  </div>

                  <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/5 bg-black/30 md:h-67.5">
                    {project.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain object-center p-3 md:p-4 transition-transform duration-500 group-hover:scale-[1.02]"
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

                <div className="flex flex-1 flex-col space-y-5 p-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
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
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-primary"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}