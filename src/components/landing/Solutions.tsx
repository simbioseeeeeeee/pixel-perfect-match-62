import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LIA_FEATURES, IAD_FEATURES, LINKS } from "@/lib/constants";

export const Solutions = () => {
  return (
    <section id="solucao" className="py-28 mesh-bg">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4 block">
            Nossa Tecnologia
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold">
            Duas Soluções. Um Ecossistema.
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LIA Card */}
          <div className="relative p-11 rounded-3xl bg-dark-3 border-2 border-primary/30 overflow-hidden">
            {/* Glow Background */}
            <div className="absolute -top-1/2 -right-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,hsl(152_100%_50%/0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Badge */}
            <div className="relative z-10 inline-flex items-center px-5 py-2.5 rounded-full bg-primary/10 mb-7">
              <span className="font-bold text-[15px] text-primary">LIA</span>
              <span className="text-muted-foreground ml-2.5 text-[15px]">Automação Inteligente</span>
            </div>
            
            <h3 className="relative z-10 text-4xl font-extrabold mb-4">Sua SDR Digital</h3>
            <p className="relative z-10 text-lg text-muted-foreground leading-relaxed mb-9">
              Atende, qualifica e agenda <strong className="text-foreground">24h por dia</strong> via WhatsApp Oficial. Nunca mais perca um lead por demora.
            </p>
            
            <ul className="relative z-10 space-y-4">
              {LIA_FEATURES.map((feature, i) => (
                <li key={i} className="flex items-center gap-3.5 text-[17px]">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm flex-shrink-0">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* IAD Card */}
          <div className="relative p-11 rounded-3xl glass overflow-hidden">
            {/* Glow Background */}
            <div className="absolute -top-1/2 -right-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,hsl(238_84%_67%/0.1)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Badge */}
            <div className="relative z-10 inline-flex items-center px-5 py-2.5 rounded-full bg-purple/10 mb-7">
              <span className="font-bold text-[15px] text-purple">IAD</span>
              <span className="text-muted-foreground ml-2.5 text-[15px]">Tráfego Inteligente</span>
            </div>
            
            <h3 className="relative z-10 text-4xl font-extrabold mb-4">Gestão de Anúncios com IA</h3>
            <p className="relative z-10 text-lg text-muted-foreground leading-relaxed mb-9">
              Otimização de verba e escala automática. <strong className="text-foreground">Mais leads qualificados</strong> com o mesmo investimento.
            </p>
            
            <ul className="relative z-10 space-y-4">
              {IAD_FEATURES.map((feature, i) => (
                <li key={i} className="flex items-center gap-3.5 text-[17px]">
                  <span className="w-7 h-7 rounded-full bg-purple/20 text-purple flex items-center justify-center text-sm flex-shrink-0">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={LINKS.whatsappSolucoes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-[18px] text-[17px] font-semibold bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white rounded-[14px] hover:-translate-y-0.5 hover:shadow-whatsapp transition-all"
          >
            <WhatsAppIcon size={24} /> Quero Conhecer as Soluções
          </a>
        </div>
      </div>
    </section>
  );
};
