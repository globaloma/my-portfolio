"use client";

import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, LayoutDashboard } from "lucide-react";
import { Container } from "@/components/layout/container";

export function CurrentlyBuilding() {
  return (
    <section className="relative overflow-x-clip py-20 md:py-28">
      <div className="absolute -left-24 top-10 h-60 w-60 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
              In Progress
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              What I’m currently building
            </h2>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              I’m actively improving the systems I build, exploring smarter product
              ideas, and refining the technical depth behind my work.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[2rem] border border-pink-soft bg-linear-to-br from-card via-card to-accent/20 p-7 backdrop-blur-xl md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-border bg-background/40 p-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Improving AI Transcription Systems
                  </h3>
                  <p className="text-sm leading-8 text-muted-foreground md:text-base">
                    I’m working on making transcription systems more useful beyond raw text
                    generation — with features like smarter search, easier review, and more
                    practical academic workflows.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:pt-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-border bg-background/40 p-3">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      Intelligent Assistants & NLP
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Exploring practical assistant workflows and natural language systems.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-border bg-background/40 p-3">
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      Frontend & System Refinement
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Improving interface polish, architecture, and performance across projects.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}