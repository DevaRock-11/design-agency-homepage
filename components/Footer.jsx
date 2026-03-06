import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            CreativeAgency
          </h2>
          <p className="text-gray-400">
            We create modern websites, apps, and digital experiences 
            that help businesses grow and succeed online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">Services</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} CreativeAgency. All rights reserved.
      </div>

    </footer>
  );
}