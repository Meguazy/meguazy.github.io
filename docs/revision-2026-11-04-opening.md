# Problem-led FounDaTionZy opening — 2026-11-04

Status: owner-approved editorial revision for a local commit and integration
into `main`. The owner explicitly reserved the push for themselves; no agent
push or deployment is included.

## Direction and source

The owner provided feedback to describe the current problem first, then show
how and why the framework addresses it through an example. After reviewing
the resulting local revision, the owner approved it on 2026-11-04 and requested
that all changes be committed and integrated into local `main`, with a manual
push by the owner.

Portfolio baseline: clean `main` at
`08b200527d14d5eb6035c9ff0d7afc4126bc43d7`. Framework source:
`docs/guides/how-it-works.md` at local HEAD
`2ead93dc04a7131a1e81526c2897a9ca33493049`, particularly the booking example,
canonical document responsibilities, scoped delivery, and evidence boundaries.

## Changes

- Replaced the abstract opening with the concrete risk of losing requirements,
  reasons for decisions, and unfinished work between AI sessions.
- Explained the repository-based solution and why code alone does not preserve
  the complete requirement or reasons for rejected alternatives.
- Added an illustrative room-booking example before the existing seven chapters:
  preserve the no-overlap rule, scope booking creation, leave cancellation policy
  as a timed open decision, define a concurrency check, and hand off explicit
  implementation/evidence/acceptance states.
- Clearly labeled the example as illustrative. It is not an implemented
  application, measured improvement, or passing-test claim.
- Prepared English source and IT/FR/DE/ES/PL translations in
  `src/data/foundationOpening.ts`; `src/components/FoundationCase.astro` renders
  the opening and adds its navigation anchor. Existing diagrams remain.
- Updated README, site specification, and roadmap links to this record. Raw
  feedback, private applications, and the LinkedIn draft are outside the change.

## Validation

Environment: existing temporary preview copy, macOS, Node.js `v22.22.3`, npm
`10.9.8`, unchanged pinned dependencies. Final source is compared byte for byte
with that checked copy when applied to the portfolio.

- `ASTRO_TELEMETRY_DISABLED=1 npm run check`: passed; 28 files, zero errors,
  warnings, or hints. The later CSS-only adjustment sets chapter spacing after
  the new opening; it does not change the checked types.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: passed after the spacing change;
  49 static pages.
- Generated HTML: all six openings retain the problem/solution/example order,
  four example stages, and existing chapter anchors. Internal links and anchors
  resolve and IDs are unique.
- Documentation links and whitespace are checked after application.

This is editorial and static presentation work; no application behavior or model
behavior changed and no unit tests were added. New visual/mobile and independent
language reviews have not been completed. Owner approval does not establish
those checks. Source hashes were rechecked before integration and the previously
recorded automatic checks remain applicable because source/configuration did
not change. Next action: manual push by the owner, then verify the Pages run and
live routes. No online deployment is claimed by this record.
