import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-100
 p-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 drop-shadow-lg">
        🚀 My Projects
      </h1>

      {/* Project Container - Vertical Stack */}
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={project.isLatest ? { opacity: 0, y: 30 } : {}}
            animate={project.isLatest ? { opacity: 1, y: 0 } : {}}
            transition={
              project.isLatest ? { duration: 0.6, ease: "easeOut" } : {}
            }
            className="bg-white/70 backdrop-blur-lg shadow-xl rounded-xl p-4 flex flex-col text-center transition transform duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {project.emoji} {project.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>

            {/* Responsive Image Box */}
            <div className="mt-3 w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Tech Stack Pills */}
            {project.techStack && (
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Button */}
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-1.5 text-sm rounded-md shadow hover:bg-blue-700 transition"
              >
                {project.buttonText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Project Data
const projectsData = [
  {
    title: "MatchMarry",
    description:
      "A social networking platform to find and connect with your life partner.",
    image: "Matchmarry.png",
    link: "https://matchmarry.vercel.app/",
    buttonText: "Explore Now",
    emoji: "🌐",
    isLatest: true,
    techStack: ["React", "MongoDB", "Socket.io", "Node.js"],
  },
  {
    title: "LeadSphere",
    description:
      "Task management platform with JWT-secure roles, CSV uploads, and automated distribution",
    image: "kp1.png",
    link: "https://lead-sphere-pf82.vercel.app/",
    buttonText: "Try Now",
    emoji: "💬",
    isLatest: true,
    techStack: ["React", "MongoDB", "Express.js", "Node.js"],
  },
  {
    title: "Hybrid RAG System: SQL + Document Retrieval",
    description: "Advanced RAG pipeline combining SQL queries and Wikipedia retrieval with chat for rapid city insights",
    image: "kp2.png",
    link: "https://tkphba6pfofzmvnubafj9y.streamlit.app/",
    buttonText: "Explore Now",
    emoji: "🤖",
  },
  {
    title: "Git LLAMA 🦥 - GitHub Code Chatbot",
    description: "Streamlit-powered tool to analyze GitHub repositories with natural language queries.",
    image: "kp4.png",
    link: "https://gitllama-n9fxyjysctwz9nwnx4wvv4.streamlit.app/",
    buttonText: "Try It Out",
    emoji: "",
  },
  
];

export default Projects;
