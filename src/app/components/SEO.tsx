import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({
  title = "ClawdBlox - Give your NPCs a soul",
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
    link.href = '/clawdblox-logo.png';

  }, [title, description, image]);

  return null;
};

export default SEO;
