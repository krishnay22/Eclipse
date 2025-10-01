const VRHeadsetComparison = () => {
  return (
    <div className="bg-[#1d1d1f] text-white min-h-screen px-6 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 px-4 md:px-12 gap-4 md:gap-0">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Explore the future of VR.
          </h1>
        </div>

        {/* Right Section */}
        <a
          href="#"
          className="text-blue-400 hover:underline text-sm flex items-center gap-1 self-start md:self-auto"
        >
          Explore all VR headsets
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </a>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto bg-[#000000] rounded-2xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/044/277/221/non_2x/young-girl-exploring-vast-opportunities-of-virtual-reality-with-vr-headset-on-isolated-transparent-background-free-png.png"
              alt="Apple Vision Pro"
              className="mx-auto w-48 md:w-60 mb-6"
            />

            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                className="opacity-60"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <h2 className="text-2xl font-bold">Apple Vision Pro</h2>
            </div>

            <p className="text-gray-400 mt-2 mb-4">
              The most advanced mixed reality <br />
              experience ever created.
            </p>
            <p className="text-gray-300 text-sm">
              From $3,499 or $291.58/mo. for 12 mo.†
            </p>
            <div className="mt-4">
              <button className="text-sm text-gray-400">
                Currently viewing
              </button>
              <a
                href="#"
                className="ml-4 text-blue-400 hover:underline text-sm flex items-center justify-center gap-1"
              >
                Buy
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/044/277/221/non_2x/young-girl-exploring-vast-opportunities-of-virtual-reality-with-vr-headset-on-isolated-transparent-background-free-png.png"
              alt="Meta Quest 3"
              className="mx-auto w-48 md:w-60 mb-6"
            />

            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                className="opacity-60"
              >
                <path d="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,10.5A1.5,1.5 0 0,0 12.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,12M18.5,10.5A1.5,1.5 0 0,0 17,9A1.5,1.5 0 0,0 15.5,10.5A1.5,1.5 0 0,0 17,12A1.5,1.5 0 0,0 18.5,10.5Z" />
              </svg>
              <h2 className="text-2xl font-bold">Meta Quest 3</h2>
            </div>

            <p className="text-gray-400 mt-2 mb-4">
              Breakthrough mixed reality powered by <br />
              next-gen Snapdragon technology.
            </p>
            <p className="text-gray-300 text-sm">
              From $499 or $41.58/mo. for 12 mo.†
            </p>
            <div className="mt-4">
              <button className="text-sm text-gray-400">
                Currently viewing
              </button>
              <a
                href="#"
                className="ml-4 text-blue-400 hover:underline text-sm flex items-center justify-center gap-1"
              >
                Buy
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          {/* Apple Vision Pro Specs */}
          <div className="space-y-8">
            {/* Chip */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center mb-3">
                <span className="text-black text-xs font-bold">M2</span>
              </div>
              <p className="text-white text-sm font-medium">Apple M2 chip</p>
              <p className="text-white text-sm font-medium">R1 co-processor</p>
            </div>

            {/* Display */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="32" viewBox="0 0 48 32" fill="white">
                  <rect
                    x="4"
                    y="4"
                    width="40"
                    height="24"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="24" cy="16" r="3" fill="white" />
                  <circle cx="16" cy="12" r="1" fill="white" />
                  <circle cx="32" cy="12" r="1" fill="white" />
                  <circle cx="16" cy="20" r="1" fill="white" />
                  <circle cx="32" cy="20" r="1" fill="white" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">4K Micro-OLED</p>
              <p className="text-white text-sm font-medium">
                23 million pixels per eye
              </p>
              <p className="text-white text-sm font-medium">
                90Hz refresh rate
              </p>
            </div>

            {/* Cameras */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="32" viewBox="0 0 48 32" fill="white">
                  <rect
                    x="6"
                    y="8"
                    width="36"
                    height="20"
                    rx="3"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="24"
                    cy="18"
                    r="6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="24" cy="18" r="3" fill="white" />
                  <rect x="32" y="10" width="4" height="3" fill="white" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">12 cameras</p>
              <p className="text-white text-sm font-medium">
                6 external tracking cameras
              </p>
              <p className="text-white text-sm font-medium">
                5 internal eye-tracking sensors
              </p>
            </div>

            {/* Audio */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-4 28h-4V16h4v16zm8 0h-4V16h4v16zm8-16h-4V16h4v-4h-4V8h4v4h4v4h-4v4h4v4h-4v4h-4V20h4v-4z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Spatial Audio with dynamic head tracking
              </p>
              <p className="text-white text-sm font-medium">
                Dual drivers in each audio pod
              </p>
            </div>

            {/* Input */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-4 12h-4v4h4v-4zm8 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm8 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm8 0h-4v4h4v-4z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Hand and eye tracking
              </p>
              <p className="text-white text-sm font-medium">
                No external controllers needed
              </p>
            </div>
          </div>

          {/* Meta Quest 3 Specs */}
          <div className="space-y-8">
            {/* Chip */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center mb-3">
                <span className="text-black text-xs font-bold">M3</span>
              </div>
              <p className="text-white text-sm font-medium">
                Snapdragon XR2 Gen 2
              </p>
              <p className="text-white text-sm font-medium">
                2x the GPU processing power of Quest 2
              </p>
            </div>

            {/* Display */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="32" viewBox="0 0 48 32" fill="white">
                  <rect
                    x="4"
                    y="4"
                    width="40"
                    height="24"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 12h8v2h-8zm0 4h12v2H12zm0 4h6v2h-6z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                2064x2208 LCD per eye
              </p>
              <p className="text-white text-sm font-medium">
                90Hz refresh rate (120Hz experimental)
              </p>
            </div>

            {/* Cameras */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="32" viewBox="0 0 48 32" fill="white">
                  <rect
                    x="6"
                    y="8"
                    width="36"
                    height="20"
                    rx="3"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="18"
                    r="4"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="28"
                    cy="18"
                    r="4"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="20" cy="18" r="2" fill="white" />
                  <circle cx="28" cy="18" r="2" fill="white" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                2 RGB cameras for passthrough
              </p>
              <p className="text-white text-sm font-medium">1 depth sensor</p>
              <p className="text-white text-sm font-medium">
                4 IR cameras for tracking
              </p>
            </div>

            {/* Audio */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-4 28h-4V16h4v16zm8 0h-4V16h4v16zm8-16h-4V16h4v-4h-4V8h4v4h4v4h-4v4h4v4h-4v4h-4V20h4v-4z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Integrated stereo speakers
              </p>
              <p className="text-white text-sm font-medium">3D spatial audio</p>
            </div>

            {/* Input */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-4 12h-4v4h4v-4zm8 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm8 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm8 0h-4v4h4v-4z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Touch Plus controllers
              </p>
              <p className="text-white text-sm font-medium">
                Advanced hand tracking 2.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRHeadsetComparison;
