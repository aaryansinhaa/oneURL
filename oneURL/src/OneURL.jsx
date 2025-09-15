export default function OneURL() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="w-full text-center py-28 px-6 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 text-white">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">oneURL</h1>
        <p className="max-w-3xl mx-auto text-xl opacity-90 leading-relaxed">
          A modern, minimal, and efficient URL shortener project. Built for speed, scalability, and simplicity.
        </p>
      </section>

      {/* Project Description */}
      <section className="w-full py-20 px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Project Overview</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
            oneURL is designed to transform long, unwieldy links into short, shareable URLs. 
            Beyond shortening, it offers a foundation for analytics, custom aliases, and secure access control. 
            The project focuses on clean architecture and a scalable backend to handle large volumes of requests.
          </p>
        </div>
      </section>

      {/* System Design Section */}
<section className="w-full bg-gray-50 py-20 px-12 border-t">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">System Design</h2>
    <p className="text-lg text-center text-gray-600 mb-12">
      The architecture of oneURL is built around a RESTful API using Spring Boot, with a MySQL database for persistent storage.
      The frontend is developed with React, ensuring a responsive and intuitive user experience. The system is designed for horizontal scalability and high availability.
    </p>

    {/* System Design Diagram */}
    <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-white flex flex-col items-center justify-center p-6 mb-12">
      <img
        src="src/assets/system_design.jpg"
        alt="System Design Diagram"
        className="max-w-full max-h-[500px] object-contain rounded-xl"
      />
      <p className="text-gray-500 text-sm mt-4">System Architecture</p>
    </div>

    {/* Database Schema Diagram */}
    <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-white flex flex-col items-center justify-center p-6">
      <img
        src="src/assets/db_schema.png"
        alt="Database Schema Diagram"
        className="max-w-full max-h-[500px] object-contain rounded-xl"
      />
      <p className="text-gray-500 text-sm mt-4">Database Schema</p>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="w-full py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Short URLs</h3>
              <p className="text-gray-600">Generate clean, concise links for effortless sharing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Custom Aliases</h3>
              <p className="text-gray-600">Personalize links with easy-to-remember slugs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Analytics Ready</h3>
              <p className="text-gray-600">Track click data, referrers, and user insights.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Scalable Backend</h3>
              <p className="text-gray-600">Architected to handle thousands of requests smoothly.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
              <p className="text-gray-600">Role-based authentication and safe URL handling.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600">Community-driven and transparent development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-gray-50 py-20 px-12 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">Java</h3>
              <p className="text-gray-600 mt-2">Core language for backend logic and services.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">Spring Boot</h3>
              <p className="text-gray-600 mt-2">Framework for building scalable backend APIs.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">MySQL</h3>
              <p className="text-gray-600 mt-2">Relational database for structured data storage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8 mt-20">
        <p className="text-sm">&copy; {new Date().getFullYear()} oneURL — Project Showcase</p>
      </footer>
    </div>
  );
}