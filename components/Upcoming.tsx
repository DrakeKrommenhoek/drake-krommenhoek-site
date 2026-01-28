const Upcoming = () => {
  return (
    <section id="upcoming" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title">Upcoming Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="card border-2 border-wl-blue-lighter">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-wl-blue mb-2">
                  Incoming Summer 2026 Intern
                </h3>
                <p className="text-xl text-gray-900 font-medium">MountainGate Capital</p>
              </div>
              <div className="text-gray-600 mt-4 md:mt-0 md:text-right">
                <p className="font-medium text-lg">June – August 2026</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Excited to join MountainGate Capital for Summer 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
