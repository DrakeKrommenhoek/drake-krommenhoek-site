'use client';

const About = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Who Am I</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Story Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Born in <span className="font-semibold text-wl-blue">Arizona</span> and raised in{' '}
              <span className="font-semibold text-wl-blue">Rapid City, South Dakota</span>, I
              spent my formative years in the heart of the Great Plains before moving to{' '}
              <span className="font-semibold text-wl-blue">Colorado</span>, where I&apos;ve lived
              for over the past decade. Now, I&apos;m pursuing my education at{' '}
              <span className="font-semibold text-wl-blue">
                Washington and Lee University in Lexington, Virginia
              </span>
              .
            </p>

            <p>
              Competition has always been a driving force in my life. Whether it was four years of{' '}
              <span className="font-semibold text-wl-blue">high school golf</span>, where I served
              as team captain and helped secure back-to-back regional championships, or playing{' '}
              <span className="font-semibold text-wl-blue">club basketball</span> with friends, I
              thrive in environments that demand focus, strategy, and teamwork.
            </p>

            <p>
              Beyond sports, I grew up playing{' '}
              <span className="font-semibold text-wl-blue">card games with my family</span> since
              childhood—a pastime that taught me the value of calculated risk, reading people, and
              staying calm under pressure. These experiences shaped my approach to problem-solving
              and decision-making.
            </p>

            <p>
              At my core, I believe in{' '}
              <span className="font-semibold text-wl-blue">
                discipline, consistency, and a long-term growth mindset
              </span>
              . Whether in finance, entrepreneurship, or life, I&apos;m committed to continuous
              improvement and finding ways to create lasting value.
            </p>
          </div>

          {/* Photo Gallery - Coming Soon */}
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <p className="text-gray-500 text-lg font-medium">Photo Gallery</p>
              <p className="text-gray-400 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
