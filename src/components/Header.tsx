import babiMascot from "@/assets/babi-mascot.png";

const Header = () => {
  return (
    <header className="py-4 px-6 flex items-center justify-between bg-card shadow-sm">
      <div className="flex items-center gap-3">
        <img 
          src={babiMascot} 
          alt="BUY AI Logo" 
          className="w-24 h-24 object-contain"
        />
        <span className="font-display text-xl font-bold text-foreground">
          BUY <span className="text-primary">AI</span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground hidden sm:block">
        Ο ψηφιακός φωνητικός βοηθός σου για αγορές στο supermarket
      </p>
    </header>
  );
};

export default Header;
