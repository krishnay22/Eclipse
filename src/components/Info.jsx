const Info = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-left">
          <h1 className="text-7xl md:text-8xl lg:text-7xl font-bold tracking-tight mb-8">
            Enter the Future.
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div>
              <span className="text-gray-400 text-xl">Introducing </span>
              <span className="text-white text-2xl md:text-3xl font-semibold block mt-2">
                Horizon VR, the next step in immersive reality.
              </span>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                Horizon VR redefines what’s possible in virtual experiences.
                Step into breathtakingly real worlds powered by cutting-edge
                optics, ultra-low latency, and spatial audio. Whether you’re
                gaming, exploring, or creating, Horizon VR places you at the
                center of every moment with seamless motion tracking and
                cinematic clarity. <br />
                <span className="font-bold text-white">
                  This is not just VR — it’s presence.
                </span>
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-xl inline-flex items-center group transition-colors duration-200"
              >
                Discover Horizon VR
                <svg
                  className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Performance Stats */}
          <div className="space-y-10 text-sm md:text-base">
            <div>
              <div className="text-gray-400 mb-1">Up to</div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                8K clarity
              </div>
              <div className="text-gray-400">
                dual-eye resolution with HDR precision
              </div>
            </div>

            <div>
              <div className="text-gray-400 mb-1">As low as</div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                2ms latency
              </div>
              <div className="text-gray-400">
                ultra-smooth motion tracking for unmatched immersion
              </div>
            </div>

            <div>
              <div className="text-gray-400 mb-1">Over</div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                1000+ worlds
              </div>
              <div className="text-gray-400">
                already available to explore in Horizon VR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
