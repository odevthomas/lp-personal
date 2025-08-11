import { Instagram, Shield, FileText } from "lucide-react";

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
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
              </svg>        
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