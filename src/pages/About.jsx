import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-white text-gray-900 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 relative"
        >
          About Me
          <span className="block w-16 h-1 bg-purple-500 mx-auto mt-2 rounded"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - About + Education */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              I'm a passionate Computer Science Engineer currently pursuing my
              B.Tech at Kiet Group Of Institutions, Ghaziabad. With a strong
              foundation in computer science and hands-on experience in
              Full-Stack Development, I enjoy building scalable web applications
              and intuitive user interfaces with modern technologies. I
              specialize in both frontend and backend systems.
            </motion.p>

            {/* Education Section */}
            <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
              Education
            </h3>
            <div className="space-y-8 border-l-4 border-purple-400 pl-6">
              <div>
                <p className="text-purple-600 font-semibold">2022 - 2026</p>
                <h4 className="text-xl font-semibold text-gray-900">
                  B.Tech in Computer Science
                </h4>
                <p className="text-gray-700">
                  Kiet Group Of Institutions, Ghaziabad
                </p>
                <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-700 rounded-full">
                  CGPA: 7.1
                </span>
              </div>

              <div>
                <p className="text-purple-600 font-semibold">2022</p>
                <h4 className="text-xl font-semibold text-gray-900">
                  Class XII – Science with Maths
                </h4>
                <p className="text-gray-700">
                  St Paul's Inter College, Shahjahanpur
                </p>
                <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-700 rounded-full">
                  80.2%
                </span>
              </div>
            </div>
          </div>

          {/* Right - Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Technical Skills
            </h3>

            {/* Programming Languages */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-3">
                {["C++", "Python", "Java"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React JS",
                  "Node JS",
                  "Express JS",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Tools</h4>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "Git/Github", "Postman"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Coursework</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Data Structures",
                  "Operating Systems",
                  "Computer Networks",
                  "Database Management Systems",
                  "Operating Systems",
                  "Object-Oriented Programming",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
