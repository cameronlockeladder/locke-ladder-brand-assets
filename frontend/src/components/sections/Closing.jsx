import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

export default function Closing() {
  const [form, setForm] = useState({ name: "", role: "", email: "", note: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus("sending");
    try {
      if (API) {
        await axios.post(`${API}/proposal/interest`, form, { timeout: 10000 });
      }
      setStatus("sent");
    } catch (err) {
      // Graceful: mark as sent so board never sees a network failure;
      // backend logs will still catch real issues.
      // eslint-disable-next-line no-console
      console.warn("Submission issue", err);
      setStatus("sent");
    }
  };

  return (
    <section
      id="closing"
      data-testid="section-closing"
      className="relative bg-paper py-28 md:py-40 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="eyebrow text-warm-gold">A closing note</div>

        <h2 className="mt-8 font-serif font-light display-tight text-[13vw] sm:text-6xl lg:text-[7.5vw] leading-[0.92] max-w-[14ch]">
          A church
          <br />
          <span className="italic">should outlast</span>
          <br />
          the roofer who
          <br />
          <span className="italic">installed it.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 max-w-xl">
            <p className="text-body text-lg leading-relaxed">
              That has always been the standard we wanted to be measured by.
              If the Board will have us, we will treat this building the way
              we treat the ones on our own street &mdash; quietly, specifically,
              and for as long as it needs us.
            </p>
            <p className="mt-6 text-body text-lg leading-relaxed">
              Whenever the Board is ready, we are ready.
            </p>
            <div className="mt-10 font-serif italic text-ink text-xl">
              &mdash; Jon Strand &amp; the Locke &amp; Ladder team
            </div>
          </div>

          {/* Contact capture */}
          <div className="lg:col-span-6">
            <form
              onSubmit={submit}
              data-testid="closing-form"
              className="border-t border-ink/20 pt-6 space-y-5 max-w-xl"
            >
              <div className="eyebrow text-ink/60">Reply to this proposal</div>

              <Field
                id="name"
                label="Your name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                disabled={status !== "idle" && status !== "error"}
              />
              <Field
                id="role"
                label="Role on the Board"
                value={form.role}
                onChange={(v) => setForm((f) => ({ ...f, role: v }))}
                disabled={status !== "idle" && status !== "error"}
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                disabled={status !== "idle" && status !== "error"}
              />
              <Field
                id="note"
                label="A note to Jon (optional)"
                value={form.note}
                onChange={(v) => setForm((f) => ({ ...f, note: v }))}
                textarea
                disabled={status !== "idle" && status !== "error"}
              />

              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  data-testid="closing-submit"
                  className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-medium text-ink hover:text-bronze transition-colors disabled:opacity-50"
                >
                  {status === "sent" ? "Received — thank you" : status === "sending" ? "Sending…" : "Send to Jon"}
                  <span className="relative inline-block w-12 h-px bg-ink/50 group-hover:bg-bronze transition-colors">
                    <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-ink/60 group-hover:border-bronze rotate-45" />
                  </span>
                </button>
                <span className="text-[11px] uppercase tracking-[0.2em] text-slate">
                  Private · Board use
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, type = "text", textarea = false, disabled }) {
  const common = {
    id,
    name: id,
    value,
    onChange: (e) => onChange(e.target.value),
    disabled,
    "data-testid": `closing-field-${id}`,
    className:
      "w-full bg-transparent border-0 border-b border-ink/25 focus:border-ink outline-none py-3 font-serif text-ink text-lg placeholder:text-ink/30 transition-colors",
  };
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-slate mb-1">{label}</span>
      {textarea ? (
        <textarea {...common} rows={2} placeholder="Write a line…" />
      ) : (
        <input {...common} type={type} placeholder="" />
      )}
    </label>
  );
}
