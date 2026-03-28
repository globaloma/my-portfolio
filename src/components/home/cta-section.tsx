"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-pink-soft bg-card/70 px-6 py-12 text-center backdrop-blur md:px-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Let&apos;s Connect
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Open to internships, junior roles, and collaborations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            If you’re looking for someone who cares about building thoughtful,
            real-world software products, I’d love to connect.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-pink-500/20 hover:bg-primary/90"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}