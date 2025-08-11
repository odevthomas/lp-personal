import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import transformationImage from "@/assets/transformation-results.jpg";

const ResultsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const results = [
    {
      beforeImage: transformationImage,
      afterImage: transformationImage,
      name: "João M.",
      timeframe: "90 dias",
      achievement: "-15kg e +20% massa magra",
      description: "Transformação completa com foco em definição muscular"
    },
    {
      beforeImage: transformationImage,
      afterImage: transformationImage,
      name: "Paula R.",
      timeframe: "120 dias",
      achievement: "-22kg",
      description: "Mudança de vida através de hábitos saudáveis"
    },
    {
      beforeImage: transformationImage,
      afterImage: transformationImage,
      name: "André S.",
      timeframe: "75 dias",
      achievement: "+12kg massa magra",
      description: "Ganho de força e volume muscular impressionante"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % results.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [results.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  const handleCTAClick = () => {
    window.open("https://wa.me/5511999999999?text=Quero+meu+antes+e+depois+também", "_blank");
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Resultados{" "}
            <span className="gradient-text">comprovados</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Transformações reais de clientes reais
          </p>
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/50">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Antes & Depois Autênticos</span>
          </div>
        </div>

        {/* Results Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Before/After Images */}
                      <div className="space-y-6">
                        <div className="relative">
                          <img 
                            src={result.beforeImage} 
                            alt="Antes da transformação"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            Antes
                          </div>
                        </div>
                        
                        <div className="relative">
                          <img 
                            src={result.afterImage} 
                            alt="Depois da transformação"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            Depois
                          </div>
                        </div>
                      </div>

                      {/* Results Info */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {result.name}
                          </h3>
                          <div className="text-primary text-xl font-semibold mb-4">
                            {result.achievement}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {result.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-primary rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-primary-foreground">
                              {result.timeframe.split(' ')[0]}
                            </div>
                            <div className="text-sm text-primary-foreground/80">
                              dias
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Tempo de transformação</div>
                            <div className="text-lg font-semibold text-foreground">Resultados consistentes</div>
                          </div>
                        </div>

                        {/* Progress Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border/50">
                            <div className="text-lg font-bold text-primary">100%</div>
                            <div className="text-sm text-muted-foreground">Dedicação</div>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border/50">
                            <div className="text-lg font-bold text-primary">0</div>
                            <div className="text-sm text-muted-foreground">Desistências</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            onClick={handleCTAClick}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Quero meu antes e depois também
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;