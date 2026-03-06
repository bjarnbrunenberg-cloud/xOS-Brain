"use client";

import { useState } from "react";

interface FormData {
  initiative: string;
  context: {
    function?: string;
    teamSize?: string;
  };
}

interface ExperimentFormProps {
  onSubmit: (data: FormData) => void;
  isGenerating: boolean;
  isStageMode: boolean;
}

const FUNCTIONS = [
  "Marketing",
  "Product",
  "Customer Service",
  "Operations",
  "HR & People",
  "Finance",
  "Sales",
  "Engineering",
  "Data & Analytics",
  "Other",
];

const TEAM_SIZES = [
  "Small (2-10)",
  "Medium (11-50)",
  "Large (51-200)",
  "Enterprise (200+)",
];

export default function ExperimentForm({
  onSubmit,
  isGenerating,
  isStageMode,
}: ExperimentFormProps) {
  const [initiative, setInitiative] = useState("");
  const [func, setFunc] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [showContext, setShowContext] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!initiative.trim() || isGenerating) return;
    onSubmit({
      initiative: initiative.trim(),
      context: {
        function: func || undefined,
        teamSize: teamSize || undefined,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2
          className={`font-bold tracking-tight mb-3 ${
            isStageMode ? "text-4xl" : "text-3xl"
          }`}
        >
          Turn your AI initiative into a{" "}
          <span className="text-brand-cyan">structured experiment</span>
        </h2>
        <p
          className={`text-brand-silver ${
            isStageMode ? "text-xl" : "text-base"
          }`}
        >
          Describe what your team wants to do with AI. The Lab generates a
          complete experiment brief with hypothesis, KPI, kill criteria, and a
          90-day plan.
        </p>
      </div>

      <div className="relative">
        <textarea
          value={initiative}
          onChange={(e) => setInitiative(e.target.value)}
          placeholder="e.g. We want to use AI to automate our customer support triage so agents can focus on complex tickets..."
          className={`w-full bg-brand-card border border-brand-card-border rounded-xl px-5 py-4 text-white placeholder-white/30 resize-none focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/30 transition-all ${
            isStageMode ? "text-xl min-h-[160px]" : "text-base min-h-[120px]"
          }`}
          disabled={isGenerating}
        />
      </div>

      {!showContext && !isStageMode && (
        <button
          type="button"
          onClick={() => setShowContext(true)}
          className="mt-3 text-sm text-brand-silver hover:text-white transition-colors"
        >
          + Add context (function, team size)
        </button>
      )}

      {showContext && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-brand-silver uppercase tracking-wider mb-1.5">
              Function
            </label>
            <select
              value={func}
              onChange={(e) => setFunc(e.target.value)}
              className="w-full bg-brand-card border border-brand-card-border rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan/50"
            >
              <option value="">Select...</option>
              {FUNCTIONS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-brand-silver uppercase tracking-wider mb-1.5">
              Team Size
            </label>
            <select
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full bg-brand-card border border-brand-card-border rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan/50"
            >
              <option value="">Select...</option>
              {TEAM_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={!initiative.trim() || isGenerating}
          className={`font-bold rounded-xl transition-all ${
            isStageMode ? "text-xl px-10 py-4" : "text-base px-8 py-3"
          } ${
            !initiative.trim() || isGenerating
              ? "bg-white/10 text-white/30 cursor-not-allowed"
              : "bg-brand-cyan text-brand-dark hover:bg-brand-cyan/90 hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
              Generating...
            </span>
          ) : (
            "Generate Experiment"
          )}
        </button>
      </div>
    </form>
  );
}
