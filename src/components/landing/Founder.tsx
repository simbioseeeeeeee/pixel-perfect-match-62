import { LINKS } from "@/lib/constants";

const FOUNDER_STATS = [
  { value: "+400", label: "Clientes Atendidos" },
  { value: "5 Bi", label: "em VGV" },
  { value: "3", label: "Empresas Lideradas" },
];

export const Founder = () => {
  return (
    <section className="py-20 bg-dark-2 border-y border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4 block text-center">
            Quem está por trás
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12">
            Feito por quem vive o{" "}
            <span className="text-primary text-glow">Mercado</span>
          </h2>

          <div className="glass-card rounded-3xl p-10 md:p-14">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Guilherme Domingues
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Referência em Marketing para imobiliária, com mais de{" "}
              <strong className="text-foreground">8 anos de experiência</strong>{" "}
              no setor.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Com 2 graduações e 8 certificações, une teoria e prática em
              estratégias comerciais, marketing e aplicação de IAs para
              negócios.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {FOUNDER_STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-foreground/10 pt-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Criou a{" "}
                <strong className="text-foreground">
                  Simbiose Imob, Seu Oculos
                </strong>{" "}
                e Simbiose Digital, que transformam dados em argumentos de
                vendas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
