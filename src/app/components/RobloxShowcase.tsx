import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import CodeBlock from './CodeBlock';
import { Gamepad2, Globe, Laptop } from 'lucide-react';

const RobloxShowcase = () => {
  const robloxCode = `local HttpService = game:GetService("HttpService")
local MemoryWeave = require(game.ServerStorage.MemoryWeave)

game.Players.PlayerAdded:Connect(function(player)
    -- Fetch or create NPC memory context for this player
    local context = MemoryWeave:GetContext(player.UserId, "Blacksmith_NPC")
    
    print("Memory loaded:", context.last_interaction)
end)

-- When player chats with NPC
function OnChat(player, message)
    local response = MemoryWeave:GenerateResponse(player.UserId, message)
    -- Display response in bubble chat
    game:GetService("Chat"):Chat(npcHead, response.text)
end`;

  return (
    <section id="roblox" className="py-24 bg-[#24272F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05b6f8]/10 border border-[#05b6f8]/20 text-[#05b6f8] text-sm font-medium">
              <Gamepad2 className="size-4" />
              Roblox First
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Built for Roblox. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b6f8] to-[#0498d0]">
                Works Everywhere.
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started with a first-class Luau SDK for Roblox developers. But MemoryWeave's REST API works with any engine that can make HTTP requests.
            </p>

            <div className="flex gap-6 py-4">
              <div className="flex flex-col items-center gap-2">
                <div className="size-16 rounded-xl bg-[#2E3138] border border-white/10 flex items-center justify-center shadow-lg">
                  {/* Roblox Icon Placeholder - using text/lucide */}
                  <Gamepad2 className="size-8 text-white" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Roblox</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                 <div className="size-16 rounded-xl bg-[#2E3138] border border-white/10 flex items-center justify-center">
                  <Laptop className="size-8 text-white" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Unity</span>
              </div>
               <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                 <div className="size-16 rounded-xl bg-[#2E3138] border border-white/10 flex items-center justify-center">
                  <Globe className="size-8 text-white" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Unreal</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
               <CodeBlock language="lua" code={robloxCode} showLineNumbers={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RobloxShowcase;
