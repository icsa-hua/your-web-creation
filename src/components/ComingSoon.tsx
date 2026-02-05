import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import babiMascot from "@/assets/babi-mascot.png";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Ευχαριστούμε! 🎉",
        description: "Θα σε ενημερώσουμε όταν η εφαρμογή είναι έτοιμη.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold">
          Το <span className="text-secondary">BUY AI</span> έρχεται σύντομα
        </h2>
        
        <p className="text-lg opacity-90">
          Η εφαρμογή που κάνει τις αγορές σου απλές και ευχάριστες
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <div className="relative flex-1 w-full">
            <img 
              src={babiMascot} 
              alt="Babi" 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 object-contain"
            />
            <Input
              type="email"
              placeholder="Το email σου"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-14 py-6 rounded-2xl bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
              required
            />
          </div>
          <Button 
            type="submit"
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display px-6 py-6 rounded-2xl whitespace-nowrap"
          >
            <Bell className="mr-2 h-5 w-5" />
            Ενημέρωσέ με όταν η εφαρμογή είναι έτοιμη
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ComingSoon;
