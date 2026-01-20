import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LINKS } from "@/lib/constants";
import simbioseLogo from "@/assets/logo-simbiose.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 bg-dark-1/90 backdrop-blur-xl border-b border-foreground/5">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={simbioseLogo}
            alt="Simbiose Digital"
            className="h-[72px] md:h-[80px] w-auto max-w-none"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          <a
            href="#solucao"
            className="text-muted-foreground text-[15px] hover:text-foreground transition-colors"
          >
            Soluções
          </a>
          <a
            href="#metodologia"
            className="text-muted-foreground text-[15px] hover:text-foreground transition-colors"
          >
            Metodologia
          </a>
          <a
            href={LINKS.cases}
            className="text-muted-foreground text-[15px] hover:text-foreground transition-colors"
          >
            Cases
          </a>
          <a
            href={LINKS.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-[15px] hover:text-foreground transition-colors"
          >
            Blog
          </a>
          <a
            href={LINKS.plataforma}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold border border-foreground/20 rounded-lg hover:border-primary hover:bg-foreground/5 transition-all"
          >
            Acessar Plataforma
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white rounded-lg hover:-translate-y-0.5 hover:shadow-whatsapp transition-all"
          >
            <WhatsAppIcon size={20} /> Falar Agora
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white rounded-lg"
        >
          <WhatsAppIcon size={18} /> Falar
        </a>
      </div>
    </nav>
  );
};

