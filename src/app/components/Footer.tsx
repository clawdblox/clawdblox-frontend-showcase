import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-br from-[#05b6f8] to-[#037db0] flex items-center justify-center text-lg shadow-lg shadow-[#05b6f8]/20">
              🧠
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-white">
                MemoryWeave
              </span>
              <span className="text-xs text-muted-foreground">
                by ClawdBlox
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
              <Github className="size-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
              <Twitter className="size-5" />
            </a>
             <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ClawdBlox. Open source software provided as-is.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
