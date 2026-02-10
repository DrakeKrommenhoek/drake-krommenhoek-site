const Upcoming = () => {
  return (
    <section id="upcoming" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title">Upcoming Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="card border-2 border-wl-blue-lighter">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-2xl font-bold text-wl-blue mb-2">
                  Private Equity Intern
                </h3>
                <p className="text-xl text-gray-900 font-medium">Mountaingate Capital</p>
              </div>
              <div className="text-gray-600 mt-2 md:mt-0 md:text-right">
                <p className="font-medium text-lg">Denver, CO</p>
                <p className="text-lg">June 2026 – August 2026</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-wl-blue mr-2 mt-1">•</span>
                <span className="text-gray-700">
                  Support the Mountaingate Team by preparing research, diligence materials, and analyses for partners to execute platform and add-on transactions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-wl-blue mr-2 mt-1">•</span>
                <span className="text-gray-700">
                  Hands-on experience related to acquisitions, financial modeling, market research, due diligence and related activities
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Excited to join Mountaingate Capital for Summer 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
