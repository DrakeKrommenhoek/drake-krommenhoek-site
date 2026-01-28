const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wl-blue text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Drake Krommenhoek</h3>
            <p className="text-wl-blue-lightest">
              Washington & Lee University student passionate about finance, entrepreneurship, and
              creating meaningful impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#upcoming"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  Upcoming
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  Who Am I
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:drake.krommenhoek@gmail.com"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  drake.krommenhoek@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:dkrommenhoek@mail.wlu.edu"
                  className="text-wl-blue-lightest hover:text-white transition-colors"
                >
                  dkrommenhoek@mail.wlu.edu
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/drakekrommenhoek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wl-blue-lightest hover:text-white transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wl-blue-light pt-8 text-center text-wl-blue-lightest">
          <p>&copy; {currentYear} Drake Krommenhoek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
