import { CLIENTS } from "@/lib/constants";

export const Clients = () => {
  return (
    <section className="bg-dark-2 py-12 border-y border-foreground/5">
      <div className="container">
        <p className="text-sm text-muted-foreground text-center uppercase tracking-[0.15em] mb-8">
          +50 empresas já automatizaram com a Simbiose
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-4 items-center justify-center">
          {CLIENTS.map((client, i) => (
            <span 
              key={i} 
              className="text-base font-semibold text-foreground/50 hover:text-foreground/80 transition-opacity cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
