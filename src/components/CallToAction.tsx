import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MessagesSquare,
  ArrowRight,
  Phone,
  Send,
  Sparkle,
} from "lucide-react";
import bgImage from "@/assets/cta-2.png"; // imagem de fundo

const CallToAction = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMainCTA = () => {
    window.open(
      "https://wa.me/5511999999999?text=Estou+pronto+para+me+priorizar.+Quero+começar+agora",
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-white">
      {/* Imagem de fundo com efeito parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-linear"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `translateY(${offsetY * 0.3}px)`,
          willChange: "transform",
        }}
      />

      {/* Gradiente escuro por cima */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Padrões de luz opcionais */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-6xl py-20 text-center">
        {/* Badge + Título */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
            <Sparkle className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">Sua Hora é Agora</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight drop-shadow-lg">
            Você está pronto para{" "}
            <span className="text-primary-glow">se priorizar?</span>
          </h2>

          <p className="text-xl md:text-2xl mt-4 text-white/90 font-medium drop-shadow-md">
            Não deixe pra depois. Comece agora.
          </p>

          <p className="text-lg text-white/80 mt-2 max-w-2xl mx-auto drop-shadow-sm">
            Cada dia que passa é uma oportunidade perdida de estar mais perto do seu melhor eu. 
            Pare de adiar sua transformação.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12 max-w-2xl mx-auto">
          {[
            { number: "500+", label: "Vidas transformadas" },
            { number: "98%", label: "Taxa de sucesso" },
            { number: "90", label: "Dias para resultados" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2 drop-shadow">
                {stat.number}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Botão principal */}
        <div className="mb-12">
          <Button
            onClick={handleMainCTA}
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-bold text-xl px-12 py-6 rounded-2xl shadow-glow animate-pulse-glow mb-4"
          >
            <MessagesSquare className="w-6 h-6 mr-3" />
            Falar com o profissional
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>

          <p className="text-sm text-white/70">
            👆 Clique para falar comigo agora no WhatsApp
          </p>
        </div>

        {/* Contatos alternativos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Phone className="w-8 h-8 text-primary-glow mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Ligação Direta</h3>
            <p className="text-sm text-white/80 mb-4">
              Prefere conversar por telefone?
            </p>
            <button
              onClick={() => window.open("tel:+5511999999999", "_self")}
              className="text-primary-glow font-semibold hover:underline"
            >
              (11) 99999-9999
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Send className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-sm text-white/80 mb-4">
              Resposta rápida e direta
            </p>
            <button
              onClick={handleMainCTA}
              className="text-green-400 font-semibold hover:underline"
            >
              Iniciar conversa
            </button>
          </div>
        </div>

        {/* Garantias + frase final */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-white/80">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Primeira consulta sem compromisso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Plano 100% personalizado</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Suporte constante</span>
            </div>
          </div>

          <div className="text-center">
            <p className="italic text-white/60 drop-shadow">
              "O melhor momento para plantar uma árvore foi há 20 anos. 
              O segundo melhor momento é agora."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
