# Personal Universe — Design System

> Approved art direction. Page overrides in `pages/` take precedence.

## Concept

**An evolving archive of work, ideas, curiosity, and life.** Personal Universe combines editorial composition, cinematic atmosphere, and restrained astronomical cues. Data / Analytics / Engineering is the primary professional identity, while notes, reading, places, experiments, and everyday observations keep the archive human.

## Visual principles

1. One dominant visual idea per screen.
2. Typography before decoration.
3. Near-black space must have restrained depth.
4. Use an asymmetric editorial grid and generous negative space.
5. Professional clarity (data and systems) must support human breadth (reading, places, and life).
6. Metaphor never blocks readability or navigation.
7. Premium comes from restraint, not effects.

## Tokens

### Color

| Token | Value | Role |
|---|---|---|
| `--space-1000` | `#07090D` | Main background |
| `--space-950` | `#0A0D13` | Section background |
| `--space-900` | `#0E131C` | Atmospheric surface |
| `--space-800` | `#171D28` | Elevated surface |
| `--star-100` | `#F1EEE6` | Primary heading |
| `--star-200` | `#D7D6D1` | Body text |
| `--star-400` | `#9EA4AE` | Secondary text |
| `--star-600` | `#747C88` | Faint metadata; passes 4.5:1 on the main background |
| `--orbit-line` | `rgba(211,218,230,.14)` | Rules and orbital lines |
| `--signal-blue` | `#8FA8D4` | Signal and interaction accent |
| `--signal-violet` | `#9B91BF` | Atmospheric accent only |
| `--signal-amber` | `#C7A064` | Human/place accent |
| `--focus` | `#C8D8F4` | Focus indicator |

Use one accent at a time. Violet is not a CTA color. No large purple gradients.

### Typography

- Display: Playfair Display 400–500.
- Body/UI: Be Vietnam Pro 300–600.
- Metadata: JetBrains Mono 400–500, uppercase, wide tracking.
- Body minimum: 16px / 1.5 line height.
- Hero: `clamp(4.5rem, 11vw, 10rem)`.
- Page title: `clamp(3.5rem, 8vw, 7rem)`.
- Section title: `clamp(2.5rem, 5vw, 4.75rem)`.
- Body measure: 58–68 characters.

### Spacing and grid

- Base unit: 4px.
- Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160.
- Desktop: 12 columns, 64–96px margin, 24px gutter.
- Tablet: 8 columns, 32px margin, 20px gutter.
- Mobile: 4 columns, 20px margin, 16px gutter.
- Composition max: 1600px. Text and controls stay inside the safe grid.

### Shape

- Radius: 0 / 4 / 8 / 12px only.
- Border: 1px `--orbit-line`.
- No floating SaaS card shadows. Use cards only where hierarchy requires a bounded surface.

## Motion

- UI feedback: 160–220ms, ease-out.
- Text reveal: 600–900ms, cinematic ease-out.
- Section arrival: 700–1100ms.
- Atmospheric transition: 1000–1500ms.
- Orbital drift: 30–60s and almost imperceptible.
- Animate transform, opacity, or shader uniforms only.
- No bounce, spring overshoot, or large scroll displacement.
- Respect `prefers-reduced-motion`; render readable final state immediately.

## Interaction

- Minimum target: 44×44px.
- Visible 2px focus ring with 2–4px offset.
- Hover never carries information alone.
- Cursor-reactive atmosphere only on fine pointers.
- Fixed UI must not obscure keyboard focus.

## Component language

Recent Signal Entry, Work Study, Note Entry, Reading Entry, Place Index, Editorial Section Heading, Atmospheric Media Frame, and minimal Site Navigation. shadcn primitives may provide accessible behavior, but must be visually adapted to this system.

## Anti-patterns

- SaaS hero, multiple CTA buttons, bento-card wall.
- Excessive neon, glow, purple gradients, or glassmorphism.
- Gradient text, giant pills, 20px+ radius cards.
- Dense HUD/terminal treatment or decorative system text.
- Decorative sci-fi labels where plain content language is clearer.
- Multiple 3D scenes, dense star fields, astronauts, rockets, or generic space icons.
- Motion that delays reading or changes layout.
- Mono for body copy.

## Delivery checks

- Contrast ≥ 4.5:1 for normal text.
- Keyboard navigation and visible focus.
- Reduced-motion fallback.
- No horizontal overflow at 375 / 768 / 1024 / 1440 widths.
- Expensive visuals are isolated and lazy-loaded.
- SVG/Lucide icons only; decorative visuals are hidden from assistive technology.
