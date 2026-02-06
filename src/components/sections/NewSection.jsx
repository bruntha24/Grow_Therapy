import { Section, SectionContent, SectionImage } from "../Section";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import zenCalm from "@/assets/zen-calm.jpg";

export default function NewSection() {
  return (
    <Section layout="left" variant="sage" className="min-h-[55vh]">
      <SectionImage 
        src={zenCalm} 
        alt="Zen and Calm" 
        className="w-full lg:w-[45%] h-[50vh] lg:h-auto lg:min-h-[55vh]"
      />
      <SectionContent className="w-full lg:w-[55%] py-12 lg:py-16">
        <div className="max-w-lg animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          “A Gentle Path to Understanding Yourself
Explore your thoughts, feelings, and patterns with care and curiosity.”
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Therapy is a space to slow down and connect with yourself. It’s about noticing your thoughts,
             emotions, and patterns without judgment, and creating the space to explore what truly matters to you.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Through gentle guidance and evidence-based practices, you can begin to understand your experiences more deeply,
             build resilience, and cultivate a greater sense of calm, clarity, and balance in your daily life.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/about">Discover My Approach</Link>
          </Button>
        </div>
      </SectionContent>
    </Section>
  );
}
