# Places — Personal Observatory

> Overrides `../MASTER.md` for `/places`.

## 1. Observatory visual direction

Places is a quiet midnight instrument rather than a gallery. The room is deep navy-black (`#050911`) with mineral blue structure, warm optical brass, dim paper-white type, and a sparse field of recorded points. Depth comes from concentric surfaces, vignette, and fine coordinate structure—not neon, blur-heavy glass, or HUD panels.

## 2. Main focal instrument

The **Memory Scope** is a large circular telescope aperture. Its optical window contains the selected place photograph. Concentric azimuth rings, altitude guides, a horizon line, a targeting reticle, and a single observation marker make the image feel actively observed rather than decoratively cropped.

## 3. Interaction model

The target registry contains native buttons for each real place. Selecting a target recalibrates the lens image, coordinates, date, note, and position marker. Rings move slowly; one marker pulses only after detection. Controls expose `aria-pressed`, visible focus, and minimum 44px targets. Reduced-motion mode renders the final state without drift, rotation, or recalibration animation.

## 4. UI hierarchy

1. Persistent site navigation
2. Mission label and statement
3. Memory Scope focal instrument
4. Selected observation facts
5. Target registry
6. Observation log with both real records

## 5. Visual motifs

Azimuth numerals, altitude arcs, calibration ticks, optical rings, horizon line, crosshair, sparse star points, constellation link, record coordinates, and specimen labels. Mono text is metadata only; Newsreader remains the human voice.

## 6. Places narrative

Each place is an observation target: a coordinate, a retained image, a time marker, and one memory sentence. The interface uses only the current `places` dataset—city, coordinates, year, note, and image. It does not invent distance, weather, timestamps, or signal scores.
