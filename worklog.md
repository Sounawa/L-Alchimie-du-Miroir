# Worklog - L'Alchimie du Miroir

---
Task ID: 1
Agent: Main Agent
Task: Build interactive book website "L'Alchimie du Miroir" - Niveau 1

Work Log:
- Analyzed the original HTML static page (book with cover, 6 chapters, annexes, back cover)
- Updated `layout.tsx` to load 4 Google Fonts: Amiri, Cormorant Garamond, Inter, Noto Naskh Arabic
- Updated `globals.css` with book-specific CSS (custom colors, animations, typography, responsive breakpoints, print styles)
- Created 11 reusable book components in `src/components/book/`:
  - `Timer.tsx` - Countdown timer with start/pause/reset
  - `ExerciseBox.tsx` - Exercise container with WritingArea
  - `QuoteBlock.tsx` - Styled blockquote with citations
  - `Callout.tsx` - Info/warning/danger callout boxes
  - `NumberedSteps.tsx` - Numbered instruction steps
  - `PhaseCard.tsx` - Phase overview cards
  - `GlossaryCard.tsx` - Arabic glossary term cards
  - `OrnamentDivider.tsx` - Decorative dividers
  - `BookTable.tsx` - Styled data tables
  - `CheckboxItem.tsx` - Interactive checkboxes
  - `MunajatWriter.tsx` - Prompt chips for Munajat section
- Built complete `page.tsx` (1400+ lines) with all 11 sections
- Added smooth scrolling, clickable TOC with anchor links
- Added responsive timer font sizing for mobile
- Browser-tested all features: timers, checkboxes, textareas, prompt insertion, localStorage save
- Fixed ESLint error in Timer component (setState in effect)
- Fixed JSX parsing error in TOC map expression
- Pushed to GitHub: https://github.com/Sounawa/L-Alchimie-du-Miroir

Stage Summary:
- Complete interactive book website built and deployed
- All 4 timers functional (Fana 5min, Tajalli 7min, Munajat 5min, Béance 3min)
- All interactive features working: checkboxes, textareas, prompt insertion, save to localStorage
- Responsive design verified on desktop/tablet/mobile
- Zero lint errors, zero console errors
- Book contains: Cover, TOC, Introduction, Chapters I-VI, Annexes (Glossary, Journal, Resources), Back Cover
- Published to GitHub: https://github.com/Sounawa/L-Alchimie-du-Miroir

---
Task ID: 2
Agent: Main Agent
Task: Fix client-side exception error on deployed site

Work Log:
- Diagnosed the root cause: `ProgressTracker.tsx` used `useSyncExternalStore` with an unstable server snapshot `() => ({})` that created a new empty object on every call
- This caused infinite re-renders during hydration when the server-rendered empty snapshot differed from the client-side localStorage data
- Fixed by implementing a proper cached snapshot system:
  - Added `STORAGE_SNAPSHOT` — a frozen module-level constant for referential stability
  - Added `getSnapshot()` with module-level `_cachedRaw`/`_cachedParsed` cache that returns the same reference when data hasn't changed
  - Added `getServerSnapshot()` that returns the stable `STORAGE_SNAPSHOT` constant
  - Added `emitChange()` that invalidates the cache before notifying subscribers
  - Removed the previous `useState`+`useEffect` fallback approach that caused lint errors
- Verified fix with agent-browser: zero console errors, all interactive elements render correctly
- Lint passes cleanly with zero errors

Stage Summary:
- Root cause: `useSyncExternalStore` requires referentially stable snapshots; the original code returned a new `{}` object on every `getServerSnapshot()` call
- Fix: Module-level cache + frozen constant ensures the same object reference is returned when data hasn't changed
- Site now loads without client-side exceptions
- All features confirmed working: ProgressTracker grid, day detail dialog, completion toggling, mood selection, journal entries
