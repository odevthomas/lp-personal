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
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      time: "3 meses"
    },
    {
      name: "Carlos Santos",
      result: "Ganhou 8kg de massa magra",
      quote: "Método simples e eficaz. Finalmente consegui o corpo que sempre quis ter.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      time: "4 meses"
    },
    {
      name: "Marina Costa",
      result: "Reduziu 15cm na cintura",
      quote: "Profissional incrível! Me ajudou não só com treino, mas mudou toda minha mentalidade.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      time: "5 meses"
    },
    {
      name: "Roberto Lima",
      result: "Eliminou 12kg",
      quote: "Achei que era impossível na minha idade, mas provei que não existe idade para se cuidar.",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      time: "6 meses"
    }
  ];

  // Troca automática de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const bgImage = "/src/assets/bg-depoimentos.png"; // Exemplo de fundo

  return (
    <section
      className="section-padding relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Histórias de <span className="gradient-text">transformação</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Pessoas reais que alcançaram resultados reais
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-8 md:p-12 flex flex-col gap-8"
                >
                  {/* Card de depoimento */}
                  <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 flex flex-col justify-between text-white">
                    <div>
                      <Quote className="w-12 h-12 text-red-500 opacity-40 mb-4" />
                      <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                      />
                      <div>
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="font-semibold text-red-500">{testimonial.result}</div>
                        <div className="text-sm">Em apenas {testimonial.time}</div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-red-500 w-8" : "bg-white/40 hover:bg-white/60"
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
