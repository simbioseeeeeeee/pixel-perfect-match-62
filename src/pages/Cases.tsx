import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LINKS, CASES } from "@/lib/constants";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background font-outfit">
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-block px-5 py-2.5 bg-neon/10 border border-neon/20 rounded-full text-neon text-sm font-semibold uppercase tracking-widest mb-6 animate-pulse-soft">
            Cases de Sucesso
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Resultados <span className="text-neon text-glow">Reais</span> de Empresas{" "}
            <span className="text-neon text-glow">Reais</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como empresas estão transformando seu atendimento e multiplicando vendas com a Simbiose Digital.
          </p>
        </div>
      </section>

      {/* Featured Case */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 md:p-16 border-2 border-neon/30 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-neon/20 rounded-full text-neon text-xs font-bold uppercase tracking-wider mb-4">
                Case em Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Confiar Imóveis</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A Confiar Imóveis enfrentava um problema comum: leads entravam pelo WhatsApp, mas a equipe não conseguia atender a todos a tempo. Com a implementação da LIA, transformaram completamente sua operação.
              </p>
              <a
                href={LINKS.whatsappCases}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-neon to-neon-dim text-background font-bold rounded-xl hover:shadow-neon hover:-translate-y-0.5 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Quero Resultados Assim
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '+100%', label: 'Oportunidades geradas' },
                { value: '0.5s', label: 'Tempo de resposta' },
                { value: '24/7', label: 'Disponibilidade' },
                { value: '2x', label: 'Funil de vendas' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-neon/5 border border-neon/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-neon mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-dark-2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {CASES.map((caseItem, i) => (
              <div
                key={i}
                className="bg-dark-3 rounded-3xl overflow-hidden border border-white/5 hover:border-neon/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8 bg-gradient-to-br from-neon/10 to-transparent border-b border-white/5">
                  <div className="text-2xl font-extrabold mb-2">{caseItem.company}</div>
                  <div className="text-muted-foreground text-sm">{caseItem.segment}</div>
                </div>
                <div className="p-8">
                  <p className="text-lg italic text-foreground leading-relaxed mb-6">
                    "{caseItem.quote}"
                  </p>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon to-neon-dim flex items-center justify-center font-bold text-background text-lg">
                      {caseItem.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{caseItem.author}</div>
                      <div className="text-muted-foreground text-sm">{caseItem.role}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                    {caseItem.stats.map((stat, j) => (
                      <div key={j} className="text-center">
                        <div className="text-2xl font-extrabold text-neon">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">
            Quer ser o próximo <span className="text-neon text-glow">case de sucesso</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Converse com nossa equipe e descubra como podemos transformar seu atendimento em resultados reais.
          </p>
          <a
            href={LINKS.whatsappCases}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-whatsapp to-whatsapp-hover text-white font-bold text-lg rounded-xl shadow-whatsapp hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Quero Automatizar Minha Empresa
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Cases;
