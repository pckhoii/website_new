# Universe of Signals — Redesign Blueprint

## 1. What the site is

This is Khôi's long-term personal corner of the internet: a living archive of the signals he notices, follows, turns into systems, and decides to keep.

The audience includes recruiters, peers, friends, and curious strangers. The homepage has one job: help a visitor understand how Khôi thinks before asking them to browse what he has made or collected.

## 2. Current-site audit

### What is already strong

- The repository already contains the beginnings of a real personal archive: Work, Notes, Reading, Places, About, bilingual copy, and replaceable content assets.
- `src/lib/projects.ts` contains project narratives with questions, context, process, and outcomes rather than only technology lists.
- `WorkIndex`, `Reveal`, `PageMotionController`, `LocalizedText`, and `useSafeReducedMotion` are useful foundations.
- The existing Personal Universe design documents already understand the desired 70/20/10 balance: editorial archive / data systems / astronomy.
- The observatory, archive, map, and field-note vocabulary is relevant to Khôi's real habit of finding patterns.

### What is not working

- The active homepage is a recruitment funnel. It opens with role, availability, metrics, CTAs, experience, and skills; this makes employment the main story.
- The hero's giant serif statement, electric accent, pill CTAs, proof metrics, and capability grid reproduce portfolio/landing-page conventions the new brief explicitly rejects.
- Personal content is absent from the active homepage even though Notes, Reading, and Places already exist elsewhere in the codebase.
- Home and inner routes use two unrelated visual systems. The homepage uses `recruiter.css`; Notes and Work still use the older archive system.
- Three large style layers are loaded globally (`globals.css`, `archive.css`, and `recruiter.css`), creating overlapping rules and an unnecessarily difficult maintenance surface.
- Several strong personal-archive components are currently orphaned because `RecruiterPortfolio` replaced the original composition.
- Project content exists in two shapes: concise recruiter cards and fuller investigation narratives. The fuller narratives better fit the brief.
- The current metadata describes a Data Engineer/Analyst portfolio instead of a personal website.

### Root cause

The site has assets and components but no single active narrative contract. It currently alternates between “hire me” and “enter my personal archive.” The redesign must choose the second and let professional credibility emerge naturally inside it.

## 3. Narrative system

### Central metaphor

**A Universe of Signals**

Khôi is not presented as an astronaut, scientist, or futuristic operator. He is an attentive observer and editor: someone who notices fragments, traces relationships, builds useful structures, and keeps what remains meaningful.

### Roles

- **Khôi:** observer, connector, system builder, and keeper of notes.
- **Visitor:** a guest tuning into the archive, free to follow one signal into related work, ideas, books, or places.
- **Website:** a quiet instrument and living field log, not a dashboard or game.

### Core thesis

> Some signals become systems. Others become memories. I keep both.

Supporting thought:

> I look for patterns in data, systems, places, and ideas.

### Emotional progression

**Tune in → Notice → Connect → Build → Wander → Keep → Return**

1. **Tune in:** meet Khôi through one concise personal thesis and the current moment.
2. **Notice:** discover recent signals from different parts of life.
3. **Connect:** see relationships across categories instead of isolated cards.
4. **Build:** enter professional investigations where messy inputs become understandable systems.
5. **Wander:** move through reading, places, music, and experiments without a conversion goal.
6. **Keep:** understand why particular ideas or moments were saved.
7. **Return:** arrive at the person behind the archive and an understated way to make contact.

## 4. Content architecture

Use familiar navigation labels. Metaphor supports the content; it never replaces usability.

### Primary navigation

- Home
- Work
- Notes
- Reading
- Places
- About

Future content types such as Music and Experiments can enter the shared signal model without requiring a redesign.

### Homepage

1. **Identity / Now** — personal thesis, current focus, quiet portrait or meaningful current image.
2. **Signal Field** — a mixed, chronological set of current work, notes, reading, places, and experiments.
3. **Selected Investigations** — two or three professional stories framed by their original question.
4. **Things Kept** — books, ideas, music, or references with a short “why I kept this” note.
5. **Field Notes** — short observations and personal writing.
6. **Coordinates** — places and moments, led by images and memory rather than travel statistics.
7. **About / Contact** — one honest introduction and simple contact paths.

### Work detail

Every professional project follows:

**Question → Context → Friction → Approach → System → Change → What stayed with me**

Metrics appear only where verified. Technology supports the story and belongs near implementation detail, not in the opening headline.

### Shared content model

Every entry is a `Signal` with:

- type
- title
- date or period
- summary
- primary visual
- location or context when meaningful
- related signals
- status: current / kept / completed / revisited
- optional “why this matters” or “why I kept it” note

This allows Work, Notes, Reading, Places, Music, and Experiments to feel like one growing world.

## 5. Visual system

### Palette

- **Night archive** `#090E13` — continuous page ground
- **Instrument slate** `#111B24` — secondary depth
- **Star paper** `#F0EEE7` — primary text and warm reading surfaces
- **Fog text** `#A7AFB5` — secondary text
- **Signal blue** `#8FA8D4` — links, selected signals, focus
- **Human amber** `#C7A064` — places, memories, and saved human moments

The world remains continuous: sections change temperature and density, not theme. Warm paper appears as an object inside the night archive rather than an abrupt full-page switch. No electric blue blocks or large gradients.

### Typography

- **Reflective voice / display:** Newsreader, used for personal statements, essay titles, and project questions.
- **Body / navigation:** Be Vietnam Pro, used for readable bilingual prose and interface labels.
- **Evidence / metadata:** JetBrains Mono, used only for dates, coordinates, status, and technical annotations.

The display face is restrained. It should sound like writing, not luxury branding. Body text remains at least 16px with a 60–70 character measure.

### Layout concept

The layout behaves like an annotated field notebook laid over a quiet observing instrument. It alternates between open compositions and dense indexes; it does not repeat card grids.

```text
┌──────────────────────────────────────────────────────────────┐
│ KHOI                     Work Notes Reading Places About      │
├──────────────────────────────────────────────────────────────┤
│ current coordinate       PERSONAL THESIS                     │
│ small portrait / now     one living signal instrument        │
│                          latest observation                  │
├──────────────────────────────────────────────────────────────┤
│ RECENT SIGNALS                                                │
│ work ───────── note ── place ───────── reading               │
│       relationships are visible, not boxed into equal cards  │
├──────────────────────────────────────────────────────────────┤
│ SELECTED INVESTIGATION          contextual visual / diagram   │
│ the question, not the tech stack                              │
├──────────────────────────────────────────────────────────────┤
│ THINGS KEPT          FIELD NOTES          COORDINATES          │
│ varied editorial rhythm; each content type keeps its nature  │
├──────────────────────────────────────────────────────────────┤
│ ABOUT THE OBSERVER                              CONTACT        │
└──────────────────────────────────────────────────────────────┘
```

### Signature element

**The Living Signal Map** is the one deliberate visual risk.

It is a restrained relationship map generated from actual site content. A recent work item can visibly connect to a note, a book, and a place that influenced it. On hover, focus, or tap, one relationship is revealed with a short reason. It is never a generic constellation background.

On small screens, the map becomes a simple vertical “related signals” trail. The content remains fully usable without motion.

## 6. Recurring motifs

- Timestamps mark when an observation was made or revisited.
- Coordinates appear only for real places.
- Thin paths encode genuine related-content links.
- “Current,” “kept,” and “revisited” communicate archive state.
- Project numbers are used only for ordered investigation stages, not decoration.
- “Why I kept this” becomes the connective writing pattern for books, music, ideas, and places.
- A small changing “Now” signal makes the site feel alive over time.

## 7. Interaction language

- One ambient motion system per viewport maximum.
- The hero signal instrument drifts almost imperceptibly and responds only to fine-pointer input.
- Hover/focus reveals a relationship or contextual preview; no information exists on hover alone.
- Project transitions resemble following a traced line into a field report.
- Images use one restrained masked reveal when entering the viewport.
- Navigation and language changes are immediate and quiet.
- No scroll-jacking, forced parallax, bouncing, rotating planets, or loading theatre.
- Reduced-motion mode renders all final states immediately and removes drift/parallax.

## 8. Component architecture

### Keep and refine

- `LocalizedText` and `LanguageSwitcher`
- `Reveal` and `useSafeReducedMotion`
- `WorkIndex`, rebuilt around project questions and investigation status
- the content-driven narratives in `src/lib/projects.ts`
- selected pointer/scroll logic from `PageMotionController`
- the image-first Notes and Places patterns

### Rebuild

- `SiteHeader` as one consistent header across every route
- homepage composition around mixed signals instead of recruiter sections
- `OrbitalHero` into a content-linked Living Signal Map
- project detail pages into field reports
- content schema into one typed signal registry with relationships
- CSS into a small token layer plus route/component layers

### Remove or retire

- `RecruiterPortfolio` as the homepage
- `Metric`, `SkillChip`, and recruitment CTA patterns from the main narrative
- full-screen route-transition theatre
- duplicated global design systems and unused planet/space experiments
- decorative technical labels that do not describe real information

Professional details such as CV download, skills, and experience remain accessible from Work/About, but no longer control the homepage.

## 9. Self-critique and revision

The first easy answer would be another dark astronomical portfolio with orbital lines and serif headings. That would still be generic and could drift into sci-fi decoration.

The revision is to make every “signal” literal content data. Lines show real relationships, coordinates refer to real places, timestamps refer to real moments, and archive states describe actual editorial behavior. The memorable element is not space styling; it is the visible connection between how Khôi works and how he lives.

The UI Pro Max generated recommendation leaned toward a conventional hero/features/CTA structure and bright pink accent. Both are rejected because they conflict with the brief. Its verified accessibility and motion guidance remains applicable: visible focus, 44px targets, 4.5:1 text contrast, no horizontal overflow, and a complete reduced-motion state.

## 10. Implementation sequence

1. Consolidate tokens, typography, shared layout, language state, and content types.
2. Build the typed signal registry and real relationships between existing content.
3. Recompose the homepage around Identity, Recent Signals, Investigations, Things Kept, Coordinates, and About.
4. Rebuild Work detail and Notes so they share the same narrative world.
5. Retire duplicate recruiter/planet layers after verifying no route depends on them.
6. Test keyboard, reduced motion, bilingual layout, and 375 / 768 / 1024 / 1440 widths.

This sequence avoids another visual reskin. It changes the site's governing story first, then makes every page and component answer to that story.
