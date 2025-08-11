import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-2.png";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999?text=Quero+meu+plano+agora", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Imagem de fundo com efeito parallax e opacidade reduzida */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offsetY * 0.3}px)`,
          opacity: 0.6,
          willChange: "transform, opacity",
        }}
      ></div>

      {/* Gradiente escuro para aumentar o contraste e legibilidade */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 text-left text-white">
        <div className="w-full space-y-8 animate-fade-in">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Dumbbell className="w-5 h-5" />
            <span className="text-sm font-medium">PowerService</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight drop-shadow-md">
            Transforme seu corpo 
            <br />
            <span className="gradient-text">em 90 dias</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl font-medium max-w-3xl drop-shadow-md">
            Treinamento 100% personalizado com foco em resultados reais.
          </p>

          {/* Texto adicional */}
          <p className="text-lg max-w-3xl drop-shadow-md">
            Você não está sozinho(a) nessa jornada. Nossa equipe vai acompanhar cada etapa do seu progresso,
            com ajustes semanais, suporte completo e motivação contínua para garantir que você alcance os resultados que sempre sonhou.
          </p>

          {/* Bloco motivacional */}
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 max-w-3xl">
            <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">Chega de promessas vazias!</h3>
            <p className="text-md drop-shadow-md">
              Agora é a hora de investir em você. Com nosso plano, você ganha mais disposição,
              autoestima e um corpo que reflete o seu esforço e dedicação.
            </p>
          </div>

          {/* Lista de vantagens */}
          <ul className="list-disc pl-5 space-y-2 text-md max-w-3xl drop-shadow-md">
            <li>Avaliação física detalhada</li>
            <li>Treinos atualizados semanalmente</li>
            <li>Plano alimentar adaptado à sua rotina</li>
            <li>Suporte direto via WhatsApp</li>
            <li>Resultados visíveis em poucas semanas</li>
          </ul>

          {/* Botão CTA */}
          <div className="pt-8">
            <Button
              onClick={handleWhatsAppClick}
              className="hero-button text-lg md:text-xl font-bold animate-pulse-glow"
              size="lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
              </svg>
              Quero meu plano agora
            </Button>
          </div>

          {/* Indicadores de confiança */}
          <div className="flex flex-wrap items-center gap-8 pt-12 text-white/80">
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
    </section>
  );
};

export default Hero;
