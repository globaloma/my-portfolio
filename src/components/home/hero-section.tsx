"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/lib/constants";
import { FileText } from "lucide-react";
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-10 md:pt-20 md:pb-14">
      <div className="absolute inset-0 bg-grid-soft opacity-20" />
      <div className="absolute left--8rem top-12 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute right--6rem top-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom--4rem left-1/3 h-72 w-72 rounded-full bg-rose-400/10 blur-3xl" />

      <Container>
        <div className="relative">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-pink-soft bg-card/60 px-4 py-2 text-sm text-primary backdrop-blur">
                Full-Stack Developer • Frontend + AI Systems
              </div>

              <div className="space-y-5">
                <p className="max-w-md text-sm uppercase tracking-[0.28em] text-muted-foreground">
                  Chioma Emmanuella
                </p>

                <div className="space-y-0 leading-none">
                  <h1 className="text-[3.5rem] font-semibold tracking-[-0.06em] text-foreground md:text-[5.5rem] lg:text-[7rem]">
                    Full-stack
                  </h1>
                  <h1 className="ml-6 text-[3.3rem] font-semibold tracking-[-0.06em] text-gradient-pink md:ml-10 md:text-[5.2rem] lg:text-[6.7rem]">
                    Developer
                  </h1>
                </div>

                <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                  I build intelligent web applications with strong frontend
                  engineering, practical backend systems, and applied AI —
                  focused on products that solve real-world problems
                  beautifully.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-pink-500/20 hover:bg-primary/90"
                >
                  <Link href="/projects" className="inline-flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-pink-soft bg-card/40 px-6 backdrop-blur hover:bg-accent"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-12 rounded-full px-6"
                >
                  <a href={CONTACTS.resume} target="_blank" download>
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Download Resume
                    </span>
                  </a>
                </Button>
              </div>


              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={CONTACTS.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:border-pink-soft hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  GitHub
                </Link>

                <Link
                  href={CONTACTS.linkedin}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:border-pink-soft hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  LinkedIn
                </Link>

                <Link
                  href={`mailto:${CONTACTS.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition hover:border-pink-soft hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md lg:ml-auto"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-pink-300/20 via-fuchsia-400/10 to-transparent blur-3xl" />

              <div className="relative rounded-[2rem] border border-pink-soft bg-card/70 p-3 backdrop-blur-xl pink-glow">
                <div className="relative aspect-[4/5.2] overflow-hidden rounded-[1.6rem] bg-black">
                  <Image
                    src="/images/chioma.jpeg"
                    alt="Chioma Emmanuella portrait"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="absolute -left-8 bottom-10 hidden rounded-2xl border border-pink-soft bg-card/80 px-4 py-3 backdrop-blur md:block"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Frontend • Full-stack • AI
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            <div className="rounded-[1.6rem] border border-border bg-card/60 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Frontend
              </p>
              <h3 className="mt-3 text-lg font-semibold">Modern interfaces</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Building responsive experiences with Next.js, Tailwind CSS, and
                TypeScript.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-pink-soft bg-linear-to-br from-card via-card to-accent/30 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                AI Systems
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Practical intelligence
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Applying Whisper, NLP, and machine learning to solve useful
                problems.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-border bg-card/60 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Backend
              </p>
              <h3 className="mt-3 text-lg font-semibold">Real systems</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Designing APIs, backend logic, and data flows that support
                production-ready apps.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
