import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { User, Bot, Sparkles, Send } from 'lucide-react';

const DemoPreview = () => {
  return (
    <section className="py-24 bg-[#24272F] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            See it in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b6f8] to-[#0498d0]">Action</span>.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <GlassCard className="!p-0 !bg-[#1e1e1e] border-white/10 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="bg-[#252526] px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="size-8 rounded-full bg-[#05b6f8]/20 flex items-center justify-center text-[#05b6f8]">
                <Bot className="size-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Blacksmith NPC</span>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online
                </span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-6 space-y-6 bg-[#1e1e1e] min-h-[400px]">
              {/* Message 1 (Player) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-end"
              >
                <div className="bg-[#05b6f8] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md">
                  <p className="text-sm">Hey, do you remember what I bought yesterday?</p>
                </div>
              </motion.div>

              {/* Processing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex gap-2 text-muted-foreground text-xs ml-2 items-center"
              >
                <Sparkles className="size-3 text-[#05b6f8]" />
                <span className="italic">Accessing memory bank...</span>
              </motion.div>

              {/* Message 2 (NPC) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="flex justify-start items-end gap-2"
              >
                <div className="size-8 rounded-full bg-[#2E3138] border border-white/10 flex-shrink-0 flex items-center justify-center">
                   <Bot className="size-4 text-white" />
                </div>
                <div className="bg-[#2E3138] border border-white/10 text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-md relative">
                  <p className="text-sm">
                    Of course! You purchased the <span className="text-[#05b6f8] font-bold">Obsidian Dagger</span>. 
                    Has it served you well in the lower dungeons?
                  </p>
                  
                  {/* Memory Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.5, type: "spring" }}
                    className="absolute -top-3 -right-2 bg-[#1e1e1e] border border-[#05b6f8]/30 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"
                  >
                    <Sparkles className="size-3 text-[#05b6f8]" />
                    <span className="text-[10px] text-[#05b6f8] font-medium uppercase tracking-wide">Memory Recalled</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Input Area (Mock) */}
            <div className="p-4 bg-[#252526] border-t border-white/5 flex gap-2 items-center">
               <div className="flex-1 bg-[#1e1e1e] rounded-lg px-3 py-2 text-sm text-muted-foreground border border-white/5">
                 Type a message...
               </div>
               <div className="size-9 rounded-lg bg-[#05b6f8] flex items-center justify-center text-white cursor-pointer hover:bg-[#0498d0]">
                 <Send className="size-4" />
               </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
