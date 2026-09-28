# Route Transition — Signal Observatory

## Signature

Navigation uses the owner's layered source artwork directly. Its domed station, open viewing slit, telescope, orbit system, annex, antenna, glow and alignment marks remain separate SVG layers. The building stays grounded while the telescope layer sweeps from left to right. A single point travels along the authored observation arc and locks to the instrument; the complete station then compresses into the horizontal line that reveals the destination.

The silhouette is based on the owner's supplied sketch and remains legible at small sizes. Its varied line weights resemble an architectural plate collected in a field notebook. It must never become a rendered building, decorative HUD, or dashboard.

## Element budget

1. Primary graphic: one engraved observatory station with a domed roof and internal telescope.
2. Secondary signal: one point that follows the observation arc and resolves at the target.
3. Label: one factual section index, such as `01 / WORK`.

The background grid belongs to the site environment and remains almost invisible. A second ground orbit and registration marks may appear only as construction geometry from the supplied sketch. No status prose, coordinates, telemetry, particles, or invented data are allowed.

## Narrative and timing

1. **Seek · 0–220ms** — the two dark fields close over the current page while the telescope waits at the left of its range.
2. **Acquire · 220–650ms** — the telescope pans right inside the open dome while one point traces the observation arc.
3. **Lock · 650–1180ms** — the point settles into a small target ring and the station reaches full ink weight.
4. **Transmit · 1180–1480ms** — the complete station collapses into a one-pixel axis; that axis crosses the viewport and separates the dark field to reveal the new page.

The route starts loading at 170ms and does not wait for the animation. A prefetched route therefore completes in about 1480ms; a slower route holds on the locked instrument without adding loops or fake progress.

## Visual rules

- Field: observatory navy `#050911`.
- Default signal: muted optical blue `#8FA8D4`.
- Route variation is limited to the existing blue, violet, brass, and neutral instrument colors.
- Stroke: 0.42–1.05px optical weight, round caps. Glow is reserved for the moving target point and mast light.
- Instrument: up to 720px desktop, up to 350px compact screens.
- Composition: centered and still; the transformation provides the interest.

## Copy

The label is structural information, not fictional system language:

- `00 / ORIGIN`
- `01 / WORK`
- `02 / NOTES`
- `03 / READING`
- `04 / PLACES`
- `05 / ABOUT`

## Reduced motion

With `prefers-reduced-motion: reduce`, internal navigation is immediate and the overlay remains hidden. No navigation information depends on the animation.
