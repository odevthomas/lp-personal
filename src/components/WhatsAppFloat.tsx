import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Animate button every 10 seconds
    const animationTimer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(animationTimer);
    };
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá!+Gostaria+de+saber+mais+sobre+o+programa", "_blank");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <button
        onClick={handleClick}
        className={`whatsapp-float group ${isAnimating ? 'animate-bounce-gentle' : ''}`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      </button>

      {/* Tooltip */}
      <div className="fixed bottom-20 right-5 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-card whitespace-nowrap">
          Fale conosco agora!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary"></div>
        </div>
      </div>

      {/* Mobile CTA Bar (appears on mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-green-500 text-white p-4 shadow-lg">
        <button 
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-3 font-bold text-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Começar minha transformação
        </button>
      </div>
    </>
  );
};

export default WhatsAppFloat;