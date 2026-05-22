import React from "react";

export default function App() {
  const projects = [
    {
      title: "ThreatInspector+",
      category: "Cybersecurity Platform",
      description:
        "Advanced threat analysis platform featuring malware scanning, CVE intelligence, URL inspection, and email header analysis.",
      tech: ["Python", "Flask", "Cybersecurity", "Threat Intel"],
    },
    {
      title: "WebIntel",
      category: "Recon Tool",
      description:
        "Website technology scanner capable of detecting frameworks, backend stacks, Cloudflare protection, and infrastructure details.",
      tech: ["FastAPI", "Python", "OSINT", "Web Security"],
    },
    {
      title: "SpyKey",
      category: "Security Research",
      description:
        "Research-focused security project exploring endpoint monitoring and behavior analysis techniques.",
      tech: ["Python", "Windows API", "Security Research"],
    },
  ];

  const skills = {
    Languages: ["Python", "JavaScript", "SQL", "PHP"],
    Security: ["Burp Suite", "Nmap", "OWASP", "Wireshark"],
    DevOps: ["Docker", "Kubernetes", "Linux", "Git"],
    Frameworks: ["React", "FastAPI", "Flask", "Node.js"],
  };

  const stats = [
    { value: "15+", label: "Projects" },
    { value: "8+", label: "Security Tools" },
    { value: "1+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-[#07090f] text-slate-300 font-mono overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px]" />
      </div>

      <main className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <header className="mb-24">
          <div className="flex justify-between items-center text-xs text-slate-500 mb-8">
            <span>~/portfolio</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">
                Cybersecurity Engineer • DevOps Practitioner
              </p>

              <h1 className="text-5xl md:text-7xl font-black text-white mt-4">
                Mohit Kumar
              </h1>
            </div>

            <p className="max-w-3xl text-slate-400 text-lg leading-relaxed">
              Building secure applications, cybersecurity tools, and scalable
              cloud-native solutions. Passionate about offensive security,
              automation, infrastructure engineering, and solving real-world
              security challenges through technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-slate-700 rounded-lg hover:border-amber-500 hover:text-amber-400 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-4xl font-bold text-amber-400">
                {item.value}
              </h3>
              <p className="text-slate-500 mt-2">{item.label}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24">
          <div className="mb-10">
            <p className="text-amber-400 text-sm tracking-widest uppercase">
              Featured Projects
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">
              Selected Work
            </h2>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group border border-slate-800 hover:border-amber-500/50 transition-all duration-300 rounded-xl p-6 bg-slate-900/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                      {project.title}
                    </h3>

                    <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-slate-800 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-amber-400 text-sm tracking-widest uppercase">
              Technical Stack
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">
              Skills & Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, values]) => (
              <div
                key={category}
                className="border border-slate-800 rounded-xl p-6 bg-slate-900/30"
              >
                <h3 className="text-white font-semibold mb-4">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {values.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800 rounded-md text-sm border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-amber-400 text-sm tracking-widest uppercase">
              Experience
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">
              Professional Journey
            </h2>
          </div>

          <div className="border-l border-slate-800 ml-3">
            <div className="relative pl-10 pb-10">
              <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-amber-400"></div>

              <h3 className="text-white font-semibold">
                DevOps Intern
              </h3>

              <p className="text-amber-400 text-sm">
                The Standard School of Machine Learning
              </p>

              <p className="text-slate-400 mt-3">
                Worked with Docker, Kubernetes, CI/CD workflows,
                infrastructure automation, and deployment pipelines.
              </p>
            </div>

            <div className="relative pl-10">
              <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-slate-600"></div>

              <h3 className="text-white font-semibold">
                Customer Support Executive
              </h3>

              <p className="text-amber-400 text-sm">
                Airtel Payments Bank
              </p>

              <p className="text-slate-400 mt-3">
                Managed CRM operations, customer analytics,
                reporting, dashboard creation, and process optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-white font-bold">
              Let's Build Something Secure.
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              Open to Cybersecurity, SOC, Security Engineering, and DevOps opportunities.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}