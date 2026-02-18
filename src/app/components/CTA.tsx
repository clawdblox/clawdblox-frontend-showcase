import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to Supabase or API
    alert(`Added ${email} to waitlist!`);
    setEmail('');
  };

  return (
    <section className="py-24 bg-[#24272F] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#05b6f8] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Built in the Open. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b6f8] to-[#0498d0]">
              Free Forever.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the community building the next generation of games. Start creating soulful NPCs today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://clawdblox.xyz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full px-8 w-full shadow-[0_0_40px_rgba(5,182,248,0.5)] group">
                Launch App
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="rounded-full px-8 w-full border-white/20 text-white hover:bg-white/10 group">
                Read the Docs
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Waitlist Card */}
          <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8 max-w-md mx-auto shadow-2xl relative overflow-hidden group hover:border-[#05b6f8]/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#05b6f8]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05b6f8]/10 border border-[#05b6f8]/20 text-[#05b6f8] text-xs font-medium uppercase tracking-wide">
                Coming Soon
              </div>
              <h3 className="text-xl font-bold text-white">ClawdBlox Cloud</h3>
              <p className="text-sm text-muted-foreground">
                Want us to host it for you? Sign up for early access to our managed service.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#252526] border border-white/10 rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#05b6f8]/50 transition-colors"
                  />
                </div>
                <Button type="submit" size="sm" className="bg-[#05b6f8] hover:bg-[#0498d0] text-white rounded-lg px-4">
                  Notify Me
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
