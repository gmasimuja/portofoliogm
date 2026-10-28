"use client";

import { useState } from "react";
import { methodFilters, sectors } from "../data";

const ALL = "Semua metode";

export default function ProjectRecord() {
  const [method, setMethod] = useState<string>(ALL);

  const visible = sectors
    .map((s) => ({
      ...s,
      items:
        method === ALL ? s.items : s.items.filter((p) => p.methods.includes(method)),
    }))
    .filter((s) => s.items.length > 0);

  const count = visible.reduce((n, s) => n + s.items.length, 0);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Saring proyek berdasarkan metode"
      >
        {[ALL, ...methodFilters].map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={method === m}
            onClick={() => setMethod(m)}
            className="filter-chip"
          >
            {m}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-ink-2" aria-live="polite">
        {method === ALL
          ? `${count} proyek`
          : `${count} proyek dengan metode ${method}`}
      </p>

      <div className="mt-6">
        {visible.map((s) => (
          <section key={s.sector} className="record-group">
            <h3 className="record-sector">{s.sector}</h3>
            <ul>
              {s.items.map((p) => (
                <li key={p.name} className="record-row">
                  <span className="record-year">{p.year}</span>
                  <span className="record-main">
                    <span className="block font-semibold text-ink">{p.name}</span>
                    {(p.place || p.note) && (
                      <span className="block text-sm text-ink-2 mt-0.5">
                        {[p.place, p.note].filter(Boolean).join(". ")}
                      </span>
                    )}
                  </span>
                  <span className="record-methods">
                    {p.methods.map((m) => (
                      <span key={m} className={m === method ? "tag tag-on" : "tag"}>
                        {m}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
