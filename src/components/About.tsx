import { Target, Clock3, ShieldCheck } from "lucide-react";
import professionalImage from "@/assets/about-2.png";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Plano sob medida",
      description:
        "Cada detalhe do seu programa é pensado para se encaixar na sua rotina, seu nível e seu objetivo."
    },
    {
      icon: Clock3,
      title: "Acompanhamento diário",
      description:
        "Você nunca estará sozinho. Acompanhamento real via WhatsApp, com ajustes semanais e suporte contínuo."
    },
    {
      icon: ShieldCheck,
      title: "Resultados garantidos",
      description:
        "Com método validado por dezenas de alunos, você alcança resultado de forma saudável e duradoura."
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-10 animate-slide-up">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Um método feito pra você.{" "}
                <span className="gradient-text">Sem enrolação.</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Chega de seguir treinos genéricos ou depender da motivação do dia. 
                Aqui, o plano é feito sob medida, com base na sua realidade.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Juntos, vamos identificar seus desafios e montar um plano prático, 
                eficiente e sustentável. A fórmula é simples: consistência, orientação e suporte.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 card-hover"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={professionalImage}
                alt="Profissional atendendo cliente"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
