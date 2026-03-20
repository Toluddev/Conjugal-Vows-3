import flowerImg from '@/assets/flower-artistic.jpg';
import { Layers, Play } from 'lucide-react';

const VisualComposition = () => {
  return (
    <section className="bg-background px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* 5A: Two-column composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image */}
          <div className="aspect-[4/5] overflow-hidden" style={{ outline: '1px solid rgba(255,255,255,0.1)', outlineOffset: '-1px' }}>
            <img src={flowerImg} alt="Artistic flower" className="w-full h-full object-cover grayscale" />
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div className="card-surface p-8 md:p-12 flex-1">
              <h3 className="heading-card text-foreground mb-6">Every Frame. Every Moment.</h3>
              <p className="body-text mb-10">
                We approach each project with meticulous attention to detail—from pre-production planning to the final color grade. Our process ensures that every second of footage serves your story.
              </p>
              <div className="border-t border-foreground/10 pt-8 flex gap-16">
                <div>
                  <p className="stat-number text-foreground">100%</p>
                  <p className="section-label mt-2">Client Satisfaction</p>
                </div>
                <div>
                  <p className="stat-number text-foreground">4K</p>
                  <p className="section-label mt-2">Cinema Quality</p>
                </div>
              </div>
            </div>

            {/* Card 2: Quote */}
            <div className="card-surface p-8 md:p-12">
              <div className="text-foreground/30 text-5xl font-serif mb-4">"</div>
              <blockquote className="font-serif text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-4">
                Cinema is the ultimate pervert art. It doesn't give you what you desire—it tells you how to desire.
              </blockquote>
              <p className="body-text">— Slavoj Žižek</p>
            </div>
          </div>
        </div>

        {/* 5B: Feature Highlights */}
        <div className="mt-8">
          <div className="card-surface p-8 md:p-12 max-w-2xl">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg border border-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold tracking-[0.15em] uppercase text-foreground mb-1">Multi-Layered Storytelling</h4>
                  <p className="body-text text-sm">Depth through visual metaphor and symbolism</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg border border-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold tracking-[0.15em] uppercase text-foreground mb-1">Dynamic Movement</h4>
                  <p className="body-text text-sm">Fluid camera work that enhances narrative flow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualComposition;
