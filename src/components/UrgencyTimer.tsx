import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  AlarmClock,
  ShieldCheck,
  Headphones,
  Users,
  MessageCircle,
} from "lucide-react";
import bgImage from "@/assets/cta.png";

const UrgencyTimer = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleUrgencyClick = () => {
    window.open(
      "https://wa.me/5511999999?text=Quero+garantir+minha+vaga+agora",
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center justify-center px-4">
      {/* Efeito parallax na imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-linear"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `translateY(${offsetY * 0.3}px)`,
          willChange: "transform",
        }}
      />

      {/* Gradiente escurecido */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 z-0" />

      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      {/* Conteúdo principal */}
      <div className="container-max relative z-10 text-center max-w-4xl py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Oferta Limitada</span>
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
          Vagas limitadas para{" "}
          <span className="text-primary-glow">Fevereiro</span>
        </h2>

        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Apenas 3 atendimentos disponíveis por semana
        </p>

        {/* Temporizador */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          {[
            { label: "Dias", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Seg", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 animate-pulse-glow"
            >
              <div className="text-2xl md:text-4xl font-bold font-display">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: AlarmClock,
              title: "Acompanhamento 24/7",
              description: "Suporte constante via WhatsApp",
            },
            {
              icon: ShieldCheck,
              title: "Grupo Exclusivo",
              description: "Acesso à comunidade VIP",
            },
            {
              icon: Headphones,
              title: "Consultas Ilimitadas",
              description: "Tire dúvidas quando quiser",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <feature.icon className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <Button
          onClick={handleUrgencyClick}
          size="lg"
          className="bg-white text-secondary hover:bg-white/90 font-bold text-lg md:text-xl px-8 py-4 animate-bounce-gentle"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Garantir minha vaga agora
        </Button>

        {/* Prova social */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">João acabou de se inscrever</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Maria garantiu sua vaga</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Apenas 1 vaga restante</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyTimer;
