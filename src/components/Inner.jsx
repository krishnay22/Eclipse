import Image from "../../public/image/image02.png";

const SafetyFeatures = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Image + Title */}
        <div>
          <p className="text-gray-400 text-sm mb-2">New standards</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Advanced safety <br /> features
          </h1>
          <img
            src={Image}
            alt="Jet tail"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right side: Text content */}
        <div>
          <h2 className="text-xl font-semibold mb-4">T-tail design</h2>
          <p className="text-gray-300 leading-relaxed">
            The T-tail configuration, combined with a variable incidence
            horizontal stabiliser, enhances stability and control during
            critical phases of flight, such as takeoff and landing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyFeatures;
