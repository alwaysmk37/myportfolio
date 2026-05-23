import { ExternalLink, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.03, 
        y: -6,
        boxShadow: "0 15px 30px rgba(245, 158, 11, 0.08)",
        borderColor: "rgba(245, 158, 11, 0.3)"
      }}
      className="group cyber-glass rounded-2xl border border-slate-800/80 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full"
    >
      {/* Card Header Strip */}
      <div className="h-1.5 bg-gradient-to-r from-amber-500/60 via-amber-400/30 to-transparent"></div>

      <div className="p-6 flex flex-col flex-1">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/15">
            <Tag size={10} />
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech?.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-950/60 text-slate-400 border border-slate-800/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-900/60">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub size={14} /> Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-500/80 hover:text-amber-400 transition-colors ml-auto"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
