import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-background",
      cream: "bg-cream-dark",
      sage: "bg-sage-light",
      accent: "bg-accent",
    },
    layout: {
      left: "flex flex-col lg:flex-row",
      right: "flex flex-col lg:flex-row-reverse",
      center: "flex flex-col items-center",
    },
  },
  defaultVariants: {
    variant: "default",
    layout: "left",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, variant, layout, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        sectionVariants({ variant, layout }),
        "relative", // allows image to attach to bottom
        className
      )}
    >
      {children}
    </section>
  );
};

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContent = ({ children, className }: SectionContentProps) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center", // vertically center content
        "px-6 lg:px-12", // default horizontal padding; overrideable
        className
      )}
    >
      {children}
    </div>
  );
};

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string; // optional height, e.g., "h-[17cm]"
}

export const SectionImage = ({ src, alt, className, height }: SectionImageProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden self-end", // attach to bottom
        height, // height can be passed like "h-[17cm]"
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
