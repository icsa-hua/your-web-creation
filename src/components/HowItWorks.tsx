import step1Voice from "@/assets/step1-voice.png";
import step2Healthy from "@/assets/step2-healthy.png";
import step3Smart from "@/assets/step3-smart.png";
import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  image: string;
  label: string;
}

const StepCard = ({ step, title, description, image, label }: StepCardProps) => (
  <Card className="bg-card shadow-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0">
    <CardContent className="p-0">
      
      {/* Image + Step badge */}
      <div className="relative pt-2">
        <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-step-badge flex items-center justify-center text-foreground font-bold text-base shadow-md">
          {step}
        </div>

        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-44 object-contain bg-background p-4"
        />
      </div>

      {/* Text content */}
      <div className="p-5 space-y-2">
        <h3 className="font-display font-semibold text-lg text-foreground min-h-[4rem]">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>

        <div className="pt-2">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-medium">
            {label}
          </span>
        </div>
      </div>

    </CardContent>
  </Card>
);

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Μιλάς στο κινητό σου",
      description: "Λες απλά ποιά προϊόντα χρειάζεσαι",
      image: step1Voice,
      label: "Οικονομικό καλάθι",
    },
    {
      step: 2,
      title: "Ο Babi κατανοεί τις ανάγκες σου",
      description: "Και οργανώνει την παραγγελία σου",
      image: step2Healthy,
      label: "Υγιεινό καλάθι",
    },
    {
      step: 3,
      title: "Ο Babi προτείνει έξυπνα καλάθια αγορών",
      description: "Εξοικονομείς χρόνο και χρήματα",
      image: step3Smart,
      label: "Έξυπνο καλάθι",
    },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Πώς λειτουργεί το <span className="text-secondary">BUY AI</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
