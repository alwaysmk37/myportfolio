import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const levelColor =
    skill.level >= 85
      ? "bg-emerald-500"
      : skill.level >= 70
        ? "bg-amber-500"
        : "bg-blue-500";

  const levelLabel =
    skill.level >= 85
      ? "Expert"
      : skill.level >= 70
        ? "Advanced"
        : "Intermediate";

  return (
    <motion.div 
      whileHover={{ 
        scale: 1.03, 
        y: -4,
        borderColor: "rgba(245, 158, 11, 0.25)",
        boxShadow: "0 8px 25px rgba(245, 158, 11, 0.05)"
      }}
      className="group cyber-glass rounded-2xl p-5 border border-slate-800/80 cursor-pointer transition-all duration-300"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
          {skill.name}
        </h3>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/60 text-slate-400 border border-slate-800/50">
          {skill.category}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1.5 bg-slate-900 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`absolute left-0 top-0 h-full rounded-full ${levelColor}`}
        ></motion.div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono text-slate-500">{levelLabel}</span>
        <span className="text-[10px] font-mono text-slate-500">{skill.level}%</span>
      </div>

      {/* Topics */}
      {skill.topics?.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-900/60">
          {skill.topics.map((topic) => (
            <span
              key={topic}
              className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-950/60 text-slate-500 border border-slate-900/40"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
