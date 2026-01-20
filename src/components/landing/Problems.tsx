import { PROBLEMS } from "@/lib/constants";

export const Problems = () => {
  return (
    <section id="problemas" className="py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-destructive mb-4 block">
            O Problema
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold">
            Onde você está deixando dinheiro na mesa?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, i) => (
            <div 
              key={i} 
              className="glass p-9 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-[18px] bg-destructive/10 flex items-center justify-center text-[32px] mb-7">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3.5">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
              <div className="mt-7 p-5 rounded-2xl bg-destructive/5 border border-destructive/10">
                <div className="text-[32px] font-extrabold text-destructive">{problem.stat}</div>
                <div className="text-sm text-muted-foreground">{problem.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
