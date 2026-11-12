# Career and research case-study revision

Status: owner-approved, ready for branch/PR delivery on `feat/experience-case-studies`;
source base `079ad4b8548916c9c7c43413fdc309f418744a72`. The owner inspected the local
preview and said “Ho controllato io vanno bene vai avanti” on 2026-11-12. This approves
the presented revision; merge/deployment remain unverified. The previous deployed version
remains live until the existing main-branch workflow receives the integrated change.

## Owner direction and factual authority

On 2026-11-12 the owner requested richer descriptions of each work experience, using the
confirmed career/project context, and then explicitly extended the request to NINA and
MR Wolf case studies with explanations and diagrams comparable to Money Tracker.
English remains the editorial source; IT/FR/DE/ES/PL translations accompany it.
The owner also requested making Money Tracker public; GitHub settings and metadata now
confirm public visibility, while its active main-branch protection remains in place.
This supersedes the earlier private-source assumption only for Money Tracker.

Owner-confirmed facts support university technical-lead responsibilities, frequent
Datapizza design decisions, the R&D display label and month-precise earlier employment.
Read-only project source review supports the architecture details below. This authorizes
curated professional descriptions, not raw source/data, client identities, credentials,
clinical-effectiveness claims, invented metrics, sole authorship or a new deployment result.
Final owner approval of the presented website revision is now recorded above. It is not
an independent language review, an agent mobile inspection or a deployment receipt.

## Reviewed scope

- NINA: custom workflow orchestration, explicit conversation state, active-domain history
  plus earlier-domain summaries, report generation and voice/avatar integration. The
  diagram must not assign LangGraph to this implementation or imply every request uses
  every optional component. No clinical protocol, user/patient material or matching logic
  is published.
- MR Wolf: folder/file/chunk hierarchy, organization/path-scoped Milvus retrieval,
  Sentence Transformers embeddings and path-validation tests. This case covers design
  and retrieval implementation, not a verified complete production assistant. Source
  tests are inspected, not reported as newly executed or passing.
- Datapizza: anonymous technical-document Graph RAG, deterministic identifier-first
  ranking/shared analysis, validated XML ingestion and end-to-end LLM-as-a-Judge evaluation.
  The semantic retrieval component is outside the owner's personal contribution.
- Sync Lab and Par-Tec: retain the confirmed technology/delivery scope without invented
  clients, volume, performance or management responsibility.

## Delivered artifact and checks

Six-language experience copy, named NINA/MR Wolf overview cards and detailed research
case components with original semantic HTML/CSS diagrams and native expandable details.
Money Tracker gains a public-source link and accurate source-disclosure copy. No external
diagram service, private image, raw code, analytics or runtime translation is introduced.

Source review: NINA `ded579f1ff5af34dbb029f30983286e33451213c`, conversation orchestrator,
workflow definitions, context manager and report generator; MR Wolf
`6af2f827c27a4173bceed230cbd91779c23a88e7`, search engine, vector DAO and path tests.
Private source was read only and was not copied into this repository. NINA uses a custom
workflow engine. MR Wolf's broader assistant and all path integrations are not claimed
as verified; a source-level path-normalization signature mismatch remains outside this
editorial change. Organization/path scope is not proof of tenant authorization.

Validation on Node 22.22.3 with lockfile dependencies (Astro 7.3.5):

- `ASTRO_TELEMETRY_DISABLED=1 npm run check`: 30 files, zero errors/warnings/hints.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: 49 static pages.
- A temporary HTMLParser inspection of the build checked 1,068 local links/anchors,
  six-language experience content, public Money Tracker links, all 12 research case
  routes and their 24 semantic figures, chapter anchors, native details, canonical and
  hreflang metadata: passed. This is static inspection, not browser interaction testing.
- Native Chrome loaded the English NINA preview and its desktop opening was visually
  inspected. Further agent UI checks were interrupted by owner computer use; the owner
  then inspected the preview and approved it. Agent mobile/keyboard checks and independent
  language review are not claimed.
- An early check while translations were incomplete failed on the four missing languages;
  the final six-language check passed. Initial sandbox preview startup failed; authorized
  local startup succeeded. No threshold was weakened.

The Astro Inspect panel's “no interactive component islands” message is expected: research
cards use native HTML details rather than hydrated framework islands. This development
toolbar is absent from the static production build. No client directive is needed for
these cards. No live research-service test or new quality benchmark is implied.
