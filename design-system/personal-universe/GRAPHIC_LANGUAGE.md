# Universe of Signals — Graphic Language

> Companion to `MASTER.md`. This document governs the handcrafted artifact layer across Home, Notes, and Work.

## Premise

The graphics are **artifacts from a working personal observatory**: marks made while tracing a question, locating a memory, or explaining how one signal becomes a system. They must look accumulated rather than applied as a theme.

The signature gesture is the **hand-plotted signal notation**: a loose path connecting observed points, with one annotation showing why those points belong together. It bridges Khôi's data work and personal habit of collecting ideas, books, and places.

## Motif library

| Motif | Narrative role | Primary placements |
|---|---|---|
| Signal trace | A raw observation becoming legible | Hero, Recent Signals |
| Lineage sketch | Source → model → decision | Work index, project pages |
| Constellation mark | Separate things held by one relationship | Hero, About |
| Field coordinates | Ground an artifact in a real place/time | Places, Notes metadata |
| Moon phase index | Time, return, and revisiting | Reading |
| Observation slip | A thought temporarily pinned down | Notes, CV facts |
| Route fragment | Movement changes the scale of a question | Places |
| Archive stamp | Provenance and state, never fake authority | CV facts, section transitions |
| Registration grid | Measurement, comparison, alignment | Work and selected transitions |

## Illustration style

- Drawn as if with a technical pen on reused field paper.
- Geometry is recognizable but never mathematically pristine.
- Each main path receives a faint offset echo to create human registration error.
- Endpoints use dots, crosses, short ticks, or open circles—not generic interface icons.
- Text annotations remain short, lowercase or mono uppercase, and explain a relationship.
- No rockets, astronauts, literal galaxies, glowing HUD rings, or decorative pseudo-data.

## Stroke rules

- Primary hand line: `1.35px`, round cap, round join.
- Secondary construction line: `0.8px`, 35–55% opacity.
- Offset imperfection line: `0.65px`, 15–24% opacity, translated `0.7px`.
- Annotation arrow: `1px`, never perfectly straight.
- Dots: `2–3px`; major observation: open circle `6–8px`.
- Dashed guides: irregular rhythm such as `2 7 5 9`, not uniform dashboard dashes.

## Texture rules

- Dark surfaces receive sparse fiber/noise at `2–4%` opacity.
- Paper artifacts use `#E7E2D6` with ink `#1B252B`; never pure white.
- Grid paper uses 18–24px cells and one heavier registration line every 4 cells.
- Tape is translucent warm gray or faded amber, skewed `±1–2deg`, with uneven clip-path edges.
- Texture must not sit over body text at an opacity that reduces contrast.
- No raster texture is required: CSS gradients and small SVG patterns keep the system reusable.

## Color use

- Chalk: `#F0EEE7` — primary ink on dark.
- Graphite: `#A7AFB5` — construction marks.
- Signal blue: `#8FA8D4` — observed/data relationship.
- Archive amber: `#C7A064` — human note, memory, or provenance.
- Paper: `#E7E2D6` — collected physical artifact.
- Paper ink: `#1B252B` — marks on paper.

One artifact uses at most two inks plus its surface color. Blue means an observed connection; amber means a kept or remembered connection.

## Motion rules

- A signal trace may draw once when entering view; duration `900–1400ms`.
- A registration echo may drift no more than `1px` over `8–14s`.
- Tape, paper, stamps, and handwritten annotations never float or bob.
- Hover may reveal one annotation or deepen ink opacity; no layout shift.
- No more than two artifact motions visible in one viewport.
- Under `prefers-reduced-motion`, all artifacts render in their final state with no drift or path drawing.

## Placement rules

### Where artifacts belong

- At narrative transitions where the type of signal changes.
- Beside content whose relationship the artifact actually explains.
- In margins, gutters, image edges, and metadata bands.
- On paper contrast sections where a collected object makes conceptual sense.

### Where artifacts do not belong

- Behind long body copy or interactive controls.
- Repeated in every card or row.
- In empty space solely to make the page look busier.
- On top of photographs unless the mark refers to a specific observed detail.
- More than one dominant artifact per section.

## Accessibility and performance

- Decorative artifacts use `aria-hidden="true"` and `focusable="false"`.
- Any meaning required to understand the page also appears in nearby visible text.
- SVGs use `currentColor`, shared CSS tokens, and no JavaScript animation.
- Artifact wrappers reserve their space to avoid layout shift.
- Mobile removes low-value fragments before shrinking meaningful ones into illegibility.
