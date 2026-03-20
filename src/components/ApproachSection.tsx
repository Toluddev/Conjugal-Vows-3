const ApproachSection = () => {
  const columns = [
    {
      title: 'Storytelling with',
      emphasis: 'Purpose',
      text: 'Every project is unique and deserves to be told authentically. We craft heartfelt narratives that celebrate your story—capturing not just the moments, but the emotions and essence of your vision.',
    },
    {
      title: 'Quality over',
      emphasis: 'Quantity',
      text: 'We embrace a "less is more" philosophy, intentionally taking on fewer projects to ensure each receives our full creative attention. This allows us to deeply connect with your story and deliver excellence.',
    },
    {
      title: 'Crafted for',
      emphasis: 'You',
      text: 'We believe the best films come from truly understanding our clients. By exploring your unique vision and passion, we ensure your film reflects who you are—captured with authenticity and heart.',
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12">
      <p className="section-label text-center mb-20">Our Approach</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-7xl mx-auto">
        {columns.map((col) => (
          <div key={col.emphasis}>
            <h3 className="heading-card mb-6 text-foreground">
              {col.title} <em className="text-muted-foreground">{col.emphasis}</em>
            </h3>
            <p className="body-text">{col.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;
