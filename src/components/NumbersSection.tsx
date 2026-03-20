import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 150, label: 'Projects' },
  { value: 75, label: 'Clients' },
  { value: 8, label: 'Years' },
  { value: 25, label: 'Awards' },
];

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center px-6 md:px-12">
      <p className="stat-number text-foreground">{count}</p>
      <p className="section-label mt-3">{label}</p>
    </div>
  );
};

const NumbersSection = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="heading-section text-foreground mb-4">By the Numbers</h2>
        <p className="body-text mb-20">A decade of visual storytelling excellence</p>

        <div className="flex flex-wrap justify-around items-center gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <StatItem value={stat.value} label={stat.label} />
              {i < stats.length - 1 && (
                <div className="hidden md:block h-12 w-px bg-foreground/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
