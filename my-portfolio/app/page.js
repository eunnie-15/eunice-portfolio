export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">
          Eunice<span className="text-blue-600">.</span>
        </h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-600">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-[80vh] px-6">
        <img
          src="/eunice-img-portfolio.jpg"
          alt="Eunice profile photo"
          className="w-40 h-40 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I’m <span className="text-blue-600">Eunice</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-6">
            Welcome to my portfolio — a space where I share my journey, skills, and projects.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-800 transition"
          >
            View My Work
          </a>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m Faith, a beginner web developer exploring Next.js, React, and Tailwind CSS.
            I enjoy learning new technologies, building creative projects, and growing my skills
            step by step. My goal is to create clean, professional, and user-friendly designs
            that reflect both functionality and personality.
          </p>
        </div>
      </section>

      <section id="skills" className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800">HTML</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800">CSS</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800">JavaScript</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800">React</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800">Next.js</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800">Tailwind CSS</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded shadow hover:shadow-lg transition p-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Project Title 1</h4>
              <p className="text-gray-700 mb-4">
                Short description of your project goes here. Explain what it does, what technologies you used, and why it matters.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                View Project →
              </a>
            </div>
            <div className="bg-white rounded shadow hover:shadow-lg transition p-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Project Title 2</h4>
              <p className="text-gray-700 mb-4">
                Another project description here. Keep it concise but informative, highlighting your role and the outcome.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Education & Learning Journey
          </h3>
          <div className="space-y-8">
            <div className="bg-gray-100 rounded shadow p-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Bachelor’s Degree (Placeholder)
              </h4>
              <p className="text-gray-700">University Name — Field of Study, Year</p>
            </div>
            <div className="bg-gray-100 rounded shadow p-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Simplilearn Excel Course
              </h4>
              <p className="text-gray-700">Self-paced online learning, 2026</p>
            </div>
            <div className="bg-gray-100 rounded shadow p-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Next.js & Web Development Journey
              </h4>
              <p className="text-gray-700">
                Hands-on practice with React, Tailwind CSS, and portfolio building.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact</h3>
          <p className="text-lg text-gray-700 mb-8">
            Interested in working together or just want to say hello? Feel free to reach out!
          </p>
          <div className="space-y-4">
            <p className="text-gray-800">
              📧 Email: {" "}
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                your.email@example.com
              </a>
            </p>
            <p className="text-gray-800">
              🌐 LinkedIn: {" "}
              <a href="#" className="text-blue-600 hover:underline">
                linkedin.com/in/yourprofile
              </a>
            </p>
            <p className="text-gray-800">
              🐦 Twitter: {" "}
              <a href="#" className="text-blue-600 hover:underline">
                @yourhandle
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-6 px-6 text-center">
        <p className="text-gray-700">
          © {new Date().getFullYear()} Faith. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-blue-600">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">
            Projects
          </a>
          <a href="#education" className="text-gray-600 hover:text-blue-600">
            Education
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
