import { Github, Twitter, MessageCircle, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/clawdblox-logo.png" alt="ClawdBlox" className="size-8 rounded-lg" />
            <span className="font-heading font-bold text-base text-white">
              ClawdBlox
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="https://github.com/clawdblox" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="https://github.com/clawdblox" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
              <Github className="size-5" />
            </a>
            <a href="https://gitbook.clawdblox.xyz" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
              <BookOpen className="size-5" />
            </a>
            <a href="https://x.com/clawdblox" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
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
