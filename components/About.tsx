'use client';

import { useInView, fadeInStyle } from '@/hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView<HTMLElement>();
  return (
    <section
      id="about"
      ref={ref}
      className="bg-white"
      style={fadeInStyle(isInView)}
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">The person behind the resume</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Who Am I</h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="space-y-7"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#374151',
              fontWeight: 300,
            }}
          >
            <p>
              Born in <strong style={{ fontWeight: 500, color: '#002147' }}>Arizona</strong> and raised in{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>Rapid City, South Dakota</strong>, I spent my
              formative years in the heart of the Great Plains before moving to{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>Colorado</strong>, where I&apos;ve lived for
              over a decade. Now I&apos;m pursuing my education at{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>Washington and Lee University</strong> in
              Lexington, Virginia.
            </p>

            <p>
              Competition has always been a driving force. Whether it was four years of{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>high school golf</strong> — serving as team
              captain and helping secure back-to-back regional championships — or playing{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>club basketball</strong> with friends, I thrive
              in environments that demand focus, strategy, and teamwork.
            </p>

            <p>
              Beyond sports, I grew up playing{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>card games with my family</strong> since
              childhood — a pastime that taught me the value of calculated risk, reading people, and staying calm
              under pressure. These habits shaped how I approach problems and decisions today.
            </p>

            <p>
              At my core, I believe in{' '}
              <strong style={{ fontWeight: 500, color: '#002147' }}>discipline, consistency, and a long-term
              growth mindset</strong>. Whether in finance, entrepreneurship, or life, I&apos;m committed to
              continuous improvement and finding ways to create lasting value.
            </p>
          </div>

          {/* Pull quote */}
          <div
            className="mt-14"
            style={{
              borderLeft: '2px solid #C4AE78',
              paddingLeft: '1.5rem',
            }}
          >
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.45rem',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#002147',
              lineHeight: 1.5,
              letterSpacing: '0.005em',
            }}>
              &ldquo;Discipline, curiosity, and a relentless drive to improve — in everything I do.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
