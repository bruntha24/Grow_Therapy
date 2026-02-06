import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroTherapist from "@/assets/Dr-Maya.png";
import therapyRoom from "@/assets/therap.jpeg";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
      <section
        className="w-full flex flex-col lg:flex-row bg-background gap-x-60"
        style={{ height: "1130px" }}
      >
        {/* Image on the left, bottom-aligned */}
        <div
          className="flex-shrink-0 lg:w-[45%] w-full flex self-end"
          style={{ marginTop: "30px", marginLeft: "50px" }}
        >
              <img
  src={heroTherapist}
  alt="Dr. Maya Reynolds"
  className="h-[680px] w-[360px] md:w-[380px] lg:w-[340px] object-cover"

 />



        </div>

        {/* Text on the right */}
        <div className="lg:w-[45%] w-full flex flex-col justify-center px-6 lg:pl-16 lg:pr-12">
          <div className="max-w-xl animate-fade-in-up text-left px-4 lg:px-0">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Licensed Clinical Psychologist
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Finding Peace Within, Together
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Welcome to a safe space where healing begins. I'm Dr. Maya Reynolds,
              and I'm here to guide you on your journey toward emotional wellness,
              self-discovery, and lasting peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/bookings">Book a Session</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cream-dark overflow-hidden">
  <div className="flex flex-col lg:flex-row-reverse w-full h-[120px] md:h-[150px] lg:h-[180px]">
    {/* IMAGE */}
    <div className="w-full lg:w-1/2 h-[120px] md:h-[150px] lg:h-[180px] overflow-hidden">
      <img
        src={therapyRoom}
        alt="Therapy Room"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="w-full lg:w-1/2 flex items-center justify-center h-[120px] md:h-[150px] lg:h-[180px]">
      <div className="text-center max-w-lg px-6 lg:px-10 animate-fade-in-up">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          A Compassionate Approach to Mental Wellness
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-2 text-sm md:text-base">
          Mental wellness isn’t about fixing yourself—it’s about understanding and caring for your mind and body. 
          I take a warm, collaborative approach, 
          combining evidence-based tools like CBT, EMDR, and mindfulness with space for reflection and healing.
        </p>

        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
           Whether you’re managing anxiety, trauma, or burnout, therapy becomes a supportive space 
           to slow down, notice your patterns, and build sustainable ways to feel calmer, more grounded, and connected to yourself.
            Sessions—both in-person in Santa Monica or via secure telehealth—are designed to help you feel seen,
             understood, and empowered on your journey toward lasting well-being.
        </p>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}
