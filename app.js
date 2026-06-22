const STORAGE_KEY = "anuma-brand-fieldwork-v1";

const steps = [
  {
    id: "context", nav: "Your lens", kicker: "01 / Context", title: "Start with<br><em>your vantage point.</em>",
    intro: "We want distinct perspectives, not committee language. This context helps us understand how your experience shapes your answers.",
    fields: [
      { id: "name", type: "text", label: "Your name", placeholder: "First and last name" },
      { id: "role", type: "text", label: "Your role or relationship to aNUma", placeholder: "e.g. Founder, advisor, programme lead" },
      { id: "tenure", type: "radio", label: "How long have you been close to the work?", options: [["under1","Under 1 year"],["1to3","1-3 years"],["3to5","3-5 years"],["5plus","5+ years"]] },
      { id: "whyNow", type: "textarea", label: "Why does the brand need to change now?", help: "Name the shift, pressure or opportunity. Avoid prescribing a visual solution.", placeholder: "The current brand no longer..." }
    ]
  },
  {
    id: "truth", nav: "Core truth", kicker: "02 / Foundations", title: "Find the truth<br><em>beneath the language.</em>",
    intro: "Strip away decks, taglines and category conventions. What remains should be true even if the organisation changes shape.",
    fields: [
      { id: "origin", type: "textarea", label: "What was aNUma created to change?", placeholder: "It began because..." },
      { id: "belief", type: "textarea", label: "What does aNUma believe that others in this field may not?", help: "A useful belief has stakes. Someone credible should be able to disagree with it.", placeholder: "We believe..." },
      { id: "nonnegotiable", type: "textarea", label: "What must never be lost as aNUma evolves?", placeholder: "Even in ten years, we must..." },
      { id: "futureLoss", type: "textarea", label: "If aNUma disappeared tomorrow, what would the world genuinely lose?", placeholder: "People and communities would lose..." }
    ]
  },
  {
    id: "ecosystem", nav: "Ecosystem", kicker: "03 / Architecture", title: "Make the whole<br><em>system legible.</em>",
    intro: "aNUma and NumaDelic Labs operate in relation. This exercise clarifies their roles without forcing a premature brand architecture.",
    fields: [
      { id: "anumaRole", type: "textarea", label: "In one sentence, what is aNUma's unique job?", placeholder: "aNUma exists to..." },
      { id: "labsRole", type: "textarea", label: "In one sentence, what is NumaDelic Labs' unique job?", placeholder: "NumaDelic Labs exists to..." },
      { id: "relationship", type: "radio", label: "How should people understand their relationship?", options: [["one","One brand with two expressions"],["endorsed","Distinct initiatives, visibly connected"],["independent","Independent brands with a shared origin"],["unclear","The model is still unresolved"]] },
      { id: "sharedDistinct", type: "split", label: "What must they share, and what must remain distinct?", left: "Shared DNA", right: "Necessary difference" },
      { id: "confusion", type: "textarea", label: "Where does the current ecosystem create confusion or friction?", placeholder: "People currently misunderstand...", optional: true }
    ]
  },
  {
    id: "offers", nav: "Three layers", kicker: "04 / Product System", title: "Shape three pathways,<br><em>one recognisable world.</em>",
    intro: "The next release introduces three ways into the numadelic ecosystem. Clarify the value, boundaries and relationship of each before naming or pricing them.",
    fields: [
      { id: "layerAudiences", type: "matrix", label: "Define the person at the centre of each layer", cells: [
        ["Solo explorer", "Who buys an individual Horizon experience, and what are they seeking?"],
        ["Facilitator", "Who brings guided experiences into an established practice?"],
        ["Bedroom creator", "Who wants to build without becoming a technical studio?"],
        ["Shared community", "What connects all three beyond the technology?"]
      ]},
      { id: "layerInvestment", type: "allocate", label: "Allocate 100 attention points across the launch", help: "This is a forced trade-off, not a forecast. Show where brand, product and go-to-market attention should concentrate first.", parts: ["Solo", "Facilitator", "Creator"], value: { Solo: 34, Facilitator: 33, Creator: 33 } },
      { id: "soloPromise", type: "textarea", label: "What is the honest promise of the paid solo VR experience?", help: "Research suggests solo access can expand reach, while preparation and context strongly influence depth. Define what the experience can responsibly promise on its own.", placeholder: "A solo explorer should be able to..." },
      { id: "soloBoundary", type: "textarea", label: "What must solo onboarding, safety and integration protect against?", placeholder: "Before and after the headset, we need to..." },
      { id: "facilitatorValue", type: "textarea", label: "Why would a facilitator pay to use aNUma in their practice?", help: "Consider the experience library, scenes, live participant controls, scripts and notes, transcription, training and evidence - not only access to content.", placeholder: "It makes their practice more valuable by..." },
      { id: "facilitatorPrice", type: "radio", label: "Which pricing logic feels most aligned for facilitators?", options: [["subscription","Ongoing professional subscription"],["usage","Per participant or session"],["license","Annual practice or site licence"],["hybrid","Lower subscription plus usage"],["unknown","We need to test the model"]] },
      { id: "creatorPromise", type: "textarea", label: "What should a bedroom creator be able to make without expert support?", help: "The current tools span scenes, environments, avatars, molecular simulations, interaction and scripts. Define the minimum creative transformation that feels empowering.", placeholder: "They arrive with an idea and leave with..." },
      { id: "creatorEconomics", type: "textarea", label: "How should creators gain value - and how might aNUma share in it?", placeholder: "Creators could publish, share or sell..." },
      { id: "layerRelationship", type: "radio", label: "How visibly should the three layers relate?", options: [["one","One aNUma product with three modes"],["tiers","One ecosystem with named tiers"],["family","A family of distinct products endorsed by aNUma"],["open","Still open - the identity should help decide"]] },
      { id: "launchPriority", type: "multi", label: "What must the new UI communicate in its first 30 seconds?", help: "Choose the three messages that must land before anything else.", limit: 3, options: ["What numadelic means","Which path is for me","What I can experience","Why it is trustworthy","How safety is handled","What it costs","How to begin","What I can create"] }
    ]
  },
  {
    id: "people", nav: "People", kicker: "05 / Audience", title: "Know who must<br><em>move closer.</em>",
    intro: "A brand cannot be equally meaningful to everyone. Focus on the people whose trust, participation or advocacy changes the outcome.",
    fields: [
      { id: "priorityAudience", type: "textarea", label: "Who is the single most important audience for the next chapter?", help: "Describe a recognisable person or group, not a demographic bucket.", placeholder: "They are people who..." },
      { id: "want", type: "textarea", label: "What are they trying to make possible in their life or work?", placeholder: "They want to..." },
      { id: "barrier", type: "textarea", label: "What tension, fear or barrier keeps them from it today?", placeholder: "But they are held back by..." },
      { id: "currentPerception", type: "textarea", label: "What might they assume about aNUma now - fairly or unfairly?", placeholder: "From the outside, they may think..." },
      { id: "stakeholders", type: "matrix", label: "Map the wider circle", cells: [
        ["Participants", "What do they need from us?"], ["Partners", "Why would they join us?"], ["Funders", "What proof earns confidence?"], ["Critics", "What concern deserves an answer?"]
      ]}
    ]
  },
  {
    id: "story", nav: "Story", kicker: "06 / Narrative", title: "Put the audience<br><em>inside the story.</em>",
    intro: "The audience is the protagonist. aNUma earns relevance by understanding their problem, offering a credible path, and making change feel possible.",
    fields: [
      { id: "problemExternal", type: "textarea", label: "What practical problem do they face?", placeholder: "On the surface, they struggle with..." },
      { id: "problemInternal", type: "textarea", label: "How does that problem make them feel?", placeholder: "Underneath, they feel..." },
      { id: "empathy", type: "textarea", label: "What can aNUma say that proves we understand?", placeholder: "We know how it feels when..." },
      { id: "authority", type: "textarea", label: "What makes aNUma a credible guide?", help: "Use track record, lived experience, method or evidence - not self-praise.", placeholder: "We have learned through..." },
      { id: "plan", type: "textarea", label: "What simple path do we invite people to take?", placeholder: "First... Then... Finally..." },
      { id: "success", type: "textarea", label: "What becomes possible when it works?", placeholder: "They move from... to..." }
    ]
  },
  {
    id: "character", nav: "Character", kicker: "07 / Personality", title: "Choose a character,<br><em>not a costume.</em>",
    intro: "Select the few qualities that should guide behaviour, language and design. The constraint matters: a brand with twenty traits has no character.",
    fields: [
      { id: "primaryTraits", type: "rank", label: "Choose exactly 5 defining traits", help: "These should be distinctive enough to guide a creative decision.", limit: 5, options: ["Grounded","Brave","Inquisitive","Lucid","Playful","Rigorous","Warm","Unconventional","Restorative","Provocative","Generous","Visionary","Embodied","Precise","Open","Catalytic","Humble","Inventive"] },
      { id: "notTraits", type: "rank", label: "Choose up to 5 traits we must avoid", limit: 5, options: ["Clinical","Dogmatic","Elitist","Vague","Naive","Corporate","Mystical","Cold","Chaotic","Preachy","Trendy","Institutional","Exclusive","Overpromising"] },
      { id: "areNot", type: "split", label: "Complete the tension", left: "We are...", right: "But we are not..." },
      { id: "human", type: "textarea", label: "If aNUma walked into a room as a person, what would people notice first?", placeholder: "They would notice..." }
    ]
  },
  {
    id: "expression", nav: "Expression", kicker: "08 / Voice & Feeling", title: "Define how the brand<br><em>enters the room.</em>",
    intro: "Position the brand between useful tensions. The goal is not the middle - it is a deliberate point of view.",
    fields: [
      { id: "voiceAcademic", type: "spectrum", label: "How should the voice balance expertise and access?", left: "Academic", right: "Everyday", value: 50 },
      { id: "voicePoetic", type: "spectrum", label: "How should language balance imagination and clarity?", left: "Poetic", right: "Literal", value: 50 },
      { id: "voiceProvocative", type: "spectrum", label: "How directly should aNUma challenge convention?", left: "Reassuring", right: "Provocative", value: 50 },
      { id: "visualOrganic", type: "spectrum", label: "What visual energy feels most truthful?", left: "Organic", right: "Engineered", value: 50 },
      { id: "feeling", type: "textarea", label: "What should someone feel immediately after encountering aNUma?", help: "Name an emotional shift, not an aesthetic adjective.", placeholder: "They arrive feeling... and leave feeling..." },
      { id: "sample", type: "textarea", label: "Write one sentence aNUma would say - in its most natural voice.", placeholder: "No slogans needed. Just a sentence that sounds true." }
    ]
  },
  {
    id: "proof", nav: "Proof", kicker: "09 / Impact", title: "Turn ambition<br><em>into evidence.</em>",
    intro: "Trust grows when aspiration connects to concrete change. Capture what aNUma can prove now and what it must become able to prove.",
    fields: [
      { id: "proud", type: "textarea", label: "Which moment or achievement are you most proud of - and why?", placeholder: "The moment that best represents us is..." },
      { id: "proofPoints", type: "textarea", label: "What evidence already demonstrates aNUma's value?", help: "Consider outcomes, stories, partnerships, methods, reach and changed behaviour.", placeholder: "We can point to..." },
      { id: "impact", type: "textarea", label: "What meaningful change should aNUma create over the next 3-5 years?", placeholder: "We will know the work matters when..." },
      { id: "measure", type: "textarea", label: "How should that change be observed or measured?", placeholder: "Signals of progress include..." },
      { id: "claim", type: "textarea", label: "What tempting claim should the brand never make?", placeholder: "We must never imply that..." }
    ]
  },
  {
    id: "edge", nav: "Edge", kicker: "10 / Future", title: "Name the edge<br><em>only aNUma can hold.</em>",
    intro: "Distinctiveness often lives in an unusual combination. Finish by naming the tension, risk and future the new identity needs to make visible.",
    fields: [
      { id: "alternatives", type: "textarea", label: "What do people choose instead of aNUma - including doing nothing?", placeholder: "The real alternatives are..." },
      { id: "different", type: "textarea", label: "What can aNUma credibly own that those alternatives cannot?", placeholder: "Only aNUma combines..." },
      { id: "tension", type: "textarea", label: "Which apparent contradiction is actually our strength?", help: "Examples of the structure: rigorous and imaginative; ancient and emerging; individual and systemic.", placeholder: "We are both... and..." },
      { id: "risk", type: "radio", label: "Which risk would be most damaging in the next identity?", options: [["safe","Becoming safe and forgettable"],["alienating","Becoming distinctive but alienating"],["abstract","Remaining abstract and hard to explain"],["narrow","Becoming clear but too narrow"]] },
      { id: "headline", type: "textarea", label: "It is 2030. What headline would make you think: we did it?", placeholder: "In 2030, the headline reads..." },
      { id: "anything", type: "textarea", label: "What have we not asked that the identity team needs to hear?", optional: true, placeholder: "One last thing..." }
    ]
  }
];

let state = loadState();
let currentStep = state.currentStep || 0;
let activeRecognition = null;

const screens = [...document.querySelectorAll(".screen")];
const stepMount = document.querySelector("#stepMount");
const navMount = document.querySelector("#stepNav");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const saveLabel = document.querySelector("#saveLabel");
const saveState = document.querySelector(".save-state");

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { answers: {}, currentStep: 0, started: false }; }
  catch { return { answers: {}, currentStep: 0, started: false }; }
}

function persist() {
  saveState.classList.add("saving");
  saveLabel.textContent = "Saving...";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  clearTimeout(persist.timer);
  persist.timer = setTimeout(() => {
    saveState.classList.remove("saving");
    saveLabel.textContent = "Saved locally";
  }, 450);
}

function showScreen(name) {
  screens.forEach(screen => screen.classList.toggle("active", screen.dataset.screen === name));
  window.scrollTo(0, 0);
}

function answerKey(stepId, fieldId) { return `${stepId}.${fieldId}`; }
function getAnswer(stepId, fieldId, fallback = "") { return state.answers[answerKey(stepId, fieldId)] ?? fallback; }
function setAnswer(stepId, fieldId, value) {
  state.answers[answerKey(stepId, fieldId)] = value;
  if (state.submitted) {
    state.submitted = false;
    state.submissionId = null;
  }
  persist();
  updateProgress();
}

function renderNav() {
  navMount.innerHTML = steps.map((step, index) => `
    <button class="nav-step ${index === currentStep ? "active" : ""} ${stepCompletion(step) > .5 ? "complete" : ""}" data-index="${index}" type="button">
      <span class="nav-step__num">${String(index + 1).padStart(2,"0")}</span>
      <span class="nav-step__name">${step.nav}</span>
      <span class="nav-step__state"></span>
    </button>`).join("");
  navMount.querySelectorAll(".nav-step").forEach(button => button.addEventListener("click", () => {
    captureInputs(); currentStep = Number(button.dataset.index); state.currentStep = currentStep; persist(); renderStep();
  }));
}

function renderStep() {
  const step = steps[currentStep];
  stepMount.innerHTML = `<article class="step">
    <div class="step__meta">${step.kicker}</div>
    <h2>${step.title}</h2>
    <p class="step__intro">${step.intro}</p>
    <div class="questions">${step.fields.map(field => renderField(step.id, field)).join("")}</div>
  </article>`;
  bindFields(step);
  backButton.classList.toggle("hidden", currentStep === 0);
  const nextLabel = currentStep === steps.length - 1 ? "Review responses" : "Continue";
  document.querySelector("#nextLabel").textContent = nextLabel;
  nextButton.setAttribute("aria-label", nextLabel);
  renderNav(); updateProgress(); window.scrollTo(0,0);
}

function renderField(stepId, field) {
  const value = getAnswer(stepId, field.id, field.value ?? "");
  const help = field.help ? `<p class="question__help">${field.help}</p>` : "";
  const optional = field.optional ? `<span class="optional">Optional</span>` : "";
  const head = `<div class="question__label"><label for="${field.id}">${field.label}</label>${optional}</div>${help}`;
  let control = "";
  if (field.type === "text") control = `<input class="field" id="${field.id}" data-field="${field.id}" type="text" value="${escapeHtml(value)}" placeholder="${field.placeholder || ""}">`;
  if (field.type === "textarea") control = `<textarea id="${field.id}" data-field="${field.id}" placeholder="${field.placeholder || ""}">${escapeHtml(value)}</textarea>`;
  if (field.type === "radio") control = `<div class="choice-grid">${field.options.map(([v,l]) => `<label class="choice-card"><input type="radio" name="${field.id}" data-field="${field.id}" value="${v}" ${value === v ? "checked" : ""}><strong>${l}</strong><span>Select one</span></label>`).join("")}</div>`;
  if (field.type === "multi") {
    const selected = Array.isArray(value) ? value : [];
    control = `<div class="multi-grid" data-multi="${field.id}" data-limit="${field.limit}">${field.options.map(option => `<label class="multi-card"><input type="checkbox" data-field="${field.id}" value="${option}" ${selected.includes(option) ? "checked" : ""}><span>${option}</span><b aria-hidden="true">${selected.includes(option) ? "✓" : "+"}</b></label>`).join("")}<p class="selection-count">${selected.length} / ${field.limit} selected</p></div>`;
  }
  if (field.type === "split") {
    const pair = value && typeof value === "object" ? value : { left: "", right: "" };
    control = `<div class="split-answer"><div><span>${field.left}</span><textarea data-field="${field.id}" data-part="left" placeholder="Describe...">${escapeHtml(pair.left || "")}</textarea></div><div><span>${field.right}</span><textarea data-field="${field.id}" data-part="right" placeholder="Describe...">${escapeHtml(pair.right || "")}</textarea></div></div>`;
  }
  if (field.type === "rank") {
    const selected = Array.isArray(value) ? value : [];
    control = `<div class="rank-zone" data-rank="${field.id}" data-limit="${field.limit}"><div class="rank-zone__head"><span>Tap to select</span><span class="selection-count">${selected.length} / ${field.limit}</span></div><div class="rank-list">${field.options.map(v => `<label class="rank-chip"><input type="checkbox" data-field="${field.id}" value="${v}" ${selected.includes(v) ? "checked" : ""}>${v}</label>`).join("")}</div><div class="custom-word"><input class="field" type="text" aria-label="Add your own trait" placeholder="Add a trait that is missing"><button type="button" aria-label="Add trait">+</button></div></div>`;
  }
  if (field.type === "spectrum") control = `<div class="spectrum"><div class="spectrum__labels"><span>${field.left}</span><span>${field.right}</span></div><input type="range" min="0" max="100" step="10" value="${value}" data-field="${field.id}" aria-label="${field.label}"><div class="spectrum__ticks"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div></div>`;
  if (field.type === "allocate") {
    const allocation = value && typeof value === "object" ? value : field.value;
    const total = field.parts.reduce((sum, part) => sum + Number(allocation[part] || 0), 0);
    control = `<div class="allocation" data-allocation="${field.id}">${field.parts.map((part,index) => `<div class="allocation__row"><div><span>${String(index + 1).padStart(2,"0")}</span><strong>${part}</strong><output>${Number(allocation[part] || 0)}%</output></div><input type="range" min="0" max="100" step="1" value="${Number(allocation[part] || 0)}" data-field="${field.id}" data-part="${part}" aria-label="${part} allocation"></div>`).join("")}<div class="allocation__total ${total === 100 ? "valid" : ""}"><span>Total allocation</span><strong>${total}%</strong><em>${total === 100 ? "Balanced" : total < 100 ? `${100-total} points left` : `${total-100} points over`}</em></div></div>`;
  }
  if (field.type === "matrix") {
    const matrix = value && typeof value === "object" ? value : {};
    control = `<div class="matrix">${field.cells.map(([key,prompt]) => `<div class="matrix__cell"><b>${key}</b><label>${prompt}</label><textarea data-field="${field.id}" data-part="${key}" placeholder="Capture the essential...">${escapeHtml(matrix[key] || "")}</textarea></div>`).join("")}</div>`;
  }
  return `<div class="question" data-question="${field.id}">${head}${control}</div>`;
}

function bindFields(step) {
  stepMount.querySelectorAll("input[data-field], textarea[data-field]").forEach(input => {
    input.addEventListener(input.type === "radio" || input.type === "checkbox" ? "change" : "input", () => captureField(step, input));
  });
  stepMount.querySelectorAll("[data-rank]").forEach(zone => {
    const addButton = zone.querySelector(".custom-word button");
    const input = zone.querySelector(".custom-word input");
    addButton.addEventListener("click", () => addCustomTrait(zone, step, input));
    input.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); addCustomTrait(zone, step, input); } });
  });
  addVoiceControls();
}

function addVoiceControls() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  stepMount.querySelectorAll('textarea[data-field], input[type="text"][data-field]').forEach(input => {
    if (input.closest(".custom-word") || input.closest(".voice-field")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "voice-field";
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    const button = document.createElement("button");
    button.className = "voice-button";
    button.type = "button";
    button.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="8" y="3" width="8" height="12" rx="4"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"></path></svg>`;
    button.setAttribute("aria-label", "Speak this response");
    button.title = Recognition ? "Speak instead of typing" : "Voice input works in current versions of Chrome and Edge";
    wrapper.appendChild(button);
    button.addEventListener("click", () => {
      if (!Recognition) {
        showVoiceStatus("Voice input is not supported here. Use a current version of Chrome or Edge.", "error");
        return;
      }
      toggleVoiceInput(input, button, Recognition);
    });
  });
}

function showVoiceStatus(message, tone = "") {
  const status = document.querySelector("#voiceStatus");
  status.textContent = message;
  status.className = `voice-toast visible ${tone}`.trim();
  clearTimeout(showVoiceStatus.timer);
  showVoiceStatus.timer = setTimeout(() => status.classList.remove("visible"), tone === "error" ? 6500 : 3500);
}

function voiceErrorMessage(error) {
  const messages = {
    "not-allowed": "Microphone access is blocked. Allow microphone access in your browser settings, then try again.",
    "service-not-allowed": "Voice recognition is blocked by this browser or network policy.",
    "audio-capture": "No working microphone was found. Check your input device and browser settings.",
    "network": "The browser speech service is unreachable. Local previews may block it; test the published HTTPS site in Chrome or Edge.",
    "no-speech": "No speech was detected. Move closer to the microphone and try again."
  };
  return messages[error] || "Voice input could not start. Check microphone access and try again.";
}

function toggleVoiceInput(input, button, Recognition) {
  if (activeRecognition) {
    activeRecognition.cancelled = true;
    activeRecognition.stop();
    if (activeRecognition.button === button) {
      showVoiceStatus("Voice input stopped.");
      return;
    }
  }

  const recognition = new Recognition();
  recognition.lang = document.documentElement.lang || "en-US";
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.button = button;
  recognition.cancelled = false;
  recognition.failed = false;
  const startingValue = input.value.trim();
  let finalTranscript = "";
  let heardSpeech = false;

  recognition.onstart = () => {
    activeRecognition = recognition;
    button.classList.add("listening");
    button.setAttribute("aria-label", "Stop listening");
    showVoiceStatus("Listening... speak naturally, then pause.");
  };
  recognition.onresult = event => {
    let interim = "";
    for (let index = event.resultIndex; index < event.results.length; index++) {
      const transcript = event.results[index][0].transcript;
      if (transcript.trim()) heardSpeech = true;
      if (event.results[index].isFinal) finalTranscript += `${transcript} `;
      else interim += transcript;
    }
    input.value = [startingValue, finalTranscript.trim(), interim.trim()].filter(Boolean).join(" ");
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
  recognition.onerror = event => {
    if (event.error === "aborted") return;
    recognition.failed = true;
    showVoiceStatus(voiceErrorMessage(event.error), "error");
  };
  recognition.onend = () => {
    button.classList.remove("listening");
    button.setAttribute("aria-label", "Speak this response");
    if (activeRecognition === recognition) activeRecognition = null;
    if (!recognition.failed && !recognition.cancelled) {
      showVoiceStatus(heardSpeech ? "Speech added to your response." : voiceErrorMessage("no-speech"), heardSpeech ? "success" : "error");
    }
  };
  try {
    recognition.start();
  } catch {
    showVoiceStatus("Voice input is already active. Pause briefly and try again.", "error");
  }
}

function addCustomTrait(zone, step, input) {
  const word = input.value.trim();
  if (!word) return;
  const fieldId = zone.dataset.rank;
  const selected = getAnswer(step.id, fieldId, []);
  const limit = Number(zone.dataset.limit);
  if (selected.length >= limit) return;
  selected.push(word); setAnswer(step.id, fieldId, selected); renderStep();
}

function captureField(step, input) {
  const fieldId = input.dataset.field;
  const field = step.fields.find(item => item.id === fieldId);
  if (field.type === "radio") setAnswer(step.id, fieldId, input.value);
  else if (field.type === "rank") {
    const zone = input.closest("[data-rank]");
    const checked = [...zone.querySelectorAll("input[type=checkbox]:checked")];
    if (checked.length > field.limit) { input.checked = false; return; }
    setAnswer(step.id, fieldId, checked.map(item => item.value));
    zone.querySelector(".selection-count").textContent = `${checked.length} / ${field.limit}`;
    zone.querySelectorAll(".rank-chip").forEach(chip => chip.classList.toggle("disabled", checked.length >= field.limit && !chip.querySelector("input").checked));
  } else if (field.type === "multi") {
    const zone = input.closest("[data-multi]");
    const checked = [...zone.querySelectorAll("input[type=checkbox]:checked")];
    if (checked.length > field.limit) { input.checked = false; return; }
    setAnswer(step.id, fieldId, checked.map(item => item.value));
    zone.querySelector(".selection-count").textContent = `${checked.length} / ${field.limit} selected`;
    zone.querySelectorAll(".multi-card").forEach(card => {
      const checkbox = card.querySelector("input");
      card.classList.toggle("disabled", checked.length >= field.limit && !checkbox.checked);
      card.querySelector("b").textContent = checkbox.checked ? "✓" : "+";
    });
  } else if (field.type === "allocate") {
    const zone = input.closest("[data-allocation]");
    const parts = {};
    zone.querySelectorAll("input[data-part]").forEach(part => {
      parts[part.dataset.part] = Number(part.value);
      part.closest(".allocation__row").querySelector("output").textContent = `${part.value}%`;
    });
    const total = Object.values(parts).reduce((sum, number) => sum + number, 0);
    const totalBox = zone.querySelector(".allocation__total");
    totalBox.classList.toggle("valid", total === 100);
    totalBox.querySelector("strong").textContent = `${total}%`;
    totalBox.querySelector("em").textContent = total === 100 ? "Balanced" : total < 100 ? `${100-total} points left` : `${total-100} points over`;
    setAnswer(step.id, fieldId, parts);
  } else if (field.type === "split" || field.type === "matrix") {
    const parts = {};
    input.closest(".question").querySelectorAll("textarea[data-part]").forEach(part => parts[part.dataset.part] = part.value.trim());
    setAnswer(step.id, fieldId, parts);
  } else setAnswer(step.id, fieldId, input.value);
}

function captureInputs() {
  const step = steps[currentStep];
  stepMount.querySelectorAll("input[data-field],textarea[data-field]").forEach(input => {
    if (input.type !== "checkbox" && input.type !== "radio") captureField(step, input);
  });
}

function isAnswered(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (value && typeof value === "object") return Object.values(value).some(v => String(v).trim());
  return String(value ?? "").trim().length > 0;
}

function stepCompletion(step) {
  const required = step.fields.filter(field => !field.optional);
  const answered = required.filter(field => isAnswered(getAnswer(step.id, field.id))).length;
  return required.length ? answered / required.length : 0;
}

function updateProgress() {
  const all = steps.flatMap(step => step.fields.filter(field => !field.optional).map(field => getAnswer(step.id, field.id)));
  const percent = Math.round((all.filter(isAnswered).length / all.length) * 100);
  document.querySelector("#percentLabel").textContent = `${percent}%`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
}

function completionPercent() {
  const all = steps.flatMap(step => step.fields.filter(field => !field.optional).map(field => getAnswer(step.id, field.id)));
  return Math.round((all.filter(isAnswered).length / all.length) * 100);
}

function review() {
  captureInputs();
  document.querySelector("#generatedDate").textContent = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date()).toUpperCase();
  document.querySelector("#reviewMount").innerHTML = steps.map(step => {
    const items = step.fields.filter(field => isAnswered(getAnswer(step.id,field.id))).map(field => `<div class="review-item"><small>${field.label}</small><p>${formatAnswer(field, getAnswer(step.id,field.id))}</p></div>`).join("");
    return `<section class="review-card"><h3>${step.kicker} - ${step.nav}</h3>${items || `<div class="review-item"><p>No responses recorded.</p></div>`}</section>`;
  }).join("");
  showScreen("review");
}

function formatAnswer(field, value) {
  if (Array.isArray(value)) return escapeHtml(value.join(" · "));
  if (value && typeof value === "object") return Object.entries(value).filter(([,v]) => v).map(([k,v]) => `${escapeHtml(k)}: ${escapeHtml(v)}`).join("\n");
  if (field.type === "radio") return escapeHtml(field.options.find(([v]) => v === value)?.[1] || value);
  if (field.type === "spectrum") return `${field.left} ${value}/100 ${field.right}`;
  return escapeHtml(value);
}

function exportResponses() {
  const output = {
    project: "aNUma Brand Discovery",
    exportedAt: new Date().toISOString(),
    note: "Individual discovery response. Treat as input for synthesis, not final strategy.",
    sections: steps.map(step => ({ section: step.nav, responses: Object.fromEntries(step.fields.map(field => [field.label, getAnswer(step.id,field.id)])) }))
  };
  const blob = new Blob([JSON.stringify(output,null,2)], { type: "application/json" });
  const url = URL.createObjectURL(blob); const anchor = document.createElement("a");
  const name = String(getAnswer("context","name","team-member")).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-") || "team-member";
  anchor.href = url; anchor.download = `anuma-brand-discovery-${name}.json`; anchor.click(); URL.revokeObjectURL(url);
}

async function submitResponses() {
  const status = document.querySelector("#submissionStatus");
  const button = document.querySelector("#submitButton");
  const config = window.ANUMA_CONFIG || {};
  const url = String(config.supabaseUrl || "").replace(/\/$/, "");
  const key = String(config.supabasePublishableKey || "");

  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url) || !key) {
    status.textContent = "Database capture is not configured yet. Your answers remain saved locally and can still be exported.";
    return;
  }
  if (state.submitted) {
    status.textContent = "This version of your response has already been sent.";
    return;
  }

  const payload = {
    id: state.submissionId || crypto.randomUUID(),
    schema_version: "2.0",
    respondent_name: String(getAnswer("context", "name")).trim().slice(0, 120),
    respondent_role: String(getAnswer("context", "role")).trim().slice(0, 160),
    completion_percent: completionPercent(),
    responses: state.answers
  };
  if (JSON.stringify(payload).length > 100000) {
    status.textContent = "This response is too large to send. Export the JSON file instead.";
    return;
  }

  button.disabled = true;
  status.textContent = "Sending your field notes...";
  try {
    const response = await fetch(`${url}/rest/v1/brand_discovery_responses`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`Submission failed (${response.status})`);
    state.submissionId = payload.id;
    state.submitted = true;
    persist();
    status.textContent = "Response received. Thank you - this version is now safely recorded.";
    button.querySelector("span:first-child").textContent = "Response sent";
  } catch (error) {
    status.textContent = "The response could not be sent. Nothing was lost; try again or export the JSON file.";
    console.error(error);
  } finally {
    button.disabled = false;
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}

document.querySelector("#beginButton").addEventListener("click", () => { state.started = true; currentStep = 0; state.currentStep = 0; persist(); showScreen("workspace"); renderStep(); });
document.querySelector("#resumeButton").addEventListener("click", () => { currentStep = state.currentStep || 0; showScreen("workspace"); renderStep(); });
nextButton.addEventListener("click", () => { captureInputs(); if (currentStep < steps.length - 1) { currentStep++; state.currentStep = currentStep; persist(); renderStep(); } else review(); });
backButton.addEventListener("click", () => { captureInputs(); if (currentStep > 0) { currentStep--; state.currentStep = currentStep; persist(); renderStep(); } });
document.querySelector("#editButton").addEventListener("click", () => { showScreen("workspace"); renderStep(); });
document.querySelector("#downloadButton").addEventListener("click", exportResponses);
document.querySelector("#submitButton").addEventListener("click", submitResponses);
document.querySelector("#printButton").addEventListener("click", () => window.print());
document.querySelector("#exitButton").addEventListener("click", () => document.querySelector("#resetDialog").showModal());
document.querySelector("#cancelReset").addEventListener("click", () => document.querySelector("#resetDialog").close());
document.querySelector("#confirmReset").addEventListener("click", () => { localStorage.removeItem(STORAGE_KEY); state = {answers:{},currentStep:0,started:false}; currentStep = 0; document.querySelector("#resetDialog").close(); document.querySelector("#resumeButton").classList.add("hidden"); showScreen("welcome"); });
document.addEventListener("keydown", event => { if (event.key === "Enter" && (event.ctrlKey || event.metaKey) && document.querySelector('[data-screen="workspace"]').classList.contains("active")) nextButton.click(); });

if (state.started) document.querySelector("#resumeButton").classList.remove("hidden");
updateProgress();
