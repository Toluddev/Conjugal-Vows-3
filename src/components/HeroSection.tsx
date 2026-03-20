import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-wedding.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cinematic wedding" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="section-label mb-6">Cinematic Storytelling</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-foreground mb-8" style={{ textWrap: 'balance' }}>
          CAPTURING YOUR MOMENTS INTO STORIES YOU'LL TREASURE FOREVER
        </h1>
        <p className="body-text max-w-xl mx-auto mb-12">
          We craft visual narratives that capture emotion, preserve moments, and move audiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/portfolio" className="btn-primary">View Our Work</Link>
          <Link to="/contact" className="btn-secondary">Start A Project</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
