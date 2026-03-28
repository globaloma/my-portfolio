"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-foreground">
            {SITE_CONFIG.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-pink-500/20 hover:bg-primary/90"
            >
              <Link href="/contact">Let’s Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="border-l border-border bg-background/95 backdrop-blur-xl">
                <div className="mt-10 flex flex-col gap-6">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-base font-medium transition ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <Button
                    asChild
                    className="mt-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-pink-500/20 hover:bg-primary/90"
                  >
                    <Link href="/contact">Let’s Talk</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}