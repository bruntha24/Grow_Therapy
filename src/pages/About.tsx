import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Section, SectionContent, SectionImage } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroTherapist from "@/assets/Dr-Maya.png";
import officeInterior from "@/assets/office-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ===== HERO / ABOUT ME ===== */}
      <Section layout="left" className="pt-16 min-h-[70vh]">
       <SectionImage
  src={heroTherapist}
  alt="Dr. Maya Reynolds, PsyD"
  className="w-full lg:w-[45%] h-[60vh] lg:h-auto lg:min-h-[70vh] p-4 lg:p-8"
/>


        <SectionContent className="w-full lg:w-[55%] py-12 lg:py-0">
          <div className="max-w-xl animate-fade-in-up">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>

            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Dr. Maya Reynolds, PsyD
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I’m a licensed clinical psychologist based in Santa Monica, California,
              offering therapy for adults who feel overwhelmed by anxiety, stress,
              or the lingering effects of past experiences. Many of the people I work
              with are thoughtful, high-achieving, and self-aware — yet internally
              feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Clients often come to therapy feeling “functional” on the outside while
              quietly struggling with constant worry, tension in their body, difficulty
              sleeping, or a sense that they’re always bracing for something to go wrong.
              Others are navigating the impact of earlier life experiences that continue
              to affect their relationships, confidence, or sense of safety.
            </p>

            
          </div>
        </SectionContent>
      </Section>

      {/* ===== THERAPEUTIC APPROACH ===== */}
      <Section layout="right" variant="cream" className="min-h-[50vh]">
        <SectionImage
          src={officeInterior}
          alt="Therapy Office Interior"
          className="w-full lg:w-1/2 h-[40vh] lg:h-auto lg:min-h-[50vh] p-4 lg:p-8"
        />

        <SectionContent className="w-full lg:w-1/2 py-12 lg:py-16">
          <div className="max-w-lg animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Therapeutic Approach
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive, while still
              leaving space for reflection, curiosity, and depth. I focus on
              helping clients understand both the emotional and physiological
              sides of what they’re experiencing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I integrate evidence-based methods tailored to your needs, including:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>Cognitive-Behavioral Therapy (CBT)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>EMDR for trauma and anxiety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>Mindfulness-based practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>Body-oriented and nervous-system-focused techniques</span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Trauma work is an important part of my practice. I work with adults
              who have experienced both single-incident trauma and more complex,
              long-standing patterns, always with an emphasis on safety,
              stabilization, and pacing.
            </p>
          </div>
        </SectionContent>
      </Section>

      {/* ===== AREAS OF FOCUS & PRACTICE INFO ===== */}
      <Section layout="center" className="py-16 lg:py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Areas of Focus & Practice Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Areas of Focus
              </h3>
              <ul className="space-y-3 text-muted-foreground text-left">
                <li>• Anxiety & panic</li>
                <li>• Trauma (single-incident & complex)</li>
                <li>• Burnout & chronic stress</li>
                <li>• Perfectionism & high internal pressure</li>
                <li>• Emotional regulation & nervous system support</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Practice Information
              </h3>
              <ul className="space-y-3 text-muted-foreground text-left">
                <li>• In-person sessions in Santa Monica, CA</li>
                <li>• Secure telehealth for California residents</li>
                <li>• Adults only (18+)</li>
                <li>• Calm, private office setting</li>
                <li>• Fictional therapist profile</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section layout="center" variant="sage" className="py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Let’s Begin Your Therapy Journey
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Therapy works best when you feel respected, understood, and actively
            involved in the process. If you’re looking for a therapist who combines
            practical tools with depth-oriented work — and understands the realities
            of living and working in a fast-paced environment — I may be a good fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/bookings">Book a Session</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
