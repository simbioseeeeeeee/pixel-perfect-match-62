import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LINKS, VALUES, ABOUT_STATS } from "@/lib/constants";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background font-outfit">
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-block px-5 py-2.5 bg-neon/10 border border-neon/20 rounded-full text-neon text-sm font-semibold uppercase tracking-widest mb-6 animate-pulse-soft">
            Sobre Nós
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Transformando <span className="text-neon text-glow">Atendimento</span> em{" "}
            <span className="text-neon text-glow">Resultados</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos uma empresa de tecnologia focada em automação inteligente de atendimento e vendas. Nossa missão é fazer empresas venderem mais, atendendo melhor.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 bg-dark-2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Nossa História</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                A Simbiose Digital nasceu da percepção de que{" "}
                <span className="text-foreground font-medium">empresas perdem milhões de reais</span> por ano simplesmente por não conseguirem atender seus leads a tempo.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Fundada por profissionais com experiência em tecnologia e vendas, desenvolvemos a{" "}
                <span className="text-foreground font-medium">LIA (Lead Intelligence Automation)</span> - uma assistente de IA que revoluciona o atendimento via WhatsApp.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hoje, ajudamos mais de <span className="text-foreground font-medium">50 empresas</span> a automatizar seus processos de atendimento e vendas, gerando milhões em novas oportunidades de negócio.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-12 text-center">
              <div className="text-[120px] mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-neon">Tecnologia que Entende Pessoas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-10 hover:border-neon/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-[72px] h-[72px] rounded-2xl bg-neon/10 flex items-center justify-center text-4xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {ABOUT_STATS.map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-5xl font-extrabold text-neon mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-2">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">
            Quer fazer parte dessa <span className="text-neon text-glow">transformação</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Converse conosco e descubra como podemos ajudar sua empresa a vender mais.
          </p>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-whatsapp to-whatsapp-hover text-white font-bold text-lg rounded-xl shadow-whatsapp hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Falar com Especialista
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Sobre;
