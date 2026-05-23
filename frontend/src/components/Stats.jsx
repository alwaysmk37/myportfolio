import { Shield, FolderGit2, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData, skillsData, certificationsData, experienceData } from "../data/portfolioData";

export default function Stats() {
  const stats = [
    { label: "Projects Deployed", value: projectsData.length, icon: FolderGit2, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { label: "Skills Mastered", value: skillsData.length, icon: Shield, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { label: "Certifications", value: certificationsData.length, icon: Award, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { label: "Work Experience", value: experienceData.length, icon: Briefcase, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.08)",
              borderColor: "rgba(245, 158, 11, 0.3)"
            }}
            className="group cyber-glass rounded-2xl p-5 border border-slate-800/80 cursor-pointer transition-all duration-300"
          >
            <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.border} border w-fit mb-3 group-hover:scale-115 transition-transform`}>
              <Icon size={20} className={stat.color} />
            </div>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              {stat.value}
            </p>
            <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
