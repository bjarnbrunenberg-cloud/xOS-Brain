"use client";

import { Suspense, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useCompletion } from "ai/react";
import Header from "@/components/Header";
import ExperimentForm from "@/components/ExperimentForm";
import ExperimentBrief from "@/components/ExperimentBrief";
import EmailCapture from "@/components/EmailCapture";
import ExportButton from "@/components/ExportButton";
import { parseSections } from "@/lib/parse-stream";

function LabApp() {
  const searchParams = useSearchParams();
  const isStageMode = searchParams.get("mode") === "stage";

  const [emailUnlocked, setEmailUnlocked] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const { completion, complete, isLoading } = useCompletion({
    api: "/api/generate",
  });

  const sections = parseSections(completion);
  const isGated =
    !isStageMode && !emailUnlocked && hasGenerated && !isLoading;
  const showEmailCapture = isGated && sections.length > 3;

  const handleSubmit = useCallback(
    async (data: {
      initiative: string;
      context: { function?: string; teamSize?: string };
    }) => {
      setHasGenerated(true);
      await complete("", {
        body: {
          initiative: data.initiative,
          context: data.context,
        },
      });
    },
    [complete]
  );

  const handleEmailSubmit = (email: string) => {
    console.log("Lead captured:", email);
    setEmailUnlocked(true);
  };

  const handleReset = () => {
    setHasGenerated(false);
    setEmailUnlocked(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showBrief = sections.length > 0;
  const showExport =
    !isLoading && sections.length > 0 && (isStageMode || emailUnlocked);

  return (
    <div className={isStageMode ? "stage-mode" : ""}>
      <Header isStageMode={isStageMode} />

      <main className="px-6 py-12">
        {!showBrief && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <ExperimentForm
              onSubmit={handleSubmit}
              isGenerating={isLoading}
              isStageMode={isStageMode}
            />
          </div>
        )}

        {showBrief && (
          <div className="max-w-3xl mx-auto mb-2">
            <button
              onClick={handleReset}
              className="text-sm text-brand-silver hover:text-white transition-colors"
            >
              ← New experiment
            </button>
          </div>
        )}

        {showBrief && (
          <ExperimentBrief
            sections={sections}
            isStreaming={isLoading}
            isStageMode={isStageMode}
            isGated={isGated}
            gateAfterIndex={2}
          />
        )}

        {showEmailCapture && <EmailCapture onSubmit={handleEmailSubmit} />}

        {showExport && (
          <ExportButton sections={sections} isStageMode={isStageMode} />
        )}

        <footer className="max-w-3xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/20">
            Built by{" "}
            <span className="text-white/40">Bjarn Brunenberg</span> — AI
            Experiment Lab uses the Strategic Experimentation Framework (SEF)
          </p>
        </footer>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-brand-silver text-sm">Loading...</div>
        </div>
      }
    >
      <LabApp />
    </Suspense>
  );
}
