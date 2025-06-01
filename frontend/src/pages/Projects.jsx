import { useState } from "react"
const Projects = () => {

  const projectList = [
    {
      name: "ThreatInspector+",
      desc: "A cybersecurity tool for CVE scanning, email header analysis, and URL scanning.",
      link: "#",
    },
    {
      name: "SpyKey",
      desc: "A stealthy keylogger and monitoring tool with reporting features.",
      link: "#",
    },
    {
      name: "WebIntel",
      desc: "Website technology scanner with Cloudflare detection and backend stack analysis.",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.desc}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
