import { Target, Clock, CheckCircle } from "lucide-react";
import professionalImage from "@/assets/nutrition-consultation.jpg";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Personalização",
      description: "Plano feito exclusivamente para você"
    },
    {
      icon: Clock,
      title: "Acompanhamento",
      description: "Suporte direto e constante"
    },
    {
      icon: CheckCircle,
      title: "Resultado real",
      description: "Método comprovado que funciona"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Um método feito pra você.{" "}
                <span className="gradient-text">Sem enrolação.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "Aqui você tem atenção real, avaliação de verdade e um plano que respeita 
                sua rotina e sua meta. Nada de fórmula mágica — resultado vem com método 
                e acompanhamento."
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
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
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