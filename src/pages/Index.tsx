import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ApproachSection from '@/components/ApproachSection';
import StatementSection from '@/components/StatementSection';
import VisualComposition from '@/components/VisualComposition';
import FeaturedWork from '@/components/FeaturedWork';
import NumbersSection from '@/components/NumbersSection';
import CTASection from '@/components/CTASection';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollReveal><ApproachSection /></ScrollReveal>
      <ScrollReveal><StatementSection /></ScrollReveal>
      <ScrollReveal><VisualComposition /></ScrollReveal>
      <ScrollReveal><FeaturedWork /></ScrollReveal>
      <ScrollReveal><NumbersSection /></ScrollReveal>
      <ScrollReveal><CTASection /></ScrollReveal>
      <ScrollReveal><InstagramSection /></ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
