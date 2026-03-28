import Link from "next/link";
import { Container } from "./container";
import { CONTACTS, SITE_CONFIG } from "@/lib/constants";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: CONTACTS.resume },
];

const socialLinks = [
  { label: "GitHub", href: CONTACTS.github },
  { label: "LinkedIn", href: CONTACTS.linkedin },
  { label: "Email", href: `mailto:${CONTACTS.email}` },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-12 md:py-16">
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-pink-400/30 to-transparent" />
      <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {SITE_CONFIG.name}
            </p>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Full-stack developer building AI-powered applications and modern web experiences
              with a strong focus on thoughtful interfaces and real-world systems.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:justify-self-end">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Explore
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-primary"
                    target={link.label === "Resume" ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Connect
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Designed and built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </Container>
    </footer>
  );
}