"use client";

interface BriefSectionProps {
  title: string;
  content: string;
  icon: string;
  index: number;
  isStreaming: boolean;
  isGated: boolean;
}

export default function BriefSection({
  title,
  content,
  icon,
  index,
  isStreaming,
  isGated,
}: BriefSectionProps) {
  return (
    <div
      className={`section-card ${isGated ? "gated-blur" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="bg-brand-card border border-brand-card-border rounded-xl p-5 mb-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan">
            {title}
          </h3>
        </div>
        <div
          className={`text-white/90 leading-relaxed whitespace-pre-wrap ${
            isStreaming ? "streaming-cursor" : ""
          }`}
        >
          {formatContent(content)}
        </div>
      </div>
    </div>
  );
}

function formatContent(content: string): React.ReactNode {
  // Convert markdown bold to JSX
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
