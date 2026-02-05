import { useEffect, useRef, useState } from "react";
import masco2 from "@/assets/mascot-2.png";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/babi_intro.mp3");
    audio.preload = "auto";
    audioRef.current = audio;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0; // σταματά και γυρνά στην αρχή
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio play failed:", err);
      }
    }
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-accent/50 to-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Γεια σου! Είμαι ο <span className="text-primary">Babi</span> από το{" "}
              <span className="text-secondary">BUY AI</span>
            </h1>

            <div className="space-y-3 text-muted-foreground text-lg leading-relaxed">
              <p>
                Αν οι αγορές στο σουπερμάρκετ ή οι εφαρμογές με πολλά βήματα 
                σε κουράζουν, είμαι εδώ για σένα.
              </p>
              <p>
                Μαζί μιλάμε και φτιάχνουμε το καλάθι προϊόντων που σου ταιριάζει.
              </p>
              <p className="font-medium text-foreground">
                Για να εξοικονομείς χρόνο, χρήματα και να ψωνίζεις χωρίς άγχος.
              </p>
            </div>
          </div>
          
          <Button
            onClick={toggleAudio}
            size="lg"
            className={`bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 rounded-2xl shadow-glow transition-all duration-300 ${
              isPlaying ? "animate-none" : "animate-pulse-glow"
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="mr-2 h-5 w-5" />
                Σταμάτα τον Babi
              </>
            ) : (
              <>
                <Volume2 className="mr-2 h-5 w-5" />
                Άκου τον Babi να σου μιλάει
              </>
            )}
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={masco2}
            alt="Babi - Ο φωνητικός βοηθός σου"
            className="w-full max-w-md animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
