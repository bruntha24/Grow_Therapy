import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Section, SectionContent } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Web3Forms access key
    formData.append("access_key", "5056f6fe-c8df-41da-a2ba-1404ef7db393");

    // Optional fields
    formData.append("subject", "New Contact Form Message");
    formData.append("from_name", "Website Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully 🎉",
          description:
            "Thank you for reaching out. I’ll get back to you within 24–48 hours.",
        });

        form.reset();
      } else {
        toast({
          title: "Something went wrong 😕",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error 🚫",
        description: "Unable to send message. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Section layout="left" className="pt-24 pb-16 min-h-[80vh]">
        {/* LEFT – FORM */}
        <SectionContent className="w-full lg:w-1/2 py-12">
          <div className="max-w-lg">
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              Get in Touch
            </span>

            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Contact Me
            </h1>

            <p className="text-muted-foreground mb-8">
              Have questions or want to learn more? Fill out the form below and
              I’ll respond within 24–48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Your first name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me a bit about what brings you here..."
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </SectionContent>

        {/* RIGHT – MAP & INFO */}
        {/* Map / Info Section */}
<div className="w-full lg:w-1/2 px-6 lg:px-12 py-12 lg:py-0 flex flex-col justify-center">
  
  {/* Office Location Card */}
  <div className="bg-sage-light rounded-lg p-8 mb-8">
    <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
      Office Location
    </h3>

    {/* Map */}
    <div className="w-full h-48 bg-muted rounded-lg mb-6 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977721434!2d-122.4194154!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      />
    </div>

    {/* Contact Info */}
    <div className="space-y-4">
      
      {/* Address */}
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-primary mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <div>
          <p className="font-medium text-foreground">Address</p>
          <p className="text-muted-foreground text-sm">
            123 Serenity Lane, Suite 200
            <br />
            Mindful City, MC 12345
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-primary mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        <div>
          <p className="font-medium text-foreground">Phone</p>
          <a
            href="tel:+1234567890"
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            (123) 456-7890
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 text-primary mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        <div>
          <p className="font-medium text-foreground">Email</p>
          <a
            href="mailto:hello@drmayareynolds.com"
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            hello@drmayareynolds.com
          </a>
        </div>
      </div>

    </div>
  </div>

  {/* Office Hours */}
  <div className="bg-card rounded-lg p-8 border border-border">
    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
      Office Hours
    </h3>

    <ul className="space-y-2 text-muted-foreground">
      <li className="flex justify-between">
        <span>Monday – Thursday</span>
        <span>9:00 AM – 7:00 PM</span>
      </li>
      <li className="flex justify-between">
        <span>Friday</span>
        <span>9:00 AM – 5:00 PM</span>
      </li>
      <li className="flex justify-between">
        <span>Saturday</span>
        <span>10:00 AM – 2:00 PM</span>
      </li>
      <li className="flex justify-between">
        <span>Sunday</span>
        <span>Closed</span>
      </li>
    </ul>
  </div>

</div>

      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
