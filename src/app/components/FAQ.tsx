import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';

const faqs = [
  {
    question: "Is ClawdBlox really free?",
    answer: "Yes, 100% open-source under the MIT license. You can host it yourself for free forever.",
  },
  {
    question: "Which AI providers are supported?",
    answer: "It works with Groq out of the box for ultra-fast inference. You can also bring your own key (BYOK) for OpenAI, Anthropic, or any OpenAI-compatible API.",
  },
  {
    question: "Does it work with Roblox?",
    answer: "Yes! Roblox is our primary target. We provide a Luau SDK that handles all the HTTP communication with your self-hosted instance.",
  },
  {
    question: "What about Unity / Unreal / Godot?",
    answer: "Any game engine that can make HTTP or WebSocket requests is supported. We have community SDKs in progress for C# and C++.",
  },
  {
    question: "How much does the AI cost?",
    answer: "You pay your AI provider directly (e.g., Groq, OpenAI). ClawdBlox is free and open-source software. If you use local LLMs (like Llama 3 via Ollama), it's completely free to run.",
  },
  {
    question: "Can I use it in production?",
    answer: "Yes. The Docker container includes production-ready PostgreSQL, pgvector, and Redis configurations. The stack is production-ready and designed for live games.",
  },
  {
    question: "Where is my data stored?",
    answer: "On your own server. You have 100% ownership and control over your player data and NPC memories.",
  },
  {
    question: "Will there be a managed cloud version?",
    answer: "Yes! ClawdBlox Cloud is coming soon for developers who don't want to manage servers. Join the waitlist to get early access.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#24272F] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-[#2E3138] overflow-hidden hover:border-[#05b6f8]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="size-5 text-[#05b6f8]" />
                ) : (
                  <Plus className="size-5 text-muted-foreground" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
