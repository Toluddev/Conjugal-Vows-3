import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import aboutHeroImg from '@/assets/about-hero-couple.jpg';

const services = [
  { emoji: '🎥', title: 'Cinematic Coverage', desc: 'Expert camera work and composition that captures every meaningful moment with artistic precision.' },
  { emoji: '✂️', title: 'Professional Editing', desc: 'Seamless storytelling through expert editing, color grading, and sound design that brings your day to life.' },
  { emoji: '💕', title: 'Emotional Storytelling', desc: 'We capture not just what happened, but how it felt—the tears, the laughter, the love.' },
  { emoji: '✈️', title: 'Aerial Cinematography', desc: 'Licensed drone pilot capturing stunning aerial views of your venue and celebration.' },
  { emoji: '🎼', title: 'Audio Excellence', desc: 'Crystal-clear vows, toasts, and ambient sound with professional audio equipment and mixing.' },
  { emoji: '🤝', title: 'Unobtrusive Presence', desc: 'We blend into your day seamlessly, allowing genuine moments to unfold naturally.' },
];

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero: ABOUT title */}
      <section className="pt-20">
        <div className="flex flex-col items-center justify-center text-center py-24 md:py-36 px-6">
          <ScrollReveal>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-[0.15em] uppercase text-foreground mb-8">
              About
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-label mb-10">The Craft Behind The Vision</p>
          </ScrollReveal>
          <div className="w-20 h-px bg-foreground/20 mx-auto" />
        </div>
      </section>

      {/* Two-column: Image + Story intro */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left image */}
          <ScrollReveal>
            <div className="aspect-[3/4] md:aspect-auto md:h-full overflow-hidden rounded-sm">
              <img
                src={aboutHeroImg}
                alt="Wedding couple intimate moment"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right text */}
          <div className="flex flex-col justify-center px-0 md:px-16 lg:px-24 py-12 md:py-0">
            <ScrollReveal delay={0.15}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] uppercase text-foreground leading-[1.15] mb-10">
                Capturing Love Stories, One Frame At A Time
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="body-text mb-6">
                With over 8 years specializing in wedding cinematography, we've built our reputation on one principle: your love story deserves to be told beautifully. We've had the honor of documenting over 150 weddings across Nigeria and beyond.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="body-text mb-6">
                We believe in the power of film to preserve the emotions, the laughter, the tears, and all the moments in between. That's why we approach each wedding with obsessive attention to detail and a commitment to capturing authentic, timeless memories.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="body-text">
                Our process is personal and unobtrusive. We take the time to understand your story, your vision, and what matters most to you, then craft a film that feels uniquely yours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.08em] uppercase text-foreground mb-12">
              Our Story
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <p className="body-text mb-8">
              Conjugal Vows began with a simple belief: that every wedding has a unique story worth telling. What started as a passion for capturing love stories has grown into a dedicated wedding cinematography studio serving couples throughout Nigeria and beyond.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="body-text mb-16">
              We've had the privilege of documenting weddings ranging from intimate elopements in Big Sur to grand celebrations in Napa Valley. Each wedding has taught us something new and deepened our appreciation for the art of wedding filmmaking.
            </p>
          </ScrollReveal>

          {/* Quote block */}
          <ScrollReveal delay={0.2}>
            <div className="card-surface p-10 md:p-14 mb-16">
              <p className="font-serif text-xl md:text-2xl italic text-foreground/90 leading-relaxed">
                "We don't just film weddings—we preserve the emotions, the connections, and the fleeting moments that make your day unforgettable."
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="body-text">
              Today, we work with couples who value authenticity and artistry. Couples who want more than just documentation—they want a cinematic film that captures the true essence of their celebration. Our work is driven by genuine connection, shaped by collaboration, and defined by an unwavering commitment to excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Bring */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-16">
              What We Bring to Your Day
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="card-surface p-8 flex flex-col min-h-[280px]">
                  <span className="text-3xl mb-6">{s.emoji}</span>
                  <h3 className="text-sm font-sans font-bold tracking-[0.15em] uppercase text-foreground mb-4 leading-relaxed">
                    {s.title}
                  </h3>
                  <p className="body-text text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-foreground leading-[1.3] mb-8">
              "Your wedding day passes in a blur, but your film lasts forever."
            </p>
            <p className="body-text">— Conjugal Vows</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="bg-background border-t border-foreground/5 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-text text-sm">© 2025 Conjugal Vows. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['IG', 'TT', 'YT'].map((icon) => (
              <a key={icon} href="#" className="w-10 h-10 rounded-lg border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors text-xs font-sans font-bold">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
