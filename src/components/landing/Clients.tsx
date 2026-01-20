import trindadeLogo from "@/assets/clients/trindade.png";
import staffLogo from "@/assets/clients/staff.jpg";
import forteprimeLogo from "@/assets/clients/forteprime.webp";
import kaizenLogo from "@/assets/clients/kaizen.jpeg";
import realizeLogo from "@/assets/clients/realize.png";
import bighouseLogo from "@/assets/clients/bighouse.jpg";
import msiLogo from "@/assets/clients/msi.webp";
import confiarLogo from "@/assets/clients/confiar.png";
import quemDisseApeLogo from "@/assets/clients/quem-disse-ape.png";
import rgimoveisLogo from "@/assets/clients/rgimoveis.webp";

const CLIENT_LOGOS = [
  { src: trindadeLogo, alt: "Trindade Soluções Imobiliárias" },
  { src: staffLogo, alt: "Staff Imobiliária" },
  { src: forteprimeLogo, alt: "Forte Prime Imóveis" },
  { src: kaizenLogo, alt: "Kaizen Soluções Imobiliárias" },
  { src: realizeLogo, alt: "Realize Negócios Imobiliários" },
  { src: bighouseLogo, alt: "Big House Imobi" },
  { src: msiLogo, alt: "MSI Negócios Imobiliários" },
  { src: confiarLogo, alt: "Confiar Imóveis" },
  { src: quemDisseApeLogo, alt: "Quem Disse Apê" },
  { src: rgimoveisLogo, alt: "RG Imóveis" },
];

export const Clients = () => {
  return (
    <section className="bg-dark-2 py-12 border-y border-foreground/5">
      <div className="container">
        <p className="text-sm text-foreground/70 text-center uppercase tracking-[0.15em] mb-8">
          +50 empresas já automatizaram com a Simbiose
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-6 items-center justify-center">
          {CLIENT_LOGOS.map((client, i) => (
            <div 
              key={i} 
              className="h-12 md:h-14 flex items-center justify-center bg-white/90 rounded-lg px-4 py-2 hover:bg-white transition-all"
            >
              <img 
                src={client.src} 
                alt={client.alt}
                className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
