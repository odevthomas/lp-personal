import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Send,
  Sparkle
} from "lucide-react";
import bgImage from "@/assets/cta-2.png"; // ajuste conforme necessário

const CallToAction = () => {
  const handleMainCTA = () => {
    window.open(
      "https://wa.me/5511999999999?text=Estou+pronto+para+me+priorizar.+Quero+começar+agora",
      "_blank"
    );
  };

  return (
    <section
      className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0" />

      {/* Background patterns opcionais */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Emoção */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <Sparkle className="w-5 h-5 text-yellow-300" />
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

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
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
                <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Botão principal */}
          <div className="mb-12">
            <Button
              onClick={handleMainCTA}
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-bold text-xl px-12 py-6 rounded-2xl shadow-glow animate-pulse-glow mb-6"
            >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
              </svg>
              Falar com o profissional
              <ArrowRight className="w-6 h-6 ml-4" />
            </Button>

            <p className="text-sm text-primary-foreground/70">
              👆 Clique para falar comigo agora no WhatsApp
            </p>
          </div>

          {/* Contato alternativo */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Phone className="w-8 h-8 text-primary-glow mx-auto mb-4" />
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
              <Send className="w-8 h-8 text-green-400 mx-auto mb-4" />
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

          {/* Garantias */}
          <div className="space-y-6">
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

            {/* Mensagem final */}
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
''