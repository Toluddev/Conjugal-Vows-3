import { useState } from 'react';
import { Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

import groomImg from '@/assets/project-groom.jpg';
import coupleTradImg from '@/assets/portfolio-couple-trad.jpg';
import flowerImg from '@/assets/project-flower.jpg';
import coupleBwImg from '@/assets/portfolio-couple-bw.jpg';
import brideBwImg from '@/assets/portfolio-bride-bw.jpg';
import bridesmaidsImg from '@/assets/portfolio-bridesmaids.jpg';
import groomWhiteImg from '@/assets/portfolio-groom-white.jpg';
import bridePrepImg from '@/assets/portfolio-bride-prep.jpg';

const portfolioItems = [
  { img: groomImg, alt: 'Groom portrait', title: 'Michael & Grace' },
  { img: coupleTradImg, alt: 'Traditional wedding couple', title: 'Akin & Bola' },
  { img: flowerImg, alt: 'Artistic flower', title: 'Sandra & Sesan' },
  { img: coupleBwImg, alt: 'Wedding couple black and white', title: 'Chidi & Amara' },
  { img: brideBwImg, alt: 'Bride portrait', title: 'Iyobosa & Ehimen' },
  { img: bridesmaidsImg, alt: 'Bridesmaids', title: 'Kemi & Tunde' },
  { img: groomWhiteImg, alt: 'Groom in white suit', title: 'Emeka & Nneka' },
  { img: bridePrepImg, alt: 'Bride getting ready', title: 'Funke & Dayo' },
];

const services = [
  { num: '01', title: 'Full Day Coverage', desc: 'From getting ready to the last dance, we capture every precious moment of your celebration.' },
  { num: '02', title: 'Cinematic Editing', desc: 'Professional color grading, music selection, and pacing that brings your story to life.' },
  { num: '03', title: 'Highlight Reel', desc: 'A beautifully crafted 3-5 minute film perfect for sharing with friends and family.' },
  { num: '04', title: 'Full Feature Film', desc: 'An extended edit capturing the complete narrative of your wedding day, from start to finish.' },
];

const PortfolioCard = ({ item }: { item: typeof portfolioItems[0] }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer">
      {playing ? (
        <div className="w-full h-full bg-background flex items-center justify-center">
          <p className="body-text text-sm">Video player placeholder</p>
        </div>
      ) : (
        <>
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay with play button */}
          <div
            className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center"
            onClick={() => setPlaying(true)}
          >
            <div className="w-16 h-16 rounded-full border-2 border-foreground/80 flex items-center justify-center mb-3 hover:bg-foreground/10 transition-colors">
              <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
            </div>
            <p className="font-serif text-xl text-foreground">{item.title}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="flex flex-col items-center justify-center text-center py-24 md:py-36 px-6">
          <ScrollReveal>
            <p className="section-label mb-8">Wedding Cinematography</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] tracking-tight leading-[1.05] text-foreground mb-10">
              Love Stories
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="body-text max-w-2xl text-center">
              Every wedding is unique. We craft timeless films that capture the essence, emotion, and beauty of your most cherished day.
            </p>
          </ScrollReveal>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        {/* Featured Wedding Films heading */}
        <div className="text-center py-24 md:py-32 px-6">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground mb-6">
              Featured Wedding Films
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="body-text max-w-2xl mx-auto">
              From intimate ceremonies to grand celebrations, each film tells a unique love story with cinematic artistry.
            </p>
          </ScrollReveal>
        </div>

        {/* Portfolio Grid */}
        <div className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <PortfolioCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-background px-6 md:px-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="text-center py-24 md:py-32 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">Our Approach</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-foreground mb-10">
              More Than Just a Video
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="body-text max-w-3xl mx-auto">
              We believe your wedding film should be a work of art—something you'll treasure for generations. Our cinematic approach combines documentary-style storytelling with stunning visuals to create films that feel authentic, emotional, and timeless.
            </p>
          </ScrollReveal>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.num} delay={i * 0.08}>
                <div className="card-surface p-8 flex flex-col justify-between min-h-[360px]">
                  <div>
                    <p className="font-serif text-4xl md:text-5xl text-foreground/10 mb-6">{service.num}</p>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-4 leading-tight">{service.title}</h3>
                    <p className="body-text text-sm">{service.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
