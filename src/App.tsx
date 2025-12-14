import { useState } from "react";
import { BentoGrid, BentoCard } from "./components/BentoGrid";
import { Zap, Layout, Globe, Code, ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { translations, type Language } from "./translations";

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const { scrollY } = useScroll();

  const yBg1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const yBg2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const items = [
    {
      title: t.grid.saas.title,
      description: t.grid.saas.desc,
      header: (
        <div className="w-full h-full bg-surface-highlight border-b border-white/5 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="z-10 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-2xl transform group-hover:-translate-y-2 transition duration-500">
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="space-y-2">
              <div className="w-32 h-2 bg-white/10 rounded-full" />
              <div className="w-20 h-2 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      ),
      icon: <Layout className="h-5 w-5" />,
      colSpan: 2 as const,
    },
    {
      title: t.grid.portfolio.title,
      description: t.grid.portfolio.desc,
      header: <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-surface border border-white/5" />,
      icon: <Globe className="h-5 w-5" />,
      colSpan: 1 as const,
    },
    {
      title: t.grid.consulting.title,
      description: t.grid.consulting.desc,
      header: <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />,
      icon: <ArrowUpRight className="h-5 w-5" />,
      colSpan: 1 as const,
    },
    {
      title: t.grid.process.title,
      description: t.grid.process.desc,
      header: (
        <div className="w-full h-full relative overflow-hidden bg-surface">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite] border-[1px] border-dashed border-white/20 rounded-full" />
            <div className="absolute w-[100%] h-[100%] animate-[spin_40s_linear_infinite_reverse] border-[1px] border-dashed border-white/20 rounded-full" />
          </div>
        </div>
      ),
      icon: <Zap className="h-5 w-5" />,
      colSpan: 2 as const,
    },
    {
      title: t.grid.reliability.title,
      description: t.grid.reliability.desc,
      icon: <Code className="h-5 w-5" />,
      colSpan: 1 as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 relative overflow-x-hidden font-sans">

      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-1">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${lang === 'en' ? 'bg-primary text-black font-semibold' : 'text-neutral-400 hover:text-white'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('es')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${lang === 'es' ? 'bg-primary text-black font-semibold' : 'text-neutral-400 hover:text-white'}`}
          >
            ES
          </button>
        </div>
      </div>

      {/* Ambient Background Lights */}
      <motion.div style={{ y: yBg1 }} className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary/20 blur-[130px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
      <motion.div style={{ y: yBg2 }} className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-primary/10 blur-[130px] rounded-full pointer-events-none opacity-20" />
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />

      <motion.header style={{ opacity: opacityHero }} className="relative pt-40 pb-32 px-6 z-10 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center gap-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.hero.badge}
          </div>
          <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white leading-[0.9]">
            {t.hero.titleStart}<br />
            <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_auto] animate-[shine_5s_linear_infinite]">
              {t.hero.titleHighlight}
            </span> {t.hero.titleEnd}
          </h1>

          <p className="text-neutral-400 max-w-2xl text-xl md:text-2xl leading-relaxed text-pretty mt-6 font-light">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-neutral-600">
          <ArrowDown className="w-6 h-6 opacity-50" />
        </div>
      </motion.header>

      <BentoGrid>
        {items.map((item, i) => (
          <BentoCard
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            colSpan={item.colSpan}
          />
        ))}
        <div className="md:col-span-1 row-span-1 rounded-xl p-6 border border-white/10 bg-primary/10 flex items-center justify-center group cursor-pointer hover:bg-primary/20 transition-all duration-300">
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
            {t.grid.documentation} <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </BentoGrid>

      {/* --- NEW SECTION: The Zen Process --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-semibold mb-6">
              {t.process.titleStart} <span className="text-primary">{t.process.titleHighlight}</span> {t.process.titleEnd}
            </h2>
            <p className="text-neutral-400 text-xl max-w-xl">
              {t.process.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.process.steps.map((phase, i) => (
              <motion.div
                key={i + lang}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="border-t border-white/10 pt-8 group hover:border-primary/50 transition-colors duration-500"
              >
                <div className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">Phase 0{i + 1}</div>
                <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors">{phase.title}</h3>
                <p className="text-neutral-500 leading-relaxed max-w-sm">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: CTA / Future --- */}
      <section className="py-40 px-6 relative z-10 text-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
            {t.cta.titleStart} <span className="text-secondary">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-neutral-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="px-8 py-4 bg-primary text-black font-semibold rounded-full text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(118,185,71,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
            {t.cta.button}
          </button>
        </motion.div>

        {/* Decorative background glow for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none" />
      </section>

      <footer className="relative z-10 border-t border-white/5 mt-0 bg-surface/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm font-mono gap-4">
          <div>{t.footer.copyright}</div>
          <div className="flex gap-8">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#" className="hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
