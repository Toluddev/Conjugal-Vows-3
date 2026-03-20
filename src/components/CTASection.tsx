import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section id="contact" className="bg-background px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto card-surface p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="section-label mb-6">Ready to Begin?</p>
            <h2 className="heading-section text-foreground mb-6">
              Let's craft your story together
            </h2>
            <p className="body-text mb-10">
              From concept to final cut, we're here to bring your vision to life with cinematic precision and creative passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">Start A Conversation</Link>
              <Link to="/portfolio" className="btn-secondary">View Our Work</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { title: 'Quick Response', desc: 'We typically respond within 24 hours' },
              { title: 'Free Consultation', desc: 'Discuss your project with no commitment' },
              { title: 'Tailored Approach', desc: 'Custom solutions for your unique needs' },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-foreground/10 pl-6 py-4">
                <h4 className="text-sm font-sans font-bold tracking-[0.12em] uppercase text-foreground mb-2">{item.title}</h4>
                <p className="body-text text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
