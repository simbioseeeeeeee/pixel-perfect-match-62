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
import luizRenatoLogo from "@/assets/clients/luiz-renato.png";

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
  { src: luizRenatoLogo, alt: "Luiz Renato Imóveis" },
];

export const Clients = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="bg-dark-2 py-12 border-y border-foreground/5 overflow-hidden">
      <div className="container mb-8">
        <p className="text-sm text-foreground/70 text-center uppercase tracking-[0.15em]">
          +50 empresas já automatizaram com a Simbiose
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-2 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-2 to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((client, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 h-14 mx-4 flex items-center justify-center bg-white/90 rounded-lg px-5 py-2"
            >
              <img 
                src={client.src} 
                alt={client.alt}
                className="h-10 w-auto max-w-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
