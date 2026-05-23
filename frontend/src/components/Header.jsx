import { useState, useEffect } from "react";
import { Terminal, Shield, Activity, Menu, X, Cpu, Server } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "../data/portfolioData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [latency, setLatency] = useState(24);
  const [systemTime, setSystemTime] = useState("");

  // Live ticking clock for cybersecurity dashboard vibe
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pulse latency simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 7) - 3;
        const next = prev + change;
        return next > 40 ? 40 : next < 12 ? 12 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Skills Dashboard", href: "#skills" },
    { label: "Timeline", href: "#experience" },
    { label: "Credentials", href: "#certifications" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const terminalVariants = {
    hidden: { scale: 0.95, opacity: 0, x: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.3 },
    },
  };

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav 
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/80 bg-cyber-bg/75 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono font-bold text-lg text-white group">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
              <Shield size={18} />
            </span>
            <span>{profileData.name.toUpperCase().replace(" ", "_")}<span className="text-amber-400 animate-cyber-terminal-cursor">_</span></span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-amber-400 hover:translate-y-[-1px] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-slate-800 bg-cyber-bg px-4 py-4 space-y-3 shadow-2xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Header Section */}
      <header className="pt-28 pb-16 md:py-36 relative overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              SYS_HEALTH: ACTIVE // SECURE_PORTFOLIO_ONLINE
            </motion.div>

            <div className="space-y-3">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                {profileData.name}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl font-mono text-amber-400 font-semibold tracking-wide uppercase flex items-center gap-2"
              >
                <Cpu size={16} className="text-amber-500 animate-spin-slow" />
                {profileData.title}
              </motion.p>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {profileData.objective}
            </motion.p>

            {/* Live Contact Info Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-xs font-mono text-slate-400 border-t border-slate-900/60 max-w-2xl"
            >
              <a href={`mailto:${profileData.contacts.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaEnvelope className="text-amber-500/70" /> {profileData.contacts.email}
              </a>
              <a href={`tel:${profileData.contacts.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaPhoneAlt className="text-amber-500/70" /> {profileData.contacts.phone}
              </a>
              <a href={profileData.contacts.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaLinkedin className="text-amber-500/70" /> {profileData.contacts.linkedin.replace("https://", "")}
              </a>
              <a href={profileData.contacts.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaGithub className="text-amber-500/70" /> {profileData.contacts.github.replace("https://", "")}
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold bg-amber-500 text-slate-955 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 hover:translate-y-[-2px] transition-all cursor-pointer"
              >
                Inspect Selected Work
              </a>
              <a
                href="#skills"
                className="px-6 py-3 rounded-xl font-semibold border border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-900/60 hover:translate-y-[-2px] transition-all cursor-pointer"
              >
                Launch Skills Console
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Right Panel: Cyber Ops Terminal Simulation */}
          <motion.div 
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="cyber-glass rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl relative">
              {/* Scanline simulation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none opacity-20 animate-cyber-scan h-full z-10"></div>

              {/* Card Titlebar */}
              <div className="flex items-center justify-between bg-slate-950/80 px-4 py-3 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  <Terminal size={10} className="text-amber-500" />
                  CORE_MONITOR.SH v2.8
                </div>
              </div>

              {/* Card Body (Interactive Terminal Status Panel) */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-4 bg-slate-950/40">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500">&gt;_ USERNAME</span>
                  <span className="text-white font-bold">mohit@sec-ops-machine</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500 flex items-center gap-1"><Server size={12} className="text-slate-600" /> &gt;_ HOST_STATUS</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ONLINE [SERVERLESS_NODE]
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500 flex items-center gap-1"><Activity size={12} className="text-slate-600" /> &gt;_ PING</span>
                  <span className="text-slate-200">{latency} ms <span className="text-slate-500 font-light">(EXCELLENT)</span></span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500">&gt;_ EDUCATION</span>
                  <span className="text-amber-400 font-bold bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/10 text-right max-w-[220px] truncate" title={profileData.education.university}>
                    {profileData.education.university}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500">&gt;_ SPECIALIZATION</span>
                  <span className="text-slate-300">{profileData.education.degree.replace("B.Tech in ", "")} ({profileData.education.duration})</span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[10px] text-slate-600 uppercase tracking-widest border-b border-slate-900 pb-1">System Core Time (UTC)</p>
                  <p className="text-sm font-semibold text-white bg-slate-950/80 p-2.5 rounded border border-slate-900 font-mono tracking-wider text-center">
                    {systemTime || "LOADING SYSTEM CHRONOMETER..."}
                  </p>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/20 p-3 rounded-lg text-amber-400 text-[11px] leading-relaxed">
                  <div className="font-bold mb-0.5 flex items-center gap-1">
                    <Shield size={12} /> SEC_ENGAGED: TRUE
                  </div>
                  System is operating in decoupled offline mode. Local state persistence enabled via browser engine. Welcome to Mohit Kumar's secure ops console.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}