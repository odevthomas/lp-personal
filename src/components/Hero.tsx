import { Button } from "@/components/ui/button";
import { MessageCircle, Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Quero+meu+plano+agora", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 container-max section-padding text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Dumbbell className="w-5 h-5" />
            <span className="text-sm font-medium">PowerService</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Transforme seu corpo 
            <br />
            <span className="gradient-text">em 90 dias</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 max-w-2xl mx-auto">
            Treinamento 100% personalizado com foco em resultados reais.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={handleWhatsAppClick}
              className="hero-button text-lg md:text-xl font-bold animate-pulse-glow"
              size="lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Quero meu plano agora
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">500+ transformações</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Acompanhamento real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Resultados garantidos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;