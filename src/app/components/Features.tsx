import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { Brain, Sparkles, MessageSquare, Plug, Database, Key } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Persistent Memory",
    description: "NPCs remember every interaction using pgvector embeddings. Player history shapes future dialogue.",
  },
  {
    icon: Sparkles,
    title: "Dynamic Personalities",
    description: "OCEAN (Big Five) model drives unique behavior. NPCs evolve based on experiences.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "AI-powered dialogue that feels alive, context-aware, and reactive to the game world.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description: "REST API & WebSocket support. First-class Lua SDK for Roblox. Works with Unity & Unreal.",
  },
  {
    icon: Database,
    title: "Self-Hosted",
    description: "Your data stays yours. One-command Docker deployment. No vendor lock-in.",
  },
  {
    icon: Key,
    title: "BYOK",
    description: "Bring Your Own Key. Use Groq, OpenAI, or Anthropic. Control your costs and models.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#05b6f8] rounded-full blur-[120px] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Give your NPCs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b6f8] to-[#0498d0]">Soul</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create living, breathing characters in your game world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col hover:bg-white/10 group">
                  <div className="size-12 rounded-lg bg-gradient-to-br from-[#05b6f8] to-[#037db0] flex items-center justify-center mb-6 shadow-lg shadow-[#05b6f8]/20 group-hover:scale-110 transition-transform">
                    <Icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
