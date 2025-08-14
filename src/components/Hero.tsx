import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell, Clock, CheckCircle, UserCheck } from "lucide-react";
import heroImage from "@/assets/hero-2.png";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511999999?text=Quero+meu+plano+agora",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Imagem de fundo com parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offsetY * 0.3}px)`,
          willChange: "transform, opacity",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 text-left text-white">
        <div className="w-full space-y-6 animate-fade-in">

          {/* Badge com ícone */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Dumbbell className="w-5 h-5" />
            <span className="text-sm font-medium">TransformaFit</span>
          </div>

          {/* Headline quebrada para ficar ao lado esquerdo do usuário */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight drop-shadow-md max-w-xl">
            Transforme seu corpo <br />
            <span className="gradient-text">em 90 dias</span>
          </h1>

          {/* Subtítulo curto */}
          <p className="text-xl md:text-2xl font-medium max-w-xl drop-shadow-md">
            Treinamento 100% personalizado com foco em resultados reais.
          </p>

          {/* Lista de benefícios com ícones */}
          <ul className="space-y-4 max-w-xl mt-6">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Avaliação física detalhada
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-green-400" />
              Treinos atualizados semanalmente
            </li>
            <li className="flex items-center gap-3">
              <Dumbbell className="w-5 h-5 text-green-400" />
              Plano alimentar adaptado
            </li>
            <li className="flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-green-400" />
              Suporte direto via WhatsApp
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Resultados visíveis em poucas semanas
            </li>
          </ul>

          {/* CTA direto */}
          <div className="pt-6">
            <Button
              onClick={handleWhatsAppClick}
              className="hero-button text-lg md:text-xl font-bold animate-pulse-glow"
              size="lg"
            >
              Quero meu plano agora
            </Button>
          </div>

          {/* Indicadores de confiança simplificados */}
          <div className="flex flex-wrap items-center gap-6 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">500+ transformações</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Acompanhamento real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Resultados garantidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
