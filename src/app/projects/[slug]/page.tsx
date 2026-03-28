import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription || project.description,
    openGraph: {
      title: `${project.title} | Chioma Emmanuella`,
      description: project.shortDescription || project.description,
      images: project.image ? [project.image] : ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Chioma Emmanuella`,
      description: project.shortDescription || project.description,
      images: project.image ? [project.image] : ["/og-image.png"],
    },
    alternates: {
    canonical: `/projects/${project.slug}`,
  },
  };
}

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const topSections = [
    { title: "Problem", content: project.problem },
    { title: "Solution", content: project.solution },
  ];

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-6xl space-y-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Hero */}
          <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                Case Study
              </p>

              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                {project.title}
              </h1>

              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full bg-secondary/80 px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-pink-500/20 hover:bg-primary/90"
                  >
                    <Link href={project.liveUrl} target="_blank">
                      Live Demo
                    </Link>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-pink-soft bg-card/40 hover:bg-accent"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2"
                    >
                      GitHub Repository
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-pink-300/20 via-fuchsia-400/10 to-transparent blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-pink-soft bg-card/70 p-4 backdrop-blur-xl pink-glow">
                <div className="relative flex h-70 items-center justify-center overflow-hidden rounded-[1.5rem] bg-black/30 md:h-85">
                  {project.image ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain object-center p-4"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-sm text-muted-foreground">
                        Project Preview
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Problem + Solution */}
          <section className="grid gap-6 md:grid-cols-2">
            {topSections.map((section, index) => (
              <div
                key={section.title}
                className={`rounded-[2rem] border p-6 backdrop-blur-xl md:p-8 ${
                  index === 1
                    ? "border-pink-soft bg-linear-to-br from-card via-card to-accent/20"
                    : "border-border bg-card/70"
                }`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  {section.title}
                </p>
                <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
                  {section.content}
                </p>
              </div>
            ))}
          </section>

          {/* How it works */}
          <section className="rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
              How It Works
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] border border-white/5 bg-background/30 p-5"
                >
                  <p className="text-sm font-medium text-primary">Step {index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges + Outcome */}
          <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                Challenges
              </p>

              <div className="mt-6 space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="rounded-[1.5rem] border border-white/5 bg-background/30 p-4"
                  >
                    <p className="text-sm leading-7 text-muted-foreground">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-pink-soft bg-linear-to-br from-card via-card to-accent/20 p-6 backdrop-blur-xl md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                Outcome / Impact
              </p>
              <p className="mt-6 text-sm leading-8 text-muted-foreground md:text-base">
                {project.outcome}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}