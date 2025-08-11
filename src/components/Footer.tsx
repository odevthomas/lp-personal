import { Instagram, MessageCircle, Shield, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text mb-3">
                  PowerService
                </h3>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  Transformando vidas através de métodos personalizados e acompanhamento real. 
                  Seu sucesso é nossa prioridade.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/powerservice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-secondary-foreground">
                Links Úteis
              </h4>
              <nav className="space-y-3">
                <a 
                  href="#sobre" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  Sobre o método
                </a>
                <a 
                  href="#beneficios" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  Benefícios
                </a>
                <a 
                  href="#depoimentos" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  Depoimentos
                </a>
                <a 
                  href="#resultados" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  Resultados
                </a>
                <a 
                  href="#faq" 
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  Perguntas frequentes
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-secondary-foreground">
                Contato
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-secondary-foreground/80 text-sm mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    className="text-green-500 font-semibold hover:underline"
                  >
                    (11) 99999-9999
                  </a>
                </div>
                
                <div>
                  <p className="text-secondary-foreground/80 text-sm mb-1">Instagram</p>
                  <a 
                    href="https://instagram.com/powerservice" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    @powerservice
                  </a>
                </div>

                <div>
                  <p className="text-secondary-foreground/80 text-sm mb-1">Atendimento</p>
                  <p className="text-secondary-foreground">
                    Segunda a Sexta: 7h às 20h<br />
                    Sábados: 8h às 16h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-max py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-secondary-foreground/60 text-sm">
                © {currentYear} PowerService. Todos os direitos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#privacidade" 
                className="flex items-center gap-2 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              >
                <Shield className="w-4 h-4" />
                Política de Privacidade
              </a>
              <a 
                href="#termos" 
                className="flex items-center gap-2 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              >
                <FileText className="w-4 h-4" />
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Professional Info */}
          <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
            <div className="text-center">
              <p className="text-secondary-foreground/60 text-xs">
                PowerService é uma marca registrada. Todos os resultados são individuais e podem variar de pessoa para pessoa. 
                Este site não substitui acompanhamento médico profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;