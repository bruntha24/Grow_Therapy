import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Section, SectionContent } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import therapyRoom from "@/assets/calming.jpg";

const Bookings = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const sessionTypes = [
    "Initial Consultation (60 min)",
    "Individual Therapy (50 min)",
    "Couples Counseling (80 min)",
    "Follow-up Session (50 min)",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date) {
      toast({
        title: "Please select a date",
        description: "Choose your preferred appointment date from the calendar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "5056f6fe-c8df-41da-a2ba-1404ef7db393");
    formData.append("preferredDate", date.toISOString());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "Booking Request Sent!",
          description: "We will contact you within 24–48 hours.",
        });
        (e.target as HTMLFormElement).reset();
        setDate(undefined);
      } else {
        toast({
          title: "Error submitting form",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission failed",
        description: "There was an error sending your booking request.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Section layout="center" className="pt-24 pb-12">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Schedule Your Session
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Book an Appointment
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Take the first step toward your wellbeing. Select your preferred date 
            and time below, and we'll confirm your appointment within 24–48 hours.
          </p>
        </div>
      </Section>

      {/* Booking Form Section */}
      <Section layout="left" className="pb-16 min-h-[70vh]">
        <SectionContent className="w-full lg:w-[55%] py-8 lg:py-0">

          {/* SUCCESS MESSAGE */}
          {isSuccess && (
            <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
              <p className="font-medium">✅ Booking sent successfully!</p>
              <p className="text-sm mt-1">
                We will contact you within 24–48 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" required placeholder="Your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" required placeholder="Your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="(123) 456-7890" />
            </div>

            <div className="space-y-2">
              <Label>Session Type *</Label>
              <Select name="sessionType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select session type" />
                </SelectTrigger>
                <SelectContent>
                  {sessionTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Time *</Label>
              <Select name="time" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Any specific concerns or questions you'd like to share before our session..."
                className="min-h-[100px] resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request Appointment"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              * Required fields. Your information is kept strictly confidential.
            </p>
          </form>
        </SectionContent>

        {/* Calendar Section */}
        <div className="w-full lg:w-[45%] px-6 lg:px-12 py-8 lg:py-0 flex flex-col items-center">
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4 text-center">
              Select Your Preferred Date
            </h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) =>
                date < new Date() || date.getDay() === 0 ||
                date > new Date(new Date().setMonth(new Date().getMonth() + 2))
              }
              className="rounded-md border"
            />
            {date && (
              <p className="mt-4 text-center text-primary font-medium">
                Selected: {date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </p>
            )}
          </div>

          <div className="bg-sage-light rounded-lg p-6 w-full max-w-sm">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Session Rates
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Initial Consultation</span>
                <span className="font-medium text-foreground">$180</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Individual Therapy</span>
                <span className="font-medium text-foreground">$150</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Couples Counseling</span>
                <span className="font-medium text-foreground">$200</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Insurance accepted. Sliding scale available for qualifying clients.
            </p>
          </div>
        </div>
      </Section>

      {/* Image Section */}
      <Section layout="center" variant="cream" className="py-0">
        <div className="w-full h-64 overflow-hidden">
          <img src={therapyRoom} alt="Therapy Room" className="w-full h-full object-cover" />
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Bookings;
