import React from "react";

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
    {number ? (
      <span className="font-brand text-xs uppercase tracking-[0.22em] text-warm-gold">{number}</span>
    ) : null}
    {title ? (
      <span
        className="eyebrow text-ink/70"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    ) : null}
  </div>
);

export const Caption = ({ children, className = "", ...rest }) => (
  <p className={`text-xs text-slate leading-relaxed ${className}`} {...rest}>
    {children}
  </p>
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
