'use client';

import { useInView, fadeInStyle } from '@/hooks/useInView';

const Upcoming = () => {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="upcoming"
      ref={ref}
      className="bg-white"
      style={fadeInStyle(isInView)}
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">What&apos;s next</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Upcoming</h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div style={{
            backgroundColor: '#002147',
            padding: '2.5rem',
          }}>
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <p style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C4AE78',
                  marginBottom: '0.5rem',
                }}>Private Equity</p>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                  marginBottom: '0.3rem',
                }}>
                  Mountaingate Capital
                </h3>
                <p style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 300,
                }}>Intern</p>
              </div>
              <div className="mt-3 md:mt-0 md:text-right">
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>
                  Denver, CO
                </p>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.15rem' }}>
                  June 2026 – August 2026
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: 'rgba(196,174,120,0.25)', marginBottom: '1.5rem' }} />

            {/* Bullets */}
            <ul className="space-y-3">
              {[
                'Support the Mountaingate team by preparing research, diligence materials, and analyses for partners to execute platform and add-on transactions',
                'Hands-on experience related to acquisitions, financial modeling, market research, due diligence, and related activities',
              ].map((item, i) => (
                <li key={i} className="flex items-start" style={{ gap: '0.75rem' }}>
                  <span style={{ color: '#9B8B5E', marginTop: '0.42rem', flexShrink: 0, fontSize: '0.45rem' }}>◆</span>
                  <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, fontWeight: 300 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
