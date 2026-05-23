import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, x: -15 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="experience" className="relative pt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent blur-3xl pointer-events-none opacity-20"></div>

      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center flex flex-col items-center justify-center"
      >
        <p className="text-amber-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center gap-2">
          <Briefcase size={14} className="animate-pulse" />
          CAREER_LOG // OPERATIONAL_HISTORY
        </p>
        <h2 className="text-3xl font-extrabold text-white mt-2">
          Experience Timeline
        </h2>
        <p className="text-slate-500 text-sm mt-1 max-w-xl text-center mx-auto">
          Professional roles and contributions across cybersecurity and DevOps engineering domains.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-slate-800/50 to-transparent hidden md:block"></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-7 hidden md:flex">
                <div className={`w-4 h-4 rounded-full border-2 ${exp.active ? "border-emerald-400 bg-emerald-400/20 animate-pulse" : "border-amber-500/40 bg-amber-500/10"}`}></div>
              </div>

              <motion.div 
                whileHover={{ 
                  scale: 1.015,
                  x: 6,
                  borderColor: "rgba(245, 158, 11, 0.25)",
                  boxShadow: "0 8px 25px rgba(245, 158, 11, 0.05)"
                }}
                className="cyber-glass rounded-2xl p-6 border border-slate-800/80 cursor-pointer transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <MapPin size={12} className="text-slate-600" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono rounded-full bg-slate-950/60 text-slate-400 border border-slate-800/50">
                      <Calendar size={10} />
                      {exp.startDate} — {exp.active ? "Present" : exp.endDate}
                    </span>
                    {exp.active && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        ACTIVE
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
