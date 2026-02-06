import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Section, SectionContent, SectionImage } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import office1 from "@/assets/office1.jpeg"; // new image
import office2 from "@/assets/office2.jpeg"; // new image
import therapyRoom from "@/assets/therapy-room.jpg";
import readingNook from "@/assets/reading-nook.jpg";
import conversation from "@/assets/conversation.jpg";
import therapRoom from "@/assets/therapy-room.jpeg";
import videoTherapy from "@/assets/video-therapy.mp4";
const MyOffice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Video Placeholder */}
      <Section layout="left" className="pt-16 min-h-[70vh]">
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          {/* Video placeholder */}
          <div className="relative w-full h-[35vh] lg:h-[50vh] bg-sage-light rounded-lg overflow-hidden shadow-lg">
  <video
    className="w-full h-full object-cover"
    poster={office1} // fallback image before video plays
    controls
    muted
    loop
    autoPlay
  >
    <source src={videoTherapy} type="video/mp4" />
    {/* Fallback for browsers that don't support video */}
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 pointer-events-none">
    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
      <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</div>

        </div>
        <SectionContent className="w-full lg:w-1/2 py-12 lg:py-0">
          <div className="max-w-lg animate-fade-in-up">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              My Office
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              A Sanctuary for Healing
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Step into a space designed with your comfort and wellbeing in mind. 
              My office is more than just a room—it's a sanctuary where you can 
              feel safe to explore, heal, and grow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located in a quiet, peaceful neighborhood with easy parking and 
              accessibility, the space features natural light, calming colors, 
              and comfortable seating to help you feel at ease from the moment you arrive.
            </p>
          </div>
        </SectionContent>
      </Section>

      {/* Office Gallery Section */}
      <Section layout="center" variant="cream" className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Office Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of the space where transformation happens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First two images replaced */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={office1} alt="Office 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={office2} alt="Office 2" className="w-full h-full object-cover" />
            </div>

            {/* Remaining images */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={readingNook} alt="Reading Corner" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <img src={conversation} alt="Consultation Area" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={therapyRoom} alt="Therapy Room" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={therapRoom} alt="Therapy Room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* Amenities Section */}
      <Section layout="center" className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Office Amenities
            </h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
  {/* Private Entrance */}
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <h3 className="font-serif text-lg font-semibold mb-2">Private Entrance</h3>
    <p className="text-muted-foreground text-sm">Discrete access for your privacy and comfort.</p>
  </div>

  {/* Calming Atmosphere */}
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </div>
    <h3 className="font-serif text-lg font-semibold mb-2">Calming Atmosphere</h3>
    <p className="text-muted-foreground text-sm">Thoughtfully designed for relaxation and peace.</p>
  </div>

  {/* Flexible Hours */}
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <h3 className="font-serif text-lg font-semibold mb-2">Flexible Hours</h3>
    <p className="text-muted-foreground text-sm">Evening and weekend appointments available.</p>
  </div>

  {/* Easy Parking */}
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <h3 className="font-serif text-lg font-semibold mb-2">Easy Parking</h3>
    <p className="text-muted-foreground text-sm">Free parking right outside the building.</p>
  </div>
</div>

        </div>
      </Section>

      {/* Location Section */}
      <Section layout="center" variant="sage" className="py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Find Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            123 Serenity Lane, Suite 200<br />
            Mindful City, MC 12345
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Located in the heart of downtown, with easy access to public transportation.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Directions</Link>
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default MyOffice;
