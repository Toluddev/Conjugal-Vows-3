import { Instagram, ArrowRight } from 'lucide-react';
import coupleImg from '@/assets/project-couple.jpg';
import groomImg from '@/assets/project-groom.jpg';

const InstagramSection = () => {
  return (
    <section className="bg-background px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <div className="w-14 h-14 rounded-lg border border-foreground/20 flex items-center justify-center mb-8">
            <Instagram className="w-6 h-6 text-foreground/70" />
          </div>
          <h2 className="heading-section text-foreground mb-4">Follow Our Journey</h2>
          <p className="body-text mb-8">
            Stay updated with our latest projects, behind-the-scenes moments, and creative insights.
          </p>
          <a href="https://instagram.com/conjugalvows" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-3 self-start">
            @conjugalvows <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Instagram cards */}
        {[coupleImg, groomImg].map((img, i) => (
          <div key={i} className="bg-foreground rounded-lg overflow-hidden">
            <div className="relative aspect-[3/4]">
              <img src={img} alt="Instagram post" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/30">
                <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center mb-3">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-background ml-1" />
                </div>
                <span className="text-foreground text-sm font-sans">Watch on Instagram</span>
              </div>
            </div>
            <div className="bg-foreground p-4">
              <p className="text-primary-foreground text-xs font-sans">View more on Instagram</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
