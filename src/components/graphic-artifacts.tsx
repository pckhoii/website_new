import clsx from "clsx";

export type GraphicArtifactVariant =
  | "signal-trace"
  | "lineage"
  | "constellation-k"
  | "moon-index"
  | "route-map"
  | "observation-slip";

type GraphicArtifactProps = {
  variant: GraphicArtifactVariant;
  className?: string;
  caption?: string;
  tone?: "blue" | "amber" | "chalk" | "paper";
};

const sharedSvgProps = {
  "aria-hidden": true,
  focusable: false,
  viewBox: "0 0 320 180",
} as const;

function SignalTrace() {
  return (
    <svg {...sharedSvgProps}>
      <path className="artifact-construction" d="M20 132C66 118 93 138 126 99S187 52 219 76s51 21 82-18" />
      <path className="artifact-echo" d="M20 132C66 118 93 138 126 99S187 52 219 76s51 21 82-18" />
      <path className="artifact-primary artifact-draw" pathLength="1" d="M20 132C66 118 93 138 126 99S187 52 219 76s51 21 82-18" />
      <path className="artifact-guide" d="M20 151H303M54 26V151M126 42V151M219 35V151M291 27V151" />
      <g className="artifact-points">
        <circle cx="54" cy="124" r="3" /><circle cx="126" cy="99" r="5" /><circle cx="219" cy="76" r="3" /><circle cx="291" cy="63" r="5" />
        <path d="M120 93l12 12m0-12l-12 12M285 57l12 12m0-12l-12 12" />
      </g>
      <path className="artifact-arrow" d="M158 35c23 4 37 15 48 30m-1-9 1 9-9-2" />
      <text x="24" y="166">raw / noticed</text><text x="212" y="28">relation found</text>
    </svg>
  );
}

function LineageSketch() {
  return (
    <svg {...sharedSvgProps}>
      <path className="artifact-gridline" d="M18 35H304M18 90H304M18 145H304M58 17V162M160 17V162M262 17V162" />
      <path className="artifact-primary artifact-draw" pathLength="1" d="M51 126C86 126 91 71 131 71s40 46 77 46 41-65 79-65" />
      <path className="artifact-echo" d="M51 126C86 126 91 71 131 71s40 46 77 46 41-65 79-65" />
      <g className="artifact-nodes">
        <circle cx="51" cy="126" r="10" /><circle cx="131" cy="71" r="10" /><circle cx="208" cy="117" r="10" /><circle cx="287" cy="52" r="10" />
        <circle cx="51" cy="126" r="2" /><circle cx="131" cy="71" r="2" /><circle cx="208" cy="117" r="2" /><circle cx="287" cy="52" r="2" />
      </g>
      <path className="artifact-arrow" d="M239 31c17-9 33-7 42 6m-9-2 9 2-3-9" />
      <text x="23" y="151">01 source</text><text x="112" y="54">02 shape</text><text x="244" y="84">03 decision</text>
    </svg>
  );
}

function ConstellationK() {
  return (
    <svg {...sharedSvgProps}>
      <path className="artifact-guide" d="M30 28H290M30 90H290M30 152H290M80 16V164M160 16V164M240 16V164" />
      <path className="artifact-primary artifact-draw" pathLength="1" d="M86 31L84 149M85 94L205 28M86 94L224 149" />
      <path className="artifact-echo" d="M86 31L84 149M85 94L205 28M86 94L224 149" />
      <g className="artifact-points">
        <circle cx="86" cy="31" r="4" /><circle cx="85" cy="94" r="6" /><circle cx="84" cy="149" r="4" /><circle cx="205" cy="28" r="4" /><circle cx="224" cy="149" r="4" />
        <circle cx="152" cy="58" r="2" /><circle cx="164" cy="124" r="2" />
      </g>
      <path className="artifact-arrow" d="M242 47c19 10 26 26 27 46m-5-8 5 8 5-8" />
      <text x="232" y="112">K / kept signal</text><text x="31" y="174">personal constellation · saigon</text>
    </svg>
  );
}

function MoonIndex() {
  return (
    <svg {...sharedSvgProps}>
      <path className="artifact-construction" d="M24 132C85 108 143 145 197 111s76-39 105-19" />
      <g className="artifact-moons">
        <circle cx="54" cy="73" r="25" />
        <path d="M54 48a25 25 0 1 0 0 50c-13-7-13-43 0-50Z" />
        <circle cx="133" cy="73" r="25" />
        <path d="M133 48a25 25 0 0 1 0 50c12-8 12-42 0-50Z" />
        <circle cx="212" cy="73" r="25" />
        <path d="M212 48a25 25 0 0 0 0 50c20-8 20-42 0-50Z" />
        <circle cx="291" cy="73" r="12" />
      </g>
      <path className="artifact-guide" d="M54 111v23M133 111v23M212 111v23M291 102v32" />
      <text x="35" y="151">begin</text><text x="113" y="151">keep</text><text x="186" y="151">return</text><text x="267" y="151">again</text>
    </svg>
  );
}

function RouteMap() {
  return (
    <svg {...sharedSvgProps}>
      <path className="artifact-topography" d="M7 129c35-38 66-17 91-44s52-42 86-14 49 8 66-17 43-26 68-5M-7 151c40-39 74-14 103-42s55-39 87-10 55 9 75-14 39-20 68-2M8 105c31-35 58-17 84-44s57-39 88-13 43 7 65-16 49-24 76 1" />
      <path className="artifact-primary artifact-draw" pathLength="1" d="M34 132C62 92 93 117 121 81s61-48 92-17 38 54 73 22" />
      <path className="artifact-echo" d="M34 132C62 92 93 117 121 81s61-48 92-17 38 54 73 22" />
      <g className="artifact-points"><circle cx="34" cy="132" r="5" /><circle cx="121" cy="81" r="3" /><circle cx="213" cy="64" r="3" /><circle cx="286" cy="86" r="6" /></g>
      <path className="artifact-arrow" d="M191 130c22-1 42-12 52-30m-9 4 9-4-1 9" />
      <text x="22" y="158">10.8231° N</text><text x="226" y="158">distance changes scale</text>
    </svg>
  );
}

function ObservationSlip() {
  return (
    <svg {...sharedSvgProps}>
      <path className="artifact-paper-edge" d="M24 24l273-4 5 138-278 2Z" />
      <path className="artifact-paper-grid" d="M24 55h276M24 87h276M24 119h276M62 23v137M101 23v137M140 22v137M179 22v137M218 21v137M257 21v137" />
      <path className="artifact-primary artifact-draw" pathLength="1" d="M48 113c24-3 25-30 48-31s25 37 50 31 24-48 49-39 24 36 48 21 22-28 38-14" />
      <path className="artifact-echo" d="M48 113c24-3 25-30 48-31s25 37 50 31 24-48 49-39 24 36 48 21 22-28 38-14" />
      <path className="artifact-arrow" d="M196 48c23-8 43-3 57 16m-10-2 10 2-4-9" />
      <text x="43" y="46">OBSERVATION / 04</text><text x="202" y="142">keep the evidence</text>
    </svg>
  );
}

export function GraphicArtifact({ variant, className, caption, tone = "blue" }: GraphicArtifactProps) {
  const graphic = {
    "signal-trace": <SignalTrace />,
    lineage: <LineageSketch />,
    "constellation-k": <ConstellationK />,
    "moon-index": <MoonIndex />,
    "route-map": <RouteMap />,
    "observation-slip": <ObservationSlip />,
  }[variant];

  return (
    <figure className={clsx("field-artifact", `field-artifact-${variant}`, `field-artifact-${tone}`, className)} aria-hidden="true">
      {variant === "observation-slip" ? <span className="artifact-tape" /> : null}
      {graphic}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
