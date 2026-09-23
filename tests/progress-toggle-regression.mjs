import assert from "node:assert/strict";
import fs from "node:fs";

const js = fs.readFileSync(new URL("../analysis.js", import.meta.url), "utf8");

assert.doesNotMatch(
  js,
  /if \(card\.dataset\.revealEnhanced\) return;/,
  "pre-enhanced cards must not skip interaction binding",
);
assert.match(js, /function bindRevealCard\(card\)/, "reveal cards share one interaction binder");
assert.match(js, /bindRevealCard\(card\)/, "every reveal card is bound after enhancement or hydration");

console.log("PROGRESS_TOGGLE_PASS saved reveal cards are rebound after reload");
