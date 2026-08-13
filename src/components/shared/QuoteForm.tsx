"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { services } from "@/data/site";

export function QuoteForm() {
  const params = useSearchParams();
  const defaults = useMemo(
    () => ({
      type: params.get("type") || "",
      pattern: params.get("pattern") || "",
      material: params.get("material") || "",
      finish: params.get("finish") || "",
      width: params.get("width") || "",
      height: params.get("height") || "",
      estimate: params.get("estimate") || "",
    }),
    [params]
  );

  const [status, setStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || !phone) {
      setStatus("Please add your name and phone number.");
      return;
    }
    setStatus(
      "Thanks. Your Maggs enquiry is ready. Call 0772780125 if you need a same-day response."
    );
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card-surface space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input name="name" required placeholder="Jordan Maggs" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" required placeholder="07727 80125" />
        </label>
      </div>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" placeholder="you@email.com" />
      </label>
      <label className="field">
        <span>Project type</span>
        <select name="type" defaultValue={defaults.type}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">
          <span>Pattern / style</span>
          <input name="pattern" defaultValue={defaults.pattern} placeholder="Geo Slash" />
        </label>
        <label className="field">
          <span>Material</span>
          <input name="material" defaultValue={defaults.material} placeholder="Mild steel" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="field">
          <span>Width (m)</span>
          <input name="width" defaultValue={defaults.width} />
        </label>
        <label className="field">
          <span>Height (m)</span>
          <input name="height" defaultValue={defaults.height} />
        </label>
        <label className="field">
          <span>Estimate</span>
          <input name="estimate" defaultValue={defaults.estimate ? `£${defaults.estimate}` : ""} readOnly />
        </label>
      </div>
      <label className="field">
        <span>Project notes</span>
        <textarea
          name="notes"
          rows={4}
          placeholder="Site address, access notes, drawings, timeline..."
          defaultValue={
            defaults.finish
              ? `Finish preference: ${defaults.finish}`
              : undefined
          }
        />
      </label>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Send enquiry
        </button>
        <p className="text-sm text-maggs-mute" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
