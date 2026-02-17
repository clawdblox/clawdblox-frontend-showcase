import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({
  title = "MemoryWeave - Give your NPCs a soul",
  description = "Open-source framework by ClawdBlox that gives NPCs persistent memory and evolving personalities. Built for Roblox, works everywhere.",
  image = "https://welcome.clawdblox.xyz/favicon.png"
}: SEOProps) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOG = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', 'npc, ai, game dev, roblox, persistent memory, open source, memoryweave, clawdblox, pgvector, llm');
    
    // Update Open Graph
    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:image', image);
    updateOG('og:url', window.location.href);
    updateOG('og:type', 'website');
    updateOG('twitter:card', 'summary_large_image');
    updateMeta('twitter:site', '@clawdblox');

    // Update Favicon (Dynamic Emoji)
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    // SVG encoded favicon for 🧠 emoji
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>`;

  }, [title, description, image]);

  return null;
};

export default SEO;
