import { LINKS } from "@/lib/constants";
import simbioseLogo from "@/assets/logo-simbiose.png";

export const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 px-6 border-t border-foreground/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img 
                src={simbioseLogo} 
                alt="Simbiose Digital" 
                className="h-[100px] w-auto"
              />
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[320px]">
              Unindo tecnologia e estratégia para transformar a forma como empresas vendem e atendem seus clientes.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold mb-5">Soluções</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#solucao" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  LIA - Automação
                </a>
              </li>
              <li>
                <a href={LINKS.iadTrafego} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  IAD - Tráfego
                </a>
              </li>
              <li>
                <a href={LINKS.plataforma} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Plataforma
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-5">Empresa</h4>
            <ul className="space-y-3.5">
              <li>
                <a href={LINKS.sobre} className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href={LINKS.cases} className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href={LINKS.blog} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href={LINKS.roadmap} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5">Contato</h4>
            <ul className="space-y-3.5">
              <li>
                <a 
                  href={LINKS.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[15px] text-primary flex items-center gap-2 hover:underline"
                >
                  💬 Fale pelo WhatsApp
                </a>
              </li>
              <li>
                <a href={LINKS.privacidade} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href={LINKS.termos} target="_blank" rel="noopener noreferrer" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Simbiose Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2.5 bg-dark-3 rounded-lg text-xs text-muted-foreground flex items-center gap-2">
              🔒 Dados Criptografados
            </span>
            <span className="px-4 py-2.5 bg-dark-3 rounded-lg text-xs text-muted-foreground flex items-center gap-2">
              ✅ WhatsApp Oficial
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
