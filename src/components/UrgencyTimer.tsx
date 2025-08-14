import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  AlarmClock,
  ShieldCheck,
  Headphones,
  Users,
} from "lucide-react";
import bgImage from "@/assets/cta.png"; // Substitua pelo caminho correto

const UrgencyTimer = () => {
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
    <section
      className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay escurecido com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>

      {/* Pattern decorativo opcional */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      {/* Conteúdo */}
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Oferta Limitada</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in">
            Vagas limitadas para{" "}
            <span className="text-primary-glow">Fevereiro</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90">
            Apenas 3 atendimentos disponíveis por semana
          </p>

          {/* Timer */}
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
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features com ícones novos */}
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
                <p className="text-sm text-primary-foreground/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            onClick={handleUrgencyClick}
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 font-bold text-lg md:text-xl px-8 py-4 animate-bounce-gentle"
          >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
            </svg>
            Garantir minha vaga agora
          </Button>

          {/* Social Proof */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-primary-foreground/70">
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
      </div>
    </section>
  );
};

export default UrgencyTimer;
