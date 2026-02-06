import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
