"use client";

import { useState } from "react";

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
}

export default function EmailCapture({ onSubmit }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    // Small delay for UX feel
    await new Promise((r) => setTimeout(r, 400));
    onSubmit(email.trim());
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <div className="relative bg-brand-dark/95 border border-brand-cyan/30 rounded-xl p-8 text-center backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-transparent rounded-xl" />
        <div className="relative">
          <h3 className="text-xl font-bold mb-2">
            Unlock the full Experiment Brief
          </h3>
          <p className="text-brand-silver text-sm mb-6">
            Enter your email to see the complete 30/60/90-day timeline, risk
            assessment, and micro-experiment template — plus export as PDF.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-brand-card border border-brand-card-border rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan/50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-cyan text-brand-dark font-bold px-6 py-2.5 rounded-lg hover:bg-brand-cyan/90 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "..." : "Unlock"}
            </button>
          </form>
          <p className="text-xs text-white/30 mt-3">
            No spam. Just your experiment brief.
          </p>
        </div>
      </div>
    </div>
  );
}
