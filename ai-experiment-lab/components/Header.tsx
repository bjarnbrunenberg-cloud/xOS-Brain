"use client";

export default function Header({ isStageMode }: { isStageMode: boolean }) {
  return (
    <header className="w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center">
            <span className="text-brand-cyan text-lg">⚡</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              AI Experiment Lab
            </h1>
            <p className="text-xs text-brand-silver">
              by Bjarn Brunenberg
            </p>
          </div>
        </div>
        {isStageMode && (
          <span className="text-xs font-medium text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full">
            STAGE MODE
          </span>
        )}
      </div>
    </header>
  );
}
