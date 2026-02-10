'use client';

const Experience = () => {
  const education = [
    {
      institution: 'Washington and Lee University',
      location: 'Lexington, VA',
      degree: 'Bachelor of Science Major: Economics, Minor: Philosophy and Entrepreneurship',
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
      role: 'Busser/Server in training',
      dates: 'June 2025 – August 2025',
      responsibilities: [
        'Improved operational efficiency serving guests, ensuring customer satisfaction, upselling menu items, and communicating with a team at a fast paced, upscale pizza restaurant serving 300+ customers daily',
      ],
    },
    {
      company: 'Freelance Entrepreneur',
      location: 'Boulder, CO',
      role: 'E-commerce Fashion Product Sourcing and Resale Specialist',
      dates: 'May 2023 – September 2025',
      responsibilities: [
        'Researched and forecasted high-demand products from multiple marketplaces, contacted manufacturers and shipping agents, purchased at below market value resold across several e-commerce sites',
        'Sold 50+ items, generating $2200+ in profit with average margins of 40% while retaining 98% customer satisfaction',
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
      organization: 'Sigma Chi Fraternity Zeta Chapter',
      location: 'Lexington, VA',
      role: 'Rush Chair',
      dates: 'August 2025 – Present',
      description: [
        'Manage rush budget, event logistics, outreach, and new member evaluation for group decisions',
      ],
    },
    {
      organization: 'RWEsearch & Health Innovation Summit - HealthArk',
      location: '',
      role: 'Student Guest Speaker',
      dates: 'September 2025',
      description: [
        'Qualified with international candidates for presenting at RWE conference',
        'Collaborated with top industry leaders on the future of AI use cases in Healthcare & Life Sciences on panel',
      ],
    },
  ];

  const skills = {
    technical: ['MS Excel', 'PowerPoint', 'Claude Code', 'Canva'],
    certifications: ['Wall Street Prep', 'PADI Open Water', 'Lifeguard', 'CPR', '3D Design (In Progress)'],
    interests: [
      'Golf',
      'Travel',
      'Basketball',
      'SCUBA',
      'Pickleball',
      'Stock Trading',
      'Euchre',
    ],
  };

  return (
    <section id="experience" className="bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Experience</h2>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-wl-blue mb-8 border-b-2 border-wl-blue-lighter pb-2">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{edu.institution}</h4>
                    {edu.degree && (
                      <p className="text-wl-blue-light font-medium">{edu.degree}</p>
                    )}
                    {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-gray-600 md:text-right mt-2 md:mt-0">
                    <p className="font-medium">{edu.location}</p>
                    <p>{edu.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-wl-blue mr-2 mt-1">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-wl-blue mb-8 border-b-2 border-wl-blue-lighter pb-2">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {professionalExperience.map((exp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
                    <p className="text-wl-blue-light font-medium">{exp.role}</p>
                  </div>
                  <div className="text-gray-600 md:text-right mt-2 md:mt-0">
                    <p className="font-medium">{exp.location}</p>
                    <p>{exp.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-wl-blue mr-2 mt-1">•</span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-wl-blue mb-8 border-b-2 border-wl-blue-lighter pb-2">
            Leadership & Extracurricular Activities
          </h3>
          <div className="space-y-6">
            {leadership.map((item, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{item.organization}</h4>
                    <p className="text-wl-blue-light font-medium">{item.role}</p>
                  </div>
                  <div className="text-gray-600 md:text-right mt-2 md:mt-0">
                    {item.location && <p className="font-medium">{item.location}</p>}
                    <p>{item.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-wl-blue mr-2 mt-1">•</span>
                      <span className="text-gray-700">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold text-wl-blue mb-8 border-b-2 border-wl-blue-lighter pb-2">
            Skills & Interests
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="text-lg font-bold text-wl-blue mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-wl-blue-lightest text-wl-blue px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h4 className="text-lg font-bold text-wl-blue mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {skills.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-wl-blue-lightest text-wl-blue px-3 py-1 rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h4 className="text-lg font-bold text-wl-blue mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {skills.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-wl-blue-lightest text-wl-blue px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
