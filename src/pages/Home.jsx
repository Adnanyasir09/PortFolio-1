import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-screen text-white px-6"
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }}
  >
    {/* Hero Section */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
      {/* Left Content */}
      <div className="text-center md:text-left md:max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-yellow-300">Adnan Yasir</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          AI/ML & Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
          Passionate about building scalable web apps, solving complex problems
          with technology, and creating impactful digital solutions using modern
          frameworks.
        </p>

        {/* Buttons */}
<div className="flex flex-wrap justify-center md:justify-start gap-5 mb-8">
  {/* Resume Button */}
  <a
    href="https://drive.google.com/file/d/1SXJB27w2-9Mbo-ilF2uzgiv5Kd4XpGeF/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
  >
    🚀 Download Resume
  </a>

  {/* Get In Touch Button */}
  <button
    onClick={() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition"
  >
    📩 Get In Touch
  </button>
</div>



        
      </div>

      {/* Right Profile Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="pf5.jpeg"
          alt="Adnan Yasir"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white shadow-2xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default Home;
