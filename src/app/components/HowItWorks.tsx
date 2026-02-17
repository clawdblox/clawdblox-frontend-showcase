import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { Download, Link2, BrainCircuit } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: "Install with Docker",
    description: "One command to deploy the entire stack: API, Postgres, pgvector, and Redis. Fully self-hosted.",
  },
  {
    icon: Link2,
    title: "Connect Your Game",
    description: "Use our Roblox SDK or REST API to link your game world to the MemoryWeave backend.",
  },
  {
    icon: BrainCircuit,
    title: "NPCs Come Alive",
    description: "Characters start remembering interactions and evolving their personalities in real-time.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#24272F]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            From Zero to Sentience in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b6f8] to-[#0498d0]">Minutes</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#05b6f8]/20 via-[#05b6f8]/50 to-[#05b6f8]/20 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-8 group">
                  <div className="absolute inset-0 bg-[#05b6f8] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative size-24 rounded-full bg-[#24272F] border-2 border-[#05b6f8] flex items-center justify-center shadow-lg shadow-[#05b6f8]/20 z-10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-10 text-[#05b6f8]" />
                    <div className="absolute -top-2 -right-2 size-8 rounded-full bg-gradient-to-br from-[#05b6f8] to-[#037db0] flex items-center justify-center text-white font-bold text-sm border-2 border-[#24272F]">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
