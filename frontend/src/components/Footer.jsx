import { Shield } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/alwaysmk37", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/alwaysmohitk", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:alwaysmohitk.dev@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pt-16 pb-8"
    >
      {/* Top Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Shield size={18} />
          </div>
          <div>
            <p className="font-mono font-bold text-white text-sm">
              MOHIT_KUMAR<span className="text-amber-400 animate-cyber-terminal-cursor">_</span>
            </p>
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
              Tech Support &bull; Cybersecurity &bull; Cloud
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                borderColor: "rgba(245, 158, 11, 0.4)",
                backgroundColor: "rgba(245, 158, 11, 0.05)"
              }}
              className="p-2.5 rounded-xl border border-slate-800/50 bg-slate-950/40 text-slate-400 hover:text-amber-400 transition-all cursor-pointer"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-slate-600">
        <p>© {year} Mohit Kumar. All rights reserved.</p>
        <p className="flex items-center gap-1">
          SYSTEM_STATUS: <span className="text-emerald-500">OPERATIONAL_SERVERLESS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1"></span>
        </p>
      </div>
    </motion.footer>
  );
}
