import { STATS } from "@/lib/constants";

export const Stats = () => {
  return (
    <section className="py-20 bg-dark-3">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-[clamp(40px,5vw,60px)] font-extrabold gradient-text mb-2.5">
                {stat.value}
              </div>
              <div className="text-[17px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
