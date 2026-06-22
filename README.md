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
- No information is transmitted until the participant chooses **Send to research**.
- Participants can export a structured JSON file or print/save their review as PDF.
- "Start over" permanently clears the local response after confirmation.

## Free database capture with Supabase

Supabase is the recommended capture layer for a public GitHub Pages deployment. The browser uses a public publishable key protected by Row Level Security; visitors can submit responses but cannot read, edit, or delete them.

1. Create a free Supabase project.
2. Open the project's SQL Editor and run `supabase-schema.sql`.
3. In **Project Settings > API**, copy the Project URL and the **publishable** key.
4. Add those values to `config.js`.
5. Commit the site to GitHub and enable GitHub Pages.
6. Submit a test response, then confirm it appears in the `brand_discovery_responses` table.

Never put a `service_role` key in `config.js` or GitHub. The included SQL deliberately creates no public `SELECT`, `UPDATE`, or `DELETE` policy.

For a small invited team, insert-only RLS is a practical free setup. Before opening the form to a large public audience, route submissions through a protected serverless function with rate limiting or CAPTCHA to reduce spam.

Notion is not used as the direct browser database because its integration secret would be exposed on a public GitHub Pages site. It can still receive curated or synthesised outputs later through a private automation.

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

## Source-method note

The questionnaire retains reusable discovery methods such as brand skeleton categories, attribute prioritisation, polarity spectrums, StoryBrand-style narrative prompts, and "we are / we are not" tensions. It does not pre-populate or carry over Cyberdelic Nexus's outcomes.
