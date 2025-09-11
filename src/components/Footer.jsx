import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const VRFooter = () => {
  return (
    <footer className="bg-black text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                "VR Headsets",
                "Meta Quest 3",
                "Apple Vision Pro",
                "Controllers",
                "Hand Tracking",
                "Accessories",
                "VR Stands",
                "Charging Stations",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Store</h3>
            <ul className="space-y-2">
              {[
                "Find a Store",
                "VR Experience Centers",
                "Online Store",
                "Trade-In Program",
                "Financing Options",
                "Order Status",
                "Shipping Info",
                "Returns",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Setup Guide",
                "VR Safety",
                "Troubleshooting",
                "Software Updates",
                "Community Forums",
                "Live Chat",
                "Contact Support",
                "Warranty",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer & Business */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Developer & Business
            </h3>
            <ul className="space-y-2">
              {[
                "VR SDK",
                "Documentation",
                "Unity Integration",
                "Unreal Engine",
                "VR for Enterprise",
                "Training Solutions",
                "Bulk Orders",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {[
                "About Us",
                "Leadership",
                "Careers",
                "Newsroom",
                "Investor Relations",
                "Sustainability",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Info */}
        <p className="text-sm text-gray-500">
          © 2025 VR Corp. All rights reserved.
        </p>

        {/* Social Icons (monochrome) */}
        <div className="flex space-x-4">
          {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-500 transition-colors duration-200"
            >
              <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>

      {/* Legal Links */}
      <div className="max-w-7xl mx-auto px-6 pb-8 text-sm text-gray-500 space-x-4 flex flex-wrap justify-center">
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white">
          Terms of Use
        </a>
        <a href="#" className="hover:text-white">
          Accessibility
        </a>
        <a href="#" className="hover:text-white">
          Cookie Settings
        </a>
      </div>
    </footer>
  );
};

export default VRFooter;
