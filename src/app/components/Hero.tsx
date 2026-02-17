import { motion } from 'motion/react';
import { Button } from './ui/button';
import { GlassCard } from './ui/GlassCard';
import { ArrowRight, Github, Terminal } from 'lucide-react';
import CodeBlock from './CodeBlock';

const Hero = () => {
  const codeSnippet = `local MemoryWeave = require("MemoryWeave")

-- Initialize an NPC with personality
local npc = MemoryWeave.new("Guard", {
  personality = "Stern but fair",
  memory_retention = "forever"
})

-- Handle player interaction
npc:Interact(player, "Halt! Who goes there?")
  :andThen(function(response)
    print(response.text) -- "The guard eyes you suspiciously."
  end)`;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#24272F]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 size-64 bg-[#05b6f8] rounded-full blur-[100px] opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 size-96 bg-[#0498d0] rounded-full blur-[120px] opacity-20 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05b6f8]/10 border border-[#05b6f8]/20 text-[#05b6f8] text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05b6f8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05b6f8]"></span>
            </span>
            v1.0 is now Open Source
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            Give your NPCs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b6f8] via-[#0498d0] to-[#037db0]">
              Persistent Memory
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            MemoryWeave gives game characters a soul. They remember interactions, evolve personalities, and build relationships with players.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/clawdblox" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 shadow-[0_0_30px_rgba(5,182,248,0.4)] group">
                Get Started — It's Free
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://github.com/clawdblox" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10">
                <Github className="mr-2 size-5" />
                View on GitHub
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
            <p>Open Source & Free</p>
          </div>
        </motion.div>

        {/* Right Content - Code/Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group perspective-1000"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#05b6f8] to-[#037db0] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
            <GlassCard className="!p-0 !bg-[#1e1e1e]/90 !backdrop-blur-xl border-white/10 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#252526]">
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-muted-foreground" />
                  <span className="text-sm font-mono text-muted-foreground">npc_interaction.lua</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-[#ff5f56]" />
                  <div className="size-3 rounded-full bg-[#ffbd2e]" />
                  <div className="size-3 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              <div className="p-0">
                <CodeBlock language="lua" code={codeSnippet} showLineNumbers={true} />
              </div>
            </GlassCard>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-[#2E3138] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Memory Status</p>
                <p className="text-sm font-semibold text-white">Recalled Interaction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
