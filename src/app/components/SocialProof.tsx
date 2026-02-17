import { motion } from 'motion/react';
import { Star, Code, Server, Gamepad2 } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="bg-[#24272F] py-10 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-70"
        >
          <div className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
            <Star className="size-6 text-[#05b6f8]" />
            <span className="text-xl font-bold text-white">1.2k+</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">GitHub Stars</span>
          </div>
          
          <div className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
            <Code className="size-6 text-[#05b6f8]" />
            <span className="text-lg font-semibold text-white">100% Open Source</span>
          </div>

          <div className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
            <Server className="size-6 text-[#05b6f8]" />
            <span className="text-lg font-semibold text-white">Self-Hosted</span>
          </div>

          <div className="flex items-center gap-3 group hover:opacity-100 transition-opacity">
            <Gamepad2 className="size-6 text-[#05b6f8]" />
            <span className="text-lg font-semibold text-white">Roblox-First</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
