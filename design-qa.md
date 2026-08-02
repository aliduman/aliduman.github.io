# Design QA

- Source visual truth: https://majd-portfolio.framer.website
- Product assets: user-provided Sanal Tur screenshot and SAHİDEKO comparison image
- Implementation: local portfolio at `http://127.0.0.1:4173/`
- Intended viewport: desktop 1280 × 720 and mobile 390 × 844
- Source density: source site browser capture at CSS viewport size; Sanal Tur asset 2306 × 1620; SAHİDEKO asset 804 × 540
- Implementation density: unavailable
- State: project showcase with real product imagery and links

## Full-view comparison evidence

The source page was previously inspected at 1280 × 720. The updated local implementation could not be opened by the in-app browser: loopback timed out and `terminal.local` could not be resolved. The Chrome fallback was unavailable. Therefore no valid browser-rendered implementation screenshot exists for a same-viewport comparison.

## Focused region comparison evidence

Blocked for the same reason. The project assets themselves were opened and inspected locally:

- Sanal Tur: real application screenshot, 2306 × 1620
- SAHİDEKO: real transparent comparison artwork, 804 × 540

## Findings

- [Blocked] Browser-rendered implementation evidence is missing.
  - Location: full page; desktop and mobile.
  - Evidence: local HTTP response, HTML parsing, JavaScript syntax, and asset existence pass, but the approved browser could not reach the local preview.
  - Impact: image crop, responsive layout, hover treatment, and visual fidelity cannot be signed off from rendered evidence.
  - Fix: reopen the local preview when the in-app browser can reach the local server, capture desktop and mobile, then compare against the source.

## Static checks completed

- HTML parses successfully.
- JavaScript syntax passes.
- Both product assets are local rather than hotlinked.
- Product images are optimized to WebP.
- Sanal Tur and SAHİDEKO links are present.
- No article titles or claims were invented; the writing area is explicitly marked “Yakında”.

## Comparison history

- Pass 1: blocked because the approved in-app browser could not reach the local implementation.
- Fallback: Chrome browser connection was unavailable.

## Follow-up polish

- Verify the Sanal Tur focal crop at desktop and mobile.
- Verify SAHİDEKO transparency and background contrast in the card.
- Verify the external-link hover treatment and keyboard focus.

final result: blocked
