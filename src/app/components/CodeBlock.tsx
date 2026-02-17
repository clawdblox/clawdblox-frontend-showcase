import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ language, code, showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#1e1e1e] group font-mono text-sm shadow-xl shadow-black/40">
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
        >
          {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
        </button>
      </div>
      <div className="px-4 py-2 bg-[#252526] border-b border-white/5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-[#ff5f56]" />
          <div className="size-3 rounded-full bg-[#ffbd2e]" />
          <div className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-2 text-xs text-white/40 font-mono">example.{language === 'bash' ? 'sh' : language}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
        showLineNumbers={showLineNumbers}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
