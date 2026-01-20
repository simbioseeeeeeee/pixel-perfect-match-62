import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LINKS } from "@/lib/constants";

export const CTA = () => {
  return (
    <section className="py-28 px-6 text-center mesh-bg">
      <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] max-w-[800px] mx-auto mb-7">
        Pronto para colocar seu negócio no <span className="neon-text">piloto automático</span>?
      </h2>
      <p className="text-xl text-muted-foreground mb-5">
        Converse com nossa IA agora mesmo e descubra como podemos transformar seu atendimento.
      </p>
      <p className="text-base text-primary font-medium mb-11">
        ⚡ Atendimento instantâneo • 🤖 IA agenda sua reunião • 📅 Sem burocracia
      </p>
      <a
        href={LINKS.whatsappLIA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-12 py-6 text-xl font-semibold bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white rounded-[14px] hover:-translate-y-0.5 hover:shadow-whatsapp transition-all animate-glow"
      >
        <WhatsAppIcon size={28} /> Falar com a LIA Agora
      </a>
    </section>
  );
};
