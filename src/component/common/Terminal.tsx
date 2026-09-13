import { useState, useCallback } from 'react';
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

export interface TerminalProps {
  command: string;
  title?: string;
  description?: string;
  className?: string;
  copyFeedbackText?: {
    copy: string;
    copied: string;
  };
}

export const Terminal = ({
  command,
  title = 'bash',
  description,
  className = '',
  copyFeedbackText = { copy: 'Copiar', copied: 'Copiado!' },
}: TerminalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = command;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  }, [command]);

  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-zinc-950 text-zinc-100 shadow-lg dark:border-zinc-800 overflow-hidden font-mono text-sm ${className}`}
    >
      {/* Terminal Titlebar with standard Unix/macOS traffic light dots */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/90 inline-block shadow-2xs" />
            <span className="h-3 w-3 rounded-full bg-amber-500/90 inline-block shadow-2xs" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/90 inline-block shadow-2xs" />
          </div>
          <span className="text-xs text-zinc-400 font-sans font-medium ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
            {title}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? copyFeedbackText.copied : copyFeedbackText.copy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-sans font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors duration-150 cursor-pointer active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">{copyFeedbackText.copied}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>{copyFeedbackText.copy}</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 overflow-x-auto">
        <div className="flex items-center gap-2.5">
          <span className="text-emerald-400 font-bold select-none">$</span>
          <code className="text-zinc-100 selection:bg-zinc-700 selection:text-white whitespace-pre font-mono font-medium">
            {command}
          </code>
        </div>
        {description ? (
          <p className="mt-2.5 text-xs font-sans text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-2">
            <span className="text-zinc-500 select-none"># </span>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};
