import Link from "next/link";
import { Mail, Globe, FolderGit2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { CONTACTS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chioma Emmanuella for internships, junior software engineering roles, and collaborations.",
    alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute left--7rem top-20 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute right--6rem bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-5xl space-y-14">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Let’s connect and build something meaningful
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              I’m open to internships, junior software engineering roles, and collaborations
              on products that solve real problems. If you think I’d be a good fit for
              your team or project, I’d love to hear from you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href={`mailto:${CONTACTS.email}`}
              className="group rounded-[2rem] border border-pink-soft bg-card/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,105,180,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl border border-border bg-background/40 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Email</p>
                <h2 className="text-xl font-semibold">Send a message</h2>
                <p className="break-all text-sm leading-7 text-muted-foreground">
                  {CONTACTS.email}
                </p>
              </div>
            </Link>

            <Link
              href={CONTACTS.linkedin}
              target="_blank"
              className="group rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,105,180,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl border border-border bg-background/40 p-3">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">LinkedIn</p>
                <h2 className="text-xl font-semibold">Professional profile</h2>
                <p className="break-all text-sm leading-7 text-muted-foreground">
                  {CONTACTS.linkedin}
                </p>
              </div>
            </Link>

            <Link
              href={CONTACTS.github}
              target="_blank"
              className="group rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,105,180,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl border border-border bg-background/40 p-3">
                  <FolderGit2 className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">GitHub</p>
                <h2 className="text-xl font-semibold">Code & projects</h2>
                <p className="break-all text-sm leading-7 text-muted-foreground">
                  {CONTACTS.github}
                </p>
              </div>
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-border bg-card/70 p-8 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Currently Open To
              </p>

              <div className="mt-5 space-y-4 text-muted-foreground">
                <p className="leading-8">
                  I’m currently interested in:
                </p>

                <ul className="space-y-3 text-sm leading-7">
                  <li>• Software engineering internships</li>
                  <li>• Junior frontend or full-stack developer roles</li>
                  <li>• Collaborations on meaningful products</li>
                  <li>• Opportunities involving AI-powered applications</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-pink-soft bg-linear-to-br from-card via-card to-accent/20 p-8 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Preferred Contact
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                The best way to reach me is by email or LinkedIn
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                If you’re reaching out about a role, collaboration, or project idea,
                feel free to include a short message with context. I’m always happy to
                connect with people building thoughtful products.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}