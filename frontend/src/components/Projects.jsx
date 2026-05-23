import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="relative pt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none opacity-20"></div>

      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center flex flex-col items-center justify-center"
      >
        <p className="text-amber-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center gap-2">
          <FolderGit2 size={14} className="animate-pulse" />
          PROJECT_ARCHIVE // DEPLOYED_OPERATIONS
        </p>
        <h2 className="text-3xl font-extrabold text-white mt-2">
          Selected Work
        </h2>
        <p className="text-slate-500 text-sm mt-1 max-w-xl text-center mx-auto">
          Security tools, automation platforms, and research projects designed and deployed in production environments.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
