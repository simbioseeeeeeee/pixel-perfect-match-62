import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LINKS } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden mesh-bg">
      <div className="container relative z-10">
        <div className="max-w-[680px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-7">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-[15px] text-primary font-medium">Piloto Automático no WhatsApp</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(42px,6vw,68px)] font-extrabold leading-[1.05] tracking-tight mb-7">
            Seu Atendimento e Vendas no <span className="neon-text">Piloto Automático</span> com IA.
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-11">
            Pare de perder leads por demora. A Simbiose Digital une{" "}
            <strong className="text-foreground">Tráfego Inteligente</strong> e{" "}
            <strong className="text-foreground">Atendimento Instantâneo</strong> para escalar sua empresa 24/7.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={LINKS.agendamento}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-[18px] text-[17px] font-semibold bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white rounded-[14px] hover:-translate-y-0.5 hover:shadow-whatsapp transition-all animate-glow"
            >
              <WhatsAppIcon size={24} /> Quero Automatizar Minha Empresa
            </a>
            <span className="text-muted-foreground text-sm">⚡ Resposta em menos de 30 segundos</span>
          </div>
        </div>
      </div>

      {/* Floating Phone Mock */}
      <div className="absolute top-[12%] right-[5%] w-80 hidden xl:block animate-float">
        <div className="bg-dark-3 rounded-[40px] p-3 border border-foreground/10 shadow-card">
          <div className="bg-background rounded-[32px] overflow-hidden">
            {/* WhatsApp Header */}
            <div className="bg-gradient-to-b from-[#075e54] to-[#128c7e] px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <div className="font-semibold text-[15px]">LIA - Simbiose Digital</div>
                <div className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" /> online agora
                </div>
              </div>
            </div>
            {/* Chat */}
            <div className="bg-[#0b141a] p-4 min-h-[300px]">
              <div className="bg-[#202c33] text-[#e9edef] p-3 px-4 rounded-xl rounded-tl-none max-w-[90%] mb-4 text-sm leading-relaxed">
                Olá! 👋 Sou a LIA, assistente inteligente da Simbiose Digital.
                <br /><br />
                Como posso te ajudar hoje?
              </div>
              <div className="bg-[#005c4b] text-[#e9edef] p-3 px-4 rounded-xl rounded-tr-none max-w-[85%] mb-4 text-sm leading-relaxed ml-auto">
                Quero automatizar meu atendimento
              </div>
              <div className="bg-[#202c33] text-[#e9edef] p-3 px-4 rounded-xl rounded-tl-none max-w-[90%] text-sm leading-relaxed">
                Perfeito! Vou te ajudar a agendar uma conversa com nosso time.
                <br /><br />
                📅 Qual o melhor horário para você?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-[18%] right-[28%] hidden xl:flex items-center gap-4 bg-dark-3 rounded-2xl p-4 px-6 border border-primary/30 shadow-float animate-float-delayed">
        <div className="w-14 h-14 rounded-[14px] bg-primary/15 flex items-center justify-center text-[28px]">
          ⚡
        </div>
        <div>
          <div className="text-[32px] font-extrabold text-primary">0.3s</div>
          <div className="text-sm text-muted-foreground">Tempo de resposta</div>
        </div>
      </div>
    </section>
  );
};
