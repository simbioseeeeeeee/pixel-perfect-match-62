import { TESTIMONIALS } from "@/lib/constants";

export const Testimonials = () => {
  return (
    <section id="clientes" className="py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <div 
              key={i} 
              className="relative glass p-9 rounded-3xl"
            >
              {/* Quote Mark */}
              <span className="absolute top-6 right-7 text-[64px] opacity-10 text-primary font-serif leading-none">
                "
              </span>
              
              <p className="text-[17px] leading-relaxed mb-7 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-primary to-neon-dim flex items-center justify-center font-bold text-primary-foreground text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
