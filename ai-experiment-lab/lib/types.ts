export interface ExperimentBrief {
  sections: BriefSection[];
  isComplete: boolean;
}

export interface BriefSection {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export const SECTION_META: Record<string, { icon: string; order: number }> = {
  "EXPERIMENT NAME": { icon: "🧪", order: 0 },
  HYPOTHESIS: { icon: "🎯", order: 1 },
  "SINGLE KPI": { icon: "📊", order: 2 },
  "SUCCESS CRITERIA": { icon: "✅", order: 3 },
  "KILL CRITERIA": { icon: "🛑", order: 4 },
  "30/60/90-DAY TIMELINE": { icon: "📅", order: 5 },
  "RESOURCES REQUIRED": { icon: "👥", order: 6 },
  "RISKS & MITIGATIONS": { icon: "⚠️", order: 7 },
  "FIRST MICRO-EXPERIMENT": { icon: "⚡", order: 8 },
};

export const SECTION_KEYS = Object.keys(SECTION_META);
