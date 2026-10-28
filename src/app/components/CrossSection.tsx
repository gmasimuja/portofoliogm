// Illustrative 2D resistivity cross-section used as the hero figure.
// Deterministic geometry so server and client render identically.

const W = 1200;
const H = 320;
const X0 = 30;
const X1 = 1170;
const SPACING = 15; // px per electrode = 5 m

const surface = (x: number) =>
  30 + 5 * Math.sin(x / 170) + 2.5 * Math.sin(x / 53 + 1);

type Boundary = (x: number) => number;

const boundaries: { fn: Boundary; color: string }[] = [
  { fn: surface, color: "var(--rho-4)" },
  {
    fn: (x) => surface(x) + 26 + 10 * Math.sin(x / 140 + 0.6) + 5 * Math.sin(x / 61),
    color: "var(--rho-3)",
  },
  {
    fn: (x) => 112 + 22 * Math.sin(x / 210 + 2.1) + 8 * Math.sin(x / 77 + 0.4),
    color: "var(--rho-2)",
  },
  {
    fn: (x) => 178 + 26 * Math.sin(x / 260 + 0.2) + 9 * Math.sin(x / 90 + 1.7),
    color: "var(--rho-1)",
  },
  {
    fn: (x) => 248 + 18 * Math.sin(x / 300 + 1.4) + 6 * Math.sin(x / 70),
    color: "var(--rho-0)",
  },
];

function areaBelow(fn: Boundary) {
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 10) pts.push(`${x},${fn(x).toFixed(1)}`);
  return `M${pts.join(" L")} L${W},${H} L0,${H} Z`;
}

function line(fn: Boundary) {
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 10) pts.push(`${x},${fn(x).toFixed(1)}`);
  return `M${pts.join(" L")}`;
}

const electrodes: number[] = [];
for (let x = X0; x <= X1; x += SPACING) electrodes.push(x);

const distanceTicks = [0, 100, 200, 300, 380];
const depthTicks = [0, 10, 20, 30, 40];
const depthY = (d: number) => 32 + (d / 40) * 280;

export const rhoScale = [
  "var(--rho-0)",
  "var(--rho-1)",
  "var(--rho-2)",
  "var(--rho-3)",
  "var(--rho-4)",
  "var(--rho-5)",
];

export default function CrossSection() {
  return (
    <figure className="section-figure">
      <svg
        viewBox={`-56 -34 ${W + 76} ${H + 46}`}
        role="img"
        aria-labelledby="xsec-title xsec-desc"
        className="w-full h-auto block"
      >
        <title id="xsec-title">Ilustrasi penampang resistivitas 2D</title>
        <desc id="xsec-desc">
          Lapisan tanah dengan resistivitas berbeda dan satu anomali resistivitas
          tinggi di tengah lintasan yang dapat mengindikasikan rongga.
        </desc>
        <defs>
          <clipPath id="xsec-clip">
            <rect x="0" y="0" width={W} height={H} />
          </clipPath>
        </defs>

        <g className="xsec-reveal" clipPath="url(#xsec-clip)">
          <rect x="0" y="0" width={W} height={H} fill="var(--paper)" />
          {boundaries.map((b, i) => (
            <path key={i} d={areaBelow(b.fn)} fill={b.color} />
          ))}
          {boundaries.slice(1).map((b, i) => (
            <path
              key={`l${i}`}
              d={line(b.fn)}
              fill="none"
              stroke="var(--paper)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          ))}
          {/* High-resistivity anomaly, e.g. air-filled cavity */}
          <path
            d="M690,138 C705,108 772,98 812,112 C850,124 868,150 852,172 C834,196 770,198 728,186 C694,176 678,160 690,138 Z"
            fill="var(--rho-4)"
          />
          <path
            d="M722,142 C735,124 778,120 803,132 C826,143 830,160 816,171 C798,184 756,183 735,174 C716,166 712,154 722,142 Z"
            fill="var(--rho-5)"
          />
          {/* Mask the sky above the ground surface */}
          <path
            d={`${line(surface)} L${W},0 L0,0 Z`}
            fill="var(--paper)"
          />
        </g>

        {/* Ground surface and electrodes */}
        <path
          d={line(surface)}
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
          clipPath="url(#xsec-clip)"
        />
        <g className="xsec-electrodes">
          {electrodes.map((x) => (
            <line
              key={x}
              x1={x}
              x2={x}
              y1={surface(x) - 7}
              y2={surface(x) + 1}
              stroke="var(--ink)"
              strokeWidth="1.2"
            />
          ))}
        </g>

        {/* Axes */}
        <g className="xsec-axis" fill="var(--ink-2)" fontSize="13">
          {distanceTicks.map((d) => (
            <text key={d} x={X0 + d * 3} y={-14} textAnchor="middle">
              {d === 380 ? "380 m" : d}
            </text>
          ))}
          {depthTicks.map((d) => (
            <g key={d}>
              <line
                x1={-8}
                x2={-2}
                y1={depthY(d)}
                y2={depthY(d)}
                stroke="var(--ink-2)"
              />
              <text x={-14} y={depthY(d) + 4} textAnchor="end">
                {d === 40 ? "40 m" : d}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <figcaption className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-ink-2">
        <span className="max-w-[60ch]">
          Ilustrasi penampang resistivitas 2D, 77 elektroda dengan spasi 5 m. Area
          berwarna terang di tengah adalah anomali resistivitas tinggi yang dapat
          menandakan rongga. Bukan data proyek.
        </span>
        <span className="flex items-center gap-2 shrink-0" aria-hidden="true">
          <span>Resistivitas rendah</span>
          <span className="flex">
            {rhoScale.map((c) => (
              <span key={c} className="block h-3 w-5" style={{ background: c }} />
            ))}
          </span>
          <span>tinggi</span>
        </span>
      </figcaption>
    </figure>
  );
}
