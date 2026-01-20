import { STEPS } from "@/lib/constants";

export const Methodology = () => {
  return (
    <section id="metodologia" className="py-28 bg-dark-2">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4 block">
            Metodologia
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold">
            4 Passos Para Escalar
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-[70px] left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-primary via-primary/30 to-primary rounded hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-[140px] h-[140px] rounded-full bg-dark-3 border-4 border-primary flex items-center justify-center mx-auto mb-7 text-[56px] shadow-neon">
                  {step.icon}
                </div>
                <div className="text-xs text-primary font-bold tracking-[0.2em] mb-2.5">
                  PASSO {step.num}
                </div>
                <h3 className="text-[26px] font-bold mb-3.5">{step.title}</h3>
                <p className="text-[15px] text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
