import { motion } from 'motion/react';
import { Database, Server, Cpu, Gamepad2, ArrowRightLeft } from 'lucide-react';

const Architecture = () => {
  return (
    <section className="py-24 bg-[#24272F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Under the Hood
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A robust, scalable architecture designed for low-latency game interactions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Game Client */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-48 h-32 bg-[#2E3138] border border-white/10 rounded-xl flex flex-col items-center justify-center shadow-lg hover:border-[#05b6f8]/50 transition-colors">
              <Gamepad2 className="size-10 text-white mb-2" />
              <span className="font-bold text-white">Game Client</span>
              <span className="text-xs text-muted-foreground">Roblox / Unity / Unreal</span>
            </div>
          </motion.div>

          {/* Connection Arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <ArrowRightLeft className="size-6 md:rotate-0 rotate-90" />
            <span className="text-xs font-mono mt-1">HTTP / WS</span>
          </motion.div>

          {/* MemoryWeave Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#05b6f8] blur-[40px] opacity-20 rounded-full pointer-events-none" />
            <div className="w-64 h-40 bg-[#1e1e1e] border-2 border-[#05b6f8] rounded-2xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(5,182,248,0.2)] relative z-10">
              <Cpu className="size-12 text-[#05b6f8] mb-3" />
              <span className="font-heading font-bold text-xl text-white">MemoryWeave API</span>
              <span className="text-xs text-[#05b6f8] mt-1 font-mono">Core Logic Engine</span>
            </div>
          </motion.div>

          {/* Connection Arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-muted-foreground"
          >
             <ArrowRightLeft className="size-6 md:rotate-0 rotate-90" />
             <span className="text-xs font-mono mt-1">Internal</span>
          </motion.div>

          {/* Data Layer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="w-48 h-20 bg-[#2E3138] border border-white/10 rounded-xl flex items-center px-4 gap-3 shadow-md hover:border-[#05b6f8]/30 transition-colors">
              <Database className="size-6 text-green-400" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">PostgreSQL</span>
                <span className="text-xs text-muted-foreground">pgvector (Long-term)</span>
              </div>
            </div>
             <div className="w-48 h-20 bg-[#2E3138] border border-white/10 rounded-xl flex items-center px-4 gap-3 shadow-md hover:border-[#05b6f8]/30 transition-colors">
              <Server className="size-6 text-red-400" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">Redis</span>
                <span className="text-xs text-muted-foreground">Cache / PubSub</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
