# A Universe of Signals — Archive Product System

## 1. Revised product direction

The website is a personal digital world: a compact observatory desk that opens into independent collections. It is not a linear portfolio presentation. Visitors should understand who Khoi is, see what changed recently, and choose a direction within one screen.

## 2. Information architecture

- `/` — Archive Desk: identity, current status, five collection gateways, recent transmissions.
- `/work` — Case Log: professional investigations and project records.
- `/work/[slug]` — Case File: question, context, approach, evidence, outcome.
- `/notes` — Field Notebook: dated thoughts and observations.
- `/reading` — Reading Ledger: books, states, and marginal notes.
- `/places` — Field Atlas: places, coordinates, images, and remembered details.
- `/about` — Personal Dossier: profile, experience, education, skills, and contact. CV facts remain readable in-page; no CV download is offered.

## 3. UI system

The shared frame contains a persistent masthead, direct collection navigation, language switcher, collection label, metadata rows, ruled lists, index numbers, and a compact footer. Cards are used as archive records, never as generic product tiles. Borders create filing structure; surfaces indicate collection type.

## 4. Visual language

- Dark ink desk for Home, Work, Notes, and About.
- Warm paper ledger for Reading.
- Muted blue-black atlas for Places.
- Existing hand-drawn artifacts become stamps, specimen marks, and margin annotations.
- 1px structural rules, 1.25px illustration strokes, restrained blue/amber accents.
- Grain and grid appear at low contrast. No glow, HUD treatment, or decorative space filler.

## 5. Page types and logic

- Hub: routes outward and shows only a small recent cross-section.
- Index: scans records by number, date, state, and subject.
- Detail: explains one investigation without duplicating the whole archive.
- Dossier: groups factual personal information with strong provenance and direct contact.

## 6. Reusable components

`SiteHeader`, `ArchiveFooter`, `CollectionHeader`, `RecordLink`, `GraphicArtifact`, and `LocalizedText`. Every record exposes a stable number/status plus one human annotation.

## 7. Motion rules

- Hover/focus feedback: 180–240ms.
- Preview changes: opacity/transform only, under 400ms.
- Collection navigation uses one brief full-screen “Signal Calibration” interstitial: 300ms cover, route handoff, 580ms reveal. It identifies the destination and never waits artificially for data.
- The instrument changes paper/ink color by destination but keeps one recognizable signal-wave motif.
- No scroll-jacking, parallax, or indefinite page-blocking transitions.
- Decorative motion is optional and must stop under `prefers-reduced-motion`.

## 8. Homepage versus separate pages

The homepage answers “who, what, where next?” and ends quickly. Depth lives in collection routes. Work owns professional proof; Notes owns thinking; Reading owns influences; Places owns memory and observation; About owns CV facts and contact. A visitor never needs to scroll through unrelated collections to reach one of them.
