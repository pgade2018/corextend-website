import { Button } from "@/components/ui/button"; // assuming shadcn/ui or similar
import { CheckCircle2 } from "lucide-react";

interface OfferingProps {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  isReversed?: boolean; // true = image on right, text on left
}

export function OfferingSection({
  title,
  description,
  bullets,
  imageSrc,
  isReversed = false,
}: OfferingProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
            isReversed ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className={`order-1 ${isReversed ? "md:order-2" : "md:order-1"}`}>
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>

          {/* Text content */}
          <div className={`order-2 ${isReversed ? "md:order-1" : "md:order-2"} space-y-6`}>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
