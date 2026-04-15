const TRUST_STATS = [
  { value: '400+', label: 'Clientes Atendidos' },
  { value: 'R$ 5 Bi', label: 'em VGV Gerado' },
  { value: '8+', label: 'Anos de Experiência' },
  { value: '0.3s', label: 'Tempo Médio de Resposta' },
];

export const Clients = () => {
  return (
    <section className="bg-dark-2 py-14 border-y border-foreground/5">
      <div className="container">
        <p className="text-sm text-foreground/70 text-center uppercase tracking-[0.15em] mb-10">
          Resultados que falam por si
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {TRUST_STATS.map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
