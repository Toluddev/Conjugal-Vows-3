import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [vision, setVision] = useState('');

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 flex flex-col items-center justify-center min-h-[50vh] px-6">
        <ScrollReveal>
          <div className="text-center">
            <h1 className="heading-display text-foreground mb-6">LET'S TALK</h1>
            <p className="section-label mb-8">TELL US ABOUT YOUR WEDDING DAY VISION</p>
            <div className="w-16 h-[1px] bg-foreground/20 mx-auto" />
          </div>
        </ScrollReveal>
      </section>

      {/* Two-column layout */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Left: Form Card */}
          <ScrollReveal>
            <div className="card-surface p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl tracking-[0.15em] uppercase text-foreground mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                TELL US ABOUT YOUR DAY
              </h2>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Names & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground/80 mb-2 font-sans">Your Names *</label>
                    <input
                      type="text"
                      placeholder="e.g., Sarah & Michael"
                      className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/80 mb-2 font-sans">Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>
                </div>

                {/* Phone & Wedding Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground/80 mb-2 font-sans">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/80 mb-2 font-sans">Wedding Date *</label>
                    <input
                      type="date"
                      className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Venue & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground/80 mb-2 font-sans">Venue/Location *</label>
                    <input
                      type="text"
                      placeholder="e.g., Napa Valley, CA"
                      className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/80 mb-2 font-sans">Guest Count</label>
                    <select className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 appearance-none [color-scheme:dark]" defaultValue="">
                      <option value="" disabled>Select guest count</option>
                      <option>Intimate – Under 50</option>
                      <option>Small – 50–100</option>
                      <option>Medium – 100–200</option>
                      <option>Large – 200+</option>
                    </select>
                  </div>
                </div>

                {/* Package Interest */}
                <div>
                  <label className="block text-sm text-foreground/80 mb-2 font-sans">Package Interest</label>
                  <select className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 appearance-none [color-scheme:dark]" defaultValue="">
                    <option value="" disabled>Select a package</option>
                    <option>Highlight Reel (3–5 mins)</option>
                    <option>Full Feature Film (20–30 mins)</option>
                    <option>Complete Coverage (Both)</option>
                    <option>Custom Package</option>
                  </select>
                </div>

                {/* Your Vision */}
                <div>
                  <label className="block text-sm text-foreground/80 mb-2 font-sans">Your Vision *</label>
                  <textarea
                    value={vision}
                    onChange={(e) => setVision(e.target.value.slice(0, 1000))}
                    placeholder="Tell us about your love story, wedding style, specific moments you want captured, and any special details..."
                    rows={6}
                    className="w-full bg-accent/50 border-0 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-y"
                  />
                  <p className="text-right text-xs text-muted-foreground mt-1">{vision.length}/1000</p>
                </div>

                <button type="submit" className="w-full py-4 text-[12px] tracking-[0.2em] uppercase bg-muted-foreground text-background font-sans font-medium transition-all hover:opacity-90">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="card-surface p-8">
                <h3 className="heading-card text-foreground mb-4">Get In Touch</h3>
                <p className="body-text">
                  We'd love to hear about your wedding day. Let's create something beautiful together.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="card-surface p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-foreground mb-1">Email</h4>
                  <p className="body-text text-sm">marvinfilm04@gmail.com</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card-surface p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-foreground mb-1">Phone</h4>
                  <p className="body-text text-sm">+234 703 522 4845</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="card-surface p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-foreground mb-1">Location</h4>
                  <p className="body-text text-sm">Km2 Refinery Road Behind Sunsel Plaza Effurun Delta State<br />Available for travel worldwide</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="card-surface p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-foreground mb-3">Follow Our Work</h4>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
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

export default Contact;
