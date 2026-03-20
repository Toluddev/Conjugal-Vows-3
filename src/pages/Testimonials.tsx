import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { Star, Instagram, Youtube } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';
import testimonial4 from '@/assets/testimonial-4.jpg';
import testimonial5 from '@/assets/testimonial-5.jpg';
import testimonial6 from '@/assets/testimonial-6.jpg';

const Stars = ({ filled }: { filled: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i <= filled ? 'fill-foreground text-foreground' : 'text-foreground/40'}`}
      />
    ))}
  </div>
);

const testimonials = [
  {
    image: testimonial1,
    stars: 4,
    quote: "Our wedding film was nothing short of magical. They captured every emotion, every moment, with such artistry. Watching it brings tears to our eyes every time. Truly cinematic storytelling that we'll treasure forever.",
    names: 'Katherine & Osagu',
    year: '2025',
  },
  {
    image: testimonial2,
    stars: 4,
    quote: "From the moment we met Conjugal Vows, we knew we were in the right hands. They made us feel so comfortable and captured the most genuine moments. Our film is a work of art that perfectly tells our love story.",
    names: 'Elizabth & Efosa',
    year: '2025',
  },
  {
    image: testimonial3,
    stars: 5,
    quote: "The attention to detail was incredible. Every shot was thoughtfully composed, and the editing was seamless. They didn't just document our day—they created a cinematic experience that we watch again and again.",
    names: 'Sandra & Sesan',
    year: '2025',
  },
  {
    image: testimonial4,
    stars: 4,
    quote: "We wanted something authentic and personal, and that's exactly what we got. The team was professional yet warm, and they captured our day in a way that feels so true to who we are. Absolutely beautiful work.",
    names: 'Tejiri & Sodie',
    year: '2025',
  },
  {
    image: testimonial5,
    stars: 4,
    quote: "Choosing Conjugal Vows was the best decision we made. They were unobtrusive yet captured everything. The final film exceeded our expectations—it's elegant, emotional, and exactly what we dreamed of.",
    names: 'Iyobosa & David',
    year: '2024',
  },
  {
    image: testimonial6,
    stars: 5,
    quote: "They understood our vision perfectly and captured it with such beauty. The film feels like us—authentic, beautiful, and full of love. We couldn't be happier with the result.",
    names: 'Atalia & Friends',
    year: '2024',
  },
];

const StatItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center px-8">
      <p className="text-5xl md:text-6xl text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </p>
      <p className="section-label">{label}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 flex flex-col items-center justify-center min-h-[60vh] px-6">
        <ScrollReveal>
          <div className="text-center">
            <p className="section-label mb-8">CLIENT VOICES</p>
            <h1 className="heading-display text-foreground mb-8">Testimonials</h1>
            <p className="body-text max-w-2xl mx-auto">
              Hear from the brands and individuals who trusted us to bring their vision to life.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Trusted by Visionaries */}
      <section className="px-6 md:px-12 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-6">Trusted by Visionaries</h2>
            <p className="body-text max-w-3xl mx-auto">
              Every project is a partnership. These are the stories of collaboration, creativity, and cinematic excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i % 3 * 0.1}>
              <div className="card-surface overflow-hidden flex flex-col h-full">
                {/* Image with stars */}
                <div className="relative">
                  <img src={t.image} alt={t.names} className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Stars filled={t.stars} />
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="text-foreground/20 text-4xl font-serif leading-none mb-2">"</div>
                  <p className="body-text italic text-sm leading-relaxed flex-1">
                    {t.quote}
                  </p>

                  <div className="mt-8">
                    <div className="w-full h-[1px] bg-foreground/10 mb-6" />
                    <h4 className="text-sm font-sans font-bold text-foreground">{t.names}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{t.year}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-24">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 md:gap-0 md:justify-between">
            <StatItem end={150} suffix="+" label="HAPPY CLIENTS" />
            <StatItem end={100} suffix="%" label="CLIENT SATISFACTION" />
            <StatItem end={25} suffix="+" label="INDUSTRY AWARDS" />
            <StatItem end={8} suffix="+" label="YEARS EXPERIENCE" />
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="heading-section text-foreground mb-6">Ready to create your story?</h2>
            <p className="body-text max-w-2xl mx-auto mb-10">
              Join the growing list of satisfied clients who've trusted us with their vision.
            </p>
            <Link to="/contact" className="btn-primary">START YOUR PROJECT</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-foreground/5 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-text text-sm">© 2025 Conjugal Vows. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
