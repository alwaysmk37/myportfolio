import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="mb-24 relative pt-12">
      <div className="absolute inset-0 bg-gradient-to-l from-amber-500/5 via-transparent to-transparent blur-3xl pointer-events-none opacity-20"></div>

      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center flex flex-col items-center justify-center"
      >
        <p className="text-amber-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center gap-2">
          <Award size={14} className="animate-pulse" />
          CREDENTIAL_VAULT // VERIFIED_BADGES
        </p>

        <h2 className="text-3xl font-extrabold text-white mt-2">
          Professional Credentials
        </h2>
        <p className="text-slate-500 text-sm mt-1 max-w-xl text-center mx-auto">
          Verified academic and professional accreditations confirming technical security and DevOps skills.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.025,
              y: -5,
              borderColor: "rgba(245, 158, 11, 0.25)",
              boxShadow: "0 10px 30px rgba(245, 158, 11, 0.08)"
            }}
            className="group cyber-glass rounded-2xl p-6 border border-slate-800/80 relative overflow-hidden flex items-start gap-4 cursor-pointer transition-all duration-300"
          >
            {/* Badge Icon Panel */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-900 text-slate-500 group-hover:text-amber-400 group-hover:border-amber-500/20 transition-all">
              <ShieldCheck size={22} />
            </div>

            {/* Certificate Details */}
            <div className="space-y-1 flex-1">
              <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                {cert.name}
              </h3>

              <p className="text-slate-400 font-medium text-xs">
                {cert.issuer}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3.5 text-[10px] font-mono text-slate-500 border-t border-slate-900/60 mt-3.5">
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {cert.issueDate}
                </span>
                
                {cert.credentialId && (
                  <span>ID: {cert.credentialId}</span>
                )}

                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 text-amber-500/80 hover:text-amber-400 transition-colors ml-auto"
                  >
                    <span>VERIFY</span>
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}