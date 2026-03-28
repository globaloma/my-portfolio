import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/lib/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Chioma Emmanuella, her journey into tech, interest in AI-powered systems, and goals as a software engineer.",
    alternates: {
    canonical: "/about",
  },
};
const valueIcons = [Code2, Sparkles, BrainCircuit];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-400/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-6xl space-y-20">
          {/* Hero */}
          <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                {aboutData.hero.eyebrow}
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {aboutData.hero.title}
              </h1>

              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {aboutData.hero.intro}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {aboutData.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-border bg-card/70 p-4 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-pink-300/20 via-fuchsia-400/10 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-pink-soft bg-card/70 p-3 backdrop-blur-xl pink-glow">
                <div className="relative aspect-[4/5.1] overflow-hidden rounded-[1.5rem] bg-black">
                  <Image
                    src={aboutData.hero.image}
                    alt="Chioma Emmanuella"
                    fill
                    className="object-cover "
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Story + side cards */}
          <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-pink-soft bg-card/70 p-7 backdrop-blur-xl md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                {aboutData.story.title}
              </p>

              <div className="mt-6 space-y-5">
                {aboutData.story.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-8 text-muted-foreground md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {aboutData.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[2rem] border p-6 backdrop-blur-xl ${
                    index === 0
                      ? "border-border bg-card/70"
                      : "border-pink-soft bg-linear-to-br from-card via-card to-accent/20"
                  }`}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}

              <div className="rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  Personality
                </p>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">
                  I’m still learning, still building, and still refining my craft — but I’m intentional,
                  curious, and serious about growing into a strong software engineer.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                {aboutData.values.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {aboutData.values.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {aboutData.values.items.map((item, index) => {
                const Icon = valueIcons[index] || Sparkles;

                return (
                  <div
                    key={item.title}
                    className={`rounded-[2rem] border p-6 backdrop-blur-xl transition hover:-translate-y-1 ${
                      index === 1
                        ? "border-pink-soft bg-linear-to-br from-card via-card to-accent/20"
                        : "border-border bg-card/70 hover:border-pink-soft"
                    }`}
                  >
                    <div className="w-fit rounded-2xl border border-border bg-background/40 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Next */}
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-border bg-card/70 p-7 backdrop-blur-xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                Next Step
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                {aboutData.next.title}
              </h2>
            </div>

            <div className="rounded-[2rem] border border-pink-soft bg-linear-to-br from-card via-card to-accent/20 p-7 backdrop-blur-xl">
              <p className="text-sm leading-8 text-muted-foreground md:text-base">
                {aboutData.next.text}
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-[2rem] border border-pink-soft bg-card/70 p-8 text-center backdrop-blur-xl md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Let’s Connect
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              If my story resonates with you, I’d love to connect
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
              I’m open to internships, junior roles, and meaningful collaborations.
            </p>

            <div className="mt-8">
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-pink-500/20 hover:bg-primary/90"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}