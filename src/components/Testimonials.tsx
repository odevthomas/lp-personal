import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ana Silva",
      result: "Perdi 7kg em 3 meses",
      quote: "Nunca pensei que conseguiria, mas o acompanhamento fez toda diferença. Mudou minha vida!",
      avatar: "AS",
      rating: 5,
      time: "3 meses"
    },
    {
      name: "Carlos Santos",
      result: "Ganhou 8kg de massa magra",
      quote: "Método simples e eficaz. Finalmente consegui o corpo que sempre quis ter.",
      avatar: "CS",
      rating: 5,
      time: "4 meses"
    },
    {
      name: "Marina Costa",
      result: "Reduziu 15cm na cintura",
      quote: "Profissional incrível! Me ajudou não só com treino, mas mudou toda minha mentalidade.",
      avatar: "MC",
      rating: 5,
      time: "5 meses"
    },
    {
      name: "Roberto Lima",
      result: "Eliminou 12kg",
      quote: "Achei que era impossível na minha idade, mas provei que não existe idade para se cuidar.",
      avatar: "RL",
      rating: 5,
      time: "6 meses"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Histórias de{" "}
            <span className="gradient-text">transformação</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pessoas reais que alcançaram resultados reais
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 card-hover">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-primary opacity-20" />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonial.avatar}
                      </div>
                      
                      {/* Info */}
                      <div>
                        <div className="font-bold text-foreground text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-primary font-semibold">
                          {testimonial.result}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Em apenas {testimonial.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;