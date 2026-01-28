'use client';

const Experience = () => {
  const education = [
    {
      institution: 'Washington and Lee University',
      location: 'Lexington, VA',
      degree: 'B.A. in Economics and Accounting, Minor in Philosophy',
      gpa: '3.93',
      dates: 'Class of 2028',
      highlights: [
        'Relevant Courses Through May 2026: Managerial Finance, Corporate Financial Accounting, Business Analytics, ECON-100',
        'Honorable Mention, Writing Award for "The Monster Was Never In Your Closet" - 1 of 8 students out of 400 applicants',
      ],
    },
    {
      institution: 'Holy Family High School',
      location: 'Broomfield, CO',
      degree: '',
      dates: 'Class of 2024',
      highlights: [
        "Principal's Honor Roll every semester",
        'Golf Regional Champions (x2)',
        'Captain for Varsity Golf, NHS Curator of Academic Inductions',
      ],
    },
  ];

  const professionalExperience = [
    {
      company: 'AMB Investment Banking (Remote Internship)',
      location: 'Boulder, CO',
      role: 'Research Intern',
      dates: 'May - September 2025',
      responsibilities: [
        'Conduct comprehensive research on private equity firms and build target lists aligned with sellside and buyside objectives',
        "Verify each firm's investment criteria, sub-sector focuses, and identify key contacts to support targeted outreach",
        "Deliver summaries that assist AMB's industry research, pitch materials, and go-to-market strategies",
      ],
    },
    {
      company: 'Lucky Pie Pizza',
      location: 'Louisville, CO',
      role: 'Busser/Server',
      dates: 'June - August 2025',
      responsibilities: [
        'Supported a high-volume, upscale restaurant, coordinated with the kitchen and service team, and managed weekend shifts',
        'Went beyond core duties by maintaining outdoor area, managing customers, and helping with dishwashing and restocking',
      ],
    },
    {
      company: 'Freelance Entrepreneur',
      location: 'Boulder, CO',
      role: 'E-commerce Product Sourcing and Resale Specialist',
      dates: 'Summer 2023 - Present',
      responsibilities: [
        'Research high-demand products across multiple marketplaces, purchase at discounted prices, and resell for a profit',
        'Clean, refurbish, and improve products to increase market value, consistently achieving strong profit margins',
        'Coordinate the transportation of sold goods, maintain inventories, and advertise products on several e-commerce sites',
      ],
    },
    {
      company: 'Water World',
      location: 'Federal Heights, CO',
      role: 'Deep Lifeguard',
      dates: 'Summer 2022 – 2024',
      responsibilities: [
        'Implemented safety measures, performed frequent pool inspections, and monitored for hazards to maintain a safe environment for thousands of guests at one of the largest water parks in the world',
        'Participated and later led specialized lifeguard training and actively pursued advanced certifications to stay current on water safety practices and emergency response protocols',
      ],
    },
  ];

  const leadership = [
    {
      organization: 'Sigma Chi Fraternity Zeta Chapter',
      location: 'Lexington, VA',
      role: 'Rush Chair',
      dates: '2024-Present',
      description: [
        'Manage rush budget, outreach, event logistics and synthesize feedback on potential candidates for group decisions',
      ],
    },
    {
      organization: 'RWEsearch & Health Innovation Summit',
      location: '',
      role: 'Guest Speaker',
      dates: 'September 2025',
      description: [
        'Delivered a talk and engaged with key opinion leaders on the future of artificial intelligence in education, drawing on personal experiences and highlighting opportunities for democratization and innovation',
      ],
    },
    {
      organization: 'World Affairs Challenge',
      location: 'Louisville, CO',
      role: 'Champion Group Lead and Speaker',
      dates: '2020-2021',
      description: [
        'Led a team of students to develop a fully functional solar stove, winning the national World Affairs Challenge',
        'Oversaw research, prototype, and presentation while assigning roles and presenting to judging panels under strict time limits',
      ],
    },
  ];

  const skills = {
    technical: ['Microsoft Office Suite', 'Python', 'Trend Analysis', 'Public Speaking'],
    certifications: ['Wall Street Prep', 'Lifeguard', 'CPR', 'Scuba diving'],
    interests: [
      'Golf',
      'Basketball',
      'Volunteering',
      'Business',
      'Fitness',
      'Emerging Technology',
      'Stock Trading',
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
