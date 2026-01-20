import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LINKS } from "@/lib/constants";

export const WhatsAppFloat = () => {
  return (
    <a
      href={LINKS.whatsappLIA}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-whatsapp to-whatsapp-dark flex items-center justify-center shadow-whatsapp-lg hover:scale-110 transition-transform"
      aria-label="Falar pelo WhatsApp"
    >
      <WhatsAppIcon size={32} className="text-white" />
    </a>
  );
};
