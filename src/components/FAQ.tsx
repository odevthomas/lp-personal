import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo dura o plano?",
      answer: "O plano básico tem duração de 3 meses, mas oferecemos acompanhamento contínuo. A maioria dos clientes vê resultados significativos já nas primeiras 4-6 semanas e escolhe continuar para maximizar os resultados."
    },
    {
      question: "Tem acompanhamento online?",
      answer: "Sim! Além dos encontros presenciais, você tem acesso direto comigo via WhatsApp para dúvidas, ajustes no treino e motivação. Também fazemos check-ins semanais para acompanhar sua evolução."
    },
    {
      question: "Atende pessoas com lesão?",
      answer: "Sim, trabalho com pessoas que têm limitações físicas ou histórico de lesões. Fazemos uma avaliação completa inicial e adaptamos todos os exercícios para sua condição, sempre respeitando suas limitações e focando na recuperação."
    },
    {
      question: "Preciso de uma dieta muito restritiva?",
      answer: "Não! Acredito em mudanças sustentáveis. Criamos um plano alimentar que se adapta à sua rotina e preferências, sem cortar drasticamente os alimentos que você gosta. O foco é criar hábitos saudáveis duradouros."
    },
    {
      question: "Quanto custa o acompanhamento?",
      answer: "O investimento varia de acordo com o plano escolhido. Oferecemos opções que cabem no seu orçamento. Entre em contato via WhatsApp para conhecer os valores e condições especiais disponíveis."
    },
    {
      question: "E se eu não conseguir seguir o plano?",
      answer: "Entendo que imprevistos acontecem! Por isso, oferecemos flexibilidade para ajustar o plano conforme sua realidade. O importante é não desistir - estou aqui para te apoiar em todos os momentos."
    },
    {
      question: "Posso treinar em casa?",
      answer: "Claro! Adapto os treinos para qualquer ambiente - academia, casa ou ao ar livre. Tenho programas específicos para treino domiciliar com pouco ou nenhum equipamento."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "Na primeira consulta, fazemos uma avaliação completa: histórico de saúde, objetivos, rotina e preferências. Com base nisso, criamos seu plano personalizado. A consulta dura cerca de 60 minutos e pode ser presencial ou online."
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Dúvidas Frequentes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Perguntas que sempre{" "}
            <span className="gradient-text">recebo</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas antes de começar sua transformação
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 py-2 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-foreground font-semibold text-lg hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale diretamente comigo e tire todas as suas dúvidas antes de começar
            </p>
            <button 
              onClick={() => window.open("https://wa.me/5511999999999?text=Tenho+algumas+dúvidas+sobre+o+programa", "_blank")}
              className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
              </svg>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;