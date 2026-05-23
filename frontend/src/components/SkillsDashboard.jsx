import { useState } from "react";
import { Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../data/portfolioData";
import SkillCard from "./SkillCard";

export default function SkillsDashboard() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(skillsData.map((s) => s.category))];
  const filtered =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative pt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent blur-3xl pointer-events-none opacity-20"></div>

      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center flex flex-col items-center justify-center"
      >
        <p className="text-amber-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center gap-2">
          <Cpu size={14} className="animate-spin-slow" />
          SKILL_MATRIX // COMPETENCY_MAP
        </p>
        <h2 className="text-3xl font-extrabold text-white mt-2">
          Skills Dashboard
        </h2>
        <p className="text-slate-500 text-sm mt-1 max-w-xl text-center mx-auto">
          Technical capabilities mapped across cybersecurity, development, and cloud infrastructure domains.
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                : "bg-slate-950/40 text-slate-400 border-slate-800/50 hover:text-white hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ duration: 0.25 }}
              key={idx}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
