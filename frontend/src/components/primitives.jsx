import React from "react";

// Reusable compact components

export const Eyebrow = ({ children, className = "", tone = "gold" }) => (
  <div
    className={`eyebrow flex items-center ${
      tone === "gold" ? "text-warm-gold" : tone === "paper" ? "text-paper/70" : "text-slate"
    } ${className}`}
  >
    <span className="rule-mark" />
    <span>{children}</span>
  </div>
);

export const SectionTag = ({ number, title, className = "" }) => (
  <div className={`flex items-baseline gap-6 ${className}`}>
    <span className="font-serif text-sm italic text-warm-gold tracking-wide">{number}</span>
    <span className="eyebrow text-ink/70">{title}</span>
  </div>
);

export const Caption = ({ children, className = "" }) => (
  <p className={`text-xs text-slate font-sans leading-relaxed ${className}`}>{children}</p>
);

export const VerifyTag = ({ children = "verify with final asset" }) => (
  <span
    data-testid="verify-tag"
    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-medium text-bronze bg-bronze/10 px-2.5 py-1 rounded-sm"
  >
    <span className="inline-block w-1 h-1 bg-bronze rounded-full" />
    {children}
  </span>
);
