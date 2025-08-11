import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall, ArrowRight, Heart } from "lucide-react";

const CallToAction = () => {
  const handleMainCTA = () => {
    window.open("https://wa.me/5511999999999?text=Estou+pronto+para+me+priorizar.+Quero+começar+agora", "_blank");
  };

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Emotional Hook */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <Heart className="w-5 h-5 text-red-300" />
              <span className="text-sm font-medium">Sua Hora é Agora</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Você está pronto para{" "}
              <span className="text-primary-glow">se priorizar?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-medium">
              Não deixe pra depois. Comece agora.
            </p>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Cada dia que passa é uma oportunidade perdida de estar mais perto do seu melhor eu. 
              Pare de adiar sua transformação.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Vidas transformadas" },
              { number: "98%", label: "Taxa de sucesso" },
              { number: "90", label: "Dias para resultados" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="mb-12">
            <Button 
              onClick={handleMainCTA}
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-bold text-xl px-12 py-6 rounded-2xl shadow-glow animate-pulse-glow mb-6"
            >
              <MessageCircle className="w-7 h-7 mr-4" />
              Falar com o profissional
              <ArrowRight className="w-6 h-6 ml-4" />
            </Button>
            
            <p className="text-sm text-primary-foreground/70">
              👆 Clique para falar comigo agora no WhatsApp
            </p>
          </div>

          {/* Alternative Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <PhoneCall className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Ligação Direta</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
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
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
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

          {/* Trust Indicators */}
          <div className="space-y-6">
            {/* Guarantees */}
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Primeira consulta sem compromisso</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Plano 100% personalizado</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Suporte constante</span>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center">
              <p className="text-primary-foreground/80 italic">
                "O melhor momento para plantar uma árvore foi há 20 anos. 
                O segundo melhor momento é agora."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;