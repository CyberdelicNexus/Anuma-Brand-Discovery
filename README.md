# aNUma Brand Fieldwork

A self-contained, multi-step brand-discovery experience for the aNUma team. It includes dedicated research for the solo VR, facilitator, and creator/authoring layers.

## Run locally

Open `index.html` directly, or serve this folder with any static web server.

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Data and privacy

- Responses autosave in the participant's browser using `localStorage`.
- No response information is transmitted by the site.
- Participants download a structured JSON file to email to the research lead, or print/save their review as PDF.
- "Start over" permanently clears the local response after confirmation.

## Voice input

Text questions include a microphone button in browsers that support the Web Speech API, currently best supported by Chrome and Edge. Typed input always remains available. The app first checks for private on-device English recognition; the browser may download a language pack once. When that feature is unavailable, it falls back to the browser vendor's online recognition service, so participants should type rather than dictate sensitive information.

Test voice input from the published GitHub Pages HTTPS address in current Chrome or Edge. The app calls the microphone once per click and reports permission, device, network, language-pack, and no-speech failures separately. A `network` error on the published site means the browser's recognition service is unreachable, not that GitHub Pages is misconfigured.

This browser-native approach is suitable for the free MVP but is not guaranteed across every browser or managed network. Reliable cross-browser transcription would require a server-side speech service and should be evaluated after the discovery experience is deployed and tested with the core team.

## Recommended team process

1. Ask each core-team member to complete the fieldwork independently.
2. Collect the exported JSON files.
3. Compare repeated language, strong disagreements, and unsupported claims.
4. Use the synthesis as research input, not as a vote on the final identity.

The Archetype territory uses three weighted rounds: natural contribution, credible method, and realistic shadow risk. Each participant receives a primary and supporting signal. Compare the evidence and score patterns across the team; do not select an archetype solely because it receives the most individual votes.

## Private strategy analysis

Open `analysis.html` to explore the internal synthesis in three explicitly separated layers:

1. Core-team findings: calculated counts, distributions, deeper cross-response synthesis, richer tensions, and traceable source responses.
2. Strategic interpretation: reasoned hypotheses about what worked, what stalled, access barriers, opportunities and blindspots.
3. Working recommendation: a testable brand platform, dated XR market view, realistic modality tiers, stakeholder economics, a facilitator marketplace, a no-code creator studio, coordinated identity release, and a numbered launch pathway.

`market-research.js` keeps external evidence separate from the private response bundle. Each market statement distinguishes source evidence from the strategic implication and links to its source.

The analysis is self-contained and can be opened directly without a server. It includes the six private team exports in `analysis-data.js`, so **do not publish or link this page from the public questionnaire without access control and team approval**.

Dense insight cards use a presenter-led blur-to-reveal interaction: the title remains visible, and clicking **Reveal layer** expands the full content without an internal scrollbar. The recommendation presents the five product-interface concepts as one progressive image gallery—Prepare, Continue, Find guidance, Join an offer and Create—so only one feature image competes for attention at a time.

The copy recovered from the saved Strategy Observatory page is stored permanently in `analysis-copy-snapshot.js` and loads as the presentation baseline. Use **Edit copy** in the analysis header to revise headings and narrative directly in the page; those later changes are stored in that browser with `localStorage`. Use **Export copy** to download a portable JSON backup before closing or changing browsers. Clicking **Finish editing** returns to presentation mode. The separate strategist-lens import is intentionally absent from the header until the strategist response is ready.

Rebuild the bundled response data after source exports change:

```powershell
node ..\tools\build-brand-analysis-data.mjs "C:\path\to\response-exports" analysis-data.js
```

Run the deterministic analysis checks from the repository root:

```powershell
node tools\test-brand-analysis.mjs
node tools\test-market-strategy.mjs
node tools\test-recommendation-pathways.mjs
node tools\test-interface-concepts.mjs
node tools\test-presentation-coverage.mjs
```

## Source-method note

The questionnaire retains reusable discovery methods such as brand skeleton categories, attribute prioritisation, polarity spectrums, StoryBrand-style narrative prompts, and "we are / we are not" tensions. It does not pre-populate or carry over Cyberdelic Nexus's outcomes.
