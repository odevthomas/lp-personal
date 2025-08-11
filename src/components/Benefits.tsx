import { ClipboardCheck, Apple, Heart, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: ClipboardCheck,
      title: "Plano Alimentar Exclusivo",
      description: "Construído com base no seu tipo físico, objetivo e rotina diária"
    },
    {
      icon: Apple,
      title: "Receitas Personalizadas",
      description: "Cardápio saboroso e variado que se adapta ao seu paladar"
    },
    {
      icon: Heart,
      title: "Treino Inteligente",
      description: "Exercícios eficientes focados no seu objetivo específico"
    },
    {
      icon: Zap,
      title: "Resultados Acelerados",
      description: "Método otimizado para você ver mudanças já nas primeiras semanas"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            O que você{" "}
            <span className="gradient-text">ganha</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada detalhe pensado para maximizar seus resultados
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3 border border-border/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
            </div>
            <span className="text-sm font-medium text-foreground">
              Junte-se a mais de 500 pessoas transformadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;