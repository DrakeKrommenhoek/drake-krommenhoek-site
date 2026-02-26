'use client';

const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-10">
    <p className="section-label">{label}</p>
    <h3
      style={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontSize: '1.9rem',
        fontWeight: 600,
        color: '#002147',
        letterSpacing: '-0.01em',
        marginBottom: '0.5rem',
      }}
    >
      {title}
    </h3>
    <div style={{ width: '2rem', height: '1px', backgroundColor: '#9B8B5E' }} />
  </div>
);

const BulletItem = ({ text }: { text: string }) => (
  <li className="flex items-start" style={{ gap: '0.75rem' }}>
    <span style={{ color: '#9B8B5E', marginTop: '0.45rem', flexShrink: 0, fontSize: '0.5rem' }}>◆</span>
    <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.65 }}>
      {text}
    </span>
  </li>
);

const Experience = () => {
  const education = [
    {
      institution: 'Washington and Lee University',
      location: 'Lexington, VA',
      degree: 'Bachelor of Science — Major: Economics & Accounting, Minor: Philosophy',
      gpa: '3.8',
      dates: 'Class of 2028',
      highlights: [
        'Relevant Courses Through May 2026: Managerial Finance, Accounting, Business Analytics, Microeconomic Theory',
        'Awards: Writing Award for "The Monster Was Never In Your Closet" – 1 out of 8 students selected from 400+ applicants',
      ],
    },
    {
      institution: 'Holy Family High School',
      location: 'Broomfield, CO',
      degree: '',
      dates: 'Class of 2024',
      highlights: [
        "Honors and Awards: Principal's Honor Roll every semester, Golf Regional Champions (x2)",
        'Activities: Captain for Varsity Golf, NHS Curator of Academic Inductions',
      ],
    },
  ];

  const professionalExperience = [
    {
      company: 'AMB Investment Banking',
      location: 'Remote',
      role: 'Target Client Research Intern',
      dates: 'May 2025 – September 2025',
      responsibilities: [
        'Conducted research on PE firms and built target lists aligned with sellside and buyside objectives',
        "Delivered timely summaries that assisted AMB's industry research, pitch materials, and go-to-market strategies",
      ],
    },
    {
      company: 'Lucky Pie Pizza',
      location: 'Louisville, CO',
      role: 'Server',
      dates: 'June 2025 – August 2025',
      responsibilities: [
        'Improved operational efficiency serving guests, ensuring customer satisfaction, upselling menu items, and communicating with a team at a fast paced, upscale pizza restaurant serving 300+ customers daily',
      ],
    },
    {
      company: 'Freelance Entrepreneur',
      location: 'Boulder, CO',
      role: 'E-commerce Product Sourcing & Resale',
      dates: 'May 2023 – September 2025',
      responsibilities: [
        'Researched and forecasted high-demand products from multiple marketplaces, contacted manufacturers and shipping agents, purchased at below market value and resold across several e-commerce platforms',
        'Sold 50+ items, generating $2,200+ in profit with average margins of 40% while retaining 98% customer satisfaction',
      ],
    },
    {
      company: 'Water World Colorado',
      location: 'Denver, CO',
      role: 'Advanced Deep Dive Lifeguard',
      dates: 'June 2022 – August 2024',
      responsibilities: [
        'Maintained safety at one of the largest water parks in the world, averaging 10+ saves per summer',
        'Led specialized trainings and advanced certification courses to strengthen response effectiveness',
      ],
    },
  ];

  const leadership = [
    {
      organization: 'Connolly Entrepreneurship Society',
      location: 'Lexington, VA',
      role: 'Member',
      dates: 'January 2026 – Present',
      description: [
        'Selected to elite team to develop a startup idea, build pitch decks, and present progress to secure funding',
        'Commit 6+ hours weekly to research, product design, web development, and alumni mentorship',
      ],
    },
    {
      organization: 'Sigma Chi Fraternity — Zeta Chapter',
      location: 'Lexington, VA',
      role: 'Rush Chair',
      dates: 'August 2025 – Present',
      description: [
        'Manage rush budget, event logistics, outreach, and new member evaluation for group decisions',
      ],
    },
    {
      organization: 'RWEsearch & Health Innovation Summit — HealthArk',
      location: '',
      role: 'Student Guest Speaker',
      dates: 'September 2025',
      description: [
        'Qualified alongside international candidates to present at RWE conference',
        'Collaborated with top industry leaders on the future of AI in Healthcare & Life Sciences',
      ],
    },
  ];

  const skills = {
    technical: ['MS Excel', 'PowerPoint', 'Claude Code', 'Canva'],
    certifications: ['Wall Street Prep', 'PADI Open Water', 'Lifeguard', 'CPR', '3D Design (In Progress)'],
    interests: ['Golf', 'Travel', 'Basketball', 'SCUBA', 'Pickleball', 'Stock Trading', 'Euchre'],
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderLeft: '2px solid #C4AE78',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    transition: 'box-shadow 0.3s, border-color 0.3s',
  };

  const eduCardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E8E4',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  return (
    <section id="experience" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">Background</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Experience</h2>
          <div className="section-divider" />
        </div>

        {/* Education */}
        <div className="mb-16">
          <SectionHeader label="Academic" title="Education" />
          <div>
            {education.map((edu, index) => (
              <div key={index} style={eduCardStyle}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#002147',
                      marginBottom: '0.2rem',
                    }}>{edu.institution}</h4>
                    {edu.degree && (
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: '#9B8B5E', fontWeight: 500, marginBottom: '0.1rem' }}>
                        {edu.degree}
                      </p>
                    )}
                    {edu.gpa && (
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', color: '#6B7280' }}>
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <div className="md:text-right mt-2 md:mt-0">
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', fontWeight: 500, color: '#374151' }}>{edu.location}</p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: '#9CA3AF' }}>{edu.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-3">
                  {edu.highlights.map((highlight, i) => (
                    <BulletItem key={i} text={highlight} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <SectionHeader label="Career" title="Professional Experience" />
          <div>
            {professionalExperience.map((exp, index) => (
              <div key={index} style={cardStyle}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#002147',
                      marginBottom: '0.15rem',
                    }}>{exp.company}</h4>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: '#9B8B5E', fontWeight: 500, letterSpacing: '0.02em' }}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="md:text-right mt-2 md:mt-0">
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', fontWeight: 500, color: '#374151' }}>{exp.location}</p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#9CA3AF' }}>{exp.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-3">
                  {exp.responsibilities.map((resp, i) => (
                    <BulletItem key={i} text={resp} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <SectionHeader label="Involvement" title="Leadership & Activities" />
          <div>
            {leadership.map((item, index) => (
              <div key={index} style={cardStyle}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#002147',
                      marginBottom: '0.15rem',
                    }}>{item.organization}</h4>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: '#9B8B5E', fontWeight: 500 }}>
                      {item.role}
                    </p>
                  </div>
                  <div className="md:text-right mt-2 md:mt-0">
                    {item.location && (
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', fontWeight: 500, color: '#374151' }}>{item.location}</p>
                    )}
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#9CA3AF' }}>{item.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-3">
                  {item.description.map((desc, i) => (
                    <BulletItem key={i} text={desc} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <SectionHeader label="Capabilities" title="Skills & Interests" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { label: 'Technical Skills', items: skills.technical },
              { label: 'Certifications', items: skills.certifications },
              { label: 'Interests', items: skills.interests },
            ].map(({ label, items }) => (
              <div key={label} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E4', padding: '1.5rem' }}>
                <h4 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#9B8B5E',
                  marginBottom: '1rem',
                }}>{label}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {items.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.78rem',
                        fontWeight: 400,
                        color: '#003580',
                        backgroundColor: '#EDF3FB',
                        padding: '0.25rem 0.75rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
