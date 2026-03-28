import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsOverview } from "@/components/home/skills-overview";
import { CurrentlyBuilding } from "@/components/home/currently-building";
import { CTASection } from "@/components/home/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Chioma Emmanuella is a full-stack developer building AI-powered applications and modern web experiences.",
    alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <FeaturedProjects />
      <SkillsOverview />
      <CurrentlyBuilding />
      <CTASection />
    </div>
  );
}