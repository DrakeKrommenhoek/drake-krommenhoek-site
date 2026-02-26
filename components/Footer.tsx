const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#002147', color: '#FFFFFF', padding: '3.5rem 0 2.5rem' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              fontStyle: 'italic',
              color: '#FFFFFF',
              marginBottom: '0.75rem',
              letterSpacing: '0.01em',
            }}>
              Drake Krommenhoek
            </h3>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.65,
              maxWidth: '22ch',
            }}>
              W&amp;L student — finance, entrepreneurship, and meaningful impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C4AE78',
              marginBottom: '1rem',
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2">
              {[
                { label: 'Experience', href: '#experience' },
                { label: 'Upcoming', href: '#upcoming' },
                { label: 'Who Am I', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C4AE78',
              marginBottom: '1rem',
            }}>Connect</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2">
              {[
                { label: 'drake.krommenhoek@gmail.com', href: 'mailto:drake.krommenhoek@gmail.com' },
                { label: 'dkrommenhoek@mail.wlu.edu', href: 'mailto:dkrommenhoek@mail.wlu.edu' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/drakekrommenhoek' },
                { label: 'Resume PDF', href: '/Krommenhoek_Resume_Feb.pdf' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.04em',
          }}>
            &copy; {currentYear} Drake Krommenhoek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
