import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-100 via-teal-50 to-white
 px-6 py-20"
    >
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded"></div>

        {/* Subtext */}
        <p className="text-gray-600 mb-16 text-lg leading-relaxed max-w-3xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on innovative
          projects, or simply connect with fellow tech enthusiasts.  
          Let’s work together and create something amazing!
        </p>

        {/* Contact Info (Card style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Email */}
          <div className="group bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-white mb-4 group-hover:scale-110 transition">
                <FaEnvelope className="text-2xl" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Email</p>
              <a
                href="mailto:mr.adnan.yasir@gmail.com"
                className="text-indigo-600 hover:underline text-base font-medium mt-1"
              >
                mr.adnan.yasir@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-white mb-4 group-hover:scale-110 transition">
                <FaPhone className="text-2xl" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Phone</p>
              <a
                href="tel:+919971458997"
                className="text-indigo-600 hover:underline text-base font-medium mt-1"
              >
                +91 9971458997
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="group bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-white mb-4 group-hover:scale-110 transition">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Location</p>
              <p className="text-gray-600 text-base font-medium mt-1">
                Ghaziabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <a
            href="https://www.linkedin.com/in/adnan-yasir-582691257/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>

          <a
            href="https://github.com/Adnanyasir09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold hover:opacity-90 hover:scale-105 transition"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
