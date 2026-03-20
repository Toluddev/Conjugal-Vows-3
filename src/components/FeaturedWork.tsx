import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import groomImg from '@/assets/project-groom.jpg';
import coupleImg from '@/assets/project-couple.jpg';
import flowerImg from '@/assets/project-flower.jpg';

const projects = [
  { img: groomImg, title: 'Michael & Grace', alt: 'Groom portrait' },
  { img: coupleImg, title: 'Akin & Bola', alt: 'Wedding couple' },
  { img: flowerImg, title: 'Sandra & Sesan', alt: 'Artistic flower' },
];

const FeaturedWork = () => {
  return (
    <section id="portfolio" className="bg-background px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-4">Featured Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="heading-section text-foreground mb-3">Selected Projects</h2>
              <p className="body-text max-w-xl">A showcase of our most impactful cinematic stories, from concept to completion.</p>
            </div>
            <Link to="/portfolio" className="btn-secondary flex items-center gap-3 whitespace-nowrap">
              View All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-foreground/5 pt-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.title} className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer">
              <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-serif text-xl text-foreground">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
