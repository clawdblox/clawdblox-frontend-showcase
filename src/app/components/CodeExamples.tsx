import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CodeBlock from './CodeBlock';
import { FileCode, Globe, Server } from 'lucide-react';
import { clsx } from 'clsx';

const CodeExamples = () => {
  const [activeTab, setActiveTab] = useState<'lua' | 'curl' | 'websocket'>('lua');

  const examples = {
    lua: {
      language: 'lua',
      icon: FileCode,
      label: 'Roblox / Lua',
      code: `local MemoryWeave = require(game.ServerStorage.MemoryWeave)

local mw = MemoryWeave.new({
    baseUrl = "https://your-server.com",
    apiKey = "mw_your_api_key",
    signingSecret = "your_signing_secret",
})

-- Player talks to an NPC — memory is automatic
local response = mw:Chat(npcId, tostring(player.UserId), "Got any quests?")
print(response.message)  -- "Ah, you again! Last time you helped me
                          --  find my lost sword. I have another task..."`,
    },
    curl: {
      language: 'bash',
      icon: Globe,
      label: 'REST API',
      code: `curl https://your-server.com/api/v1/npcs \\
  -H "x-api-key: mw_your_api_key" \\
  -H "Content-Type: application/json"`,
    },
    websocket: {
      language: 'javascript',
      icon: Server,
      label: 'WebSocket',
      code: `const ws = new WebSocket('wss://your-server.com/ws?api_key=YOUR_API_KEY');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === 'auth:success') {
    ws.send(JSON.stringify({
      type: 'chat',
      npc_id: 'NPC_UUID',
      player_id: 'player_123',
      message: 'Hello, merchant!'
    }));
  }

  if (data.type === 'chat:response') {
    console.log('NPC says:', data.data);
  }
};`,
    },
  };

  return (
    <section className="py-24 bg-[#24272F] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Speak their language.
          </h2>
          <p className="text-muted-foreground">
            Whether you're in Roblox, Unity, or building a custom engine, integration is seamless.
          </p>
        </div>

        <div className="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex border-b border-white/5 bg-[#252526]">
            {(Object.keys(examples) as Array<keyof typeof examples>).map((key) => {
              const Example = examples[key];
              const Icon = Example.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={clsx(
                    'flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors relative focus-visible:outline-none',
                    activeTab === key
                      ? 'text-white bg-[#1e1e1e]'
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon className="size-4" />
                  {Example.label}
                  {activeTab === key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-[#05b6f8]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CodeBlock
                  language={examples[activeTab].language}
                  code={examples[activeTab].code}
                  showLineNumbers={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
