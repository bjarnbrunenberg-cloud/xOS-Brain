"use client";

import BriefSection from "./BriefSection";
import type { BriefSection as BriefSectionType } from "@/lib/types";

interface ExperimentBriefProps {
  sections: BriefSectionType[];
  isStreaming: boolean;
  isStageMode: boolean;
  isGated: boolean;
  gateAfterIndex: number;
}

export default function ExperimentBrief({
  sections,
  isStreaming,
  isStageMode,
  isGated,
  gateAfterIndex,
}: ExperimentBriefProps) {
  if (sections.length === 0) return null;

  return (
    <div className={`w-full max-w-3xl mx-auto mt-10 ${isStageMode ? "text-lg" : "text-base"}`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px flex-1 bg-brand-cyan/20" />
        <span className={`text-xs font-medium uppercase tracking-widest ${isStreaming ? "text-brand-cyan pulse-generating" : "text-brand-silver"}`}>
          {isStreaming ? "Generating experiment brief..." : "Experiment Brief"}
        </span>
        <div className="h-px flex-1 bg-brand-cyan/20" />
      </div>

      <div className="space-y-0">
        {sections.map((section, index) => {
          const shouldGate = isGated && index > gateAfterIndex;
          const isLastSection = index === sections.length - 1;

          return (
            <BriefSection
              key={section.id}
              title={section.title}
              content={section.content}
              icon={section.icon}
              index={index}
              isStreaming={isStreaming && isLastSection}
              isGated={shouldGate}
            />
          );
        })}
      </div>
    </div>
  );
}
