const STORAGE_KEY = "anuma-brand-fieldwork-v1";

const ARCHETYPES = {
  Innocent: { family: "Wisdom", purpose: "Restore trust, optimism and a sense of possibility.", shadow: "Naivety or avoiding necessary conflict." },
  Sage: { family: "Wisdom", purpose: "Reveal truth and make complexity understandable.", shadow: "Analysis paralysis or intellectual distance." },
  Explorer: { family: "Wisdom", purpose: "Open paths to freedom, discovery and an authentic life.", shadow: "Restlessness or resisting commitment." },
  Mystic: { family: "Wonder", purpose: "Transform perception and reveal interconnected possibility.", shadow: "Escapism, manipulation or overclaiming transformation." },
  Outlaw: { family: "Wonder", purpose: "Liberate people by challenging conventions that no longer serve.", shadow: "Instability, conflict or rebellion without direction." },
  Champion: { family: "Wonder", purpose: "Help people meet difficulty with courage and mastery.", shadow: "Burnout, proving or intolerance of vulnerability." },
  Lover: { family: "Oneness", purpose: "Create intimacy, beauty and meaningful connection.", shadow: "Approval-seeking or blurred boundaries." },
  Connector: { family: "Oneness", purpose: "Build belonging through equality and shared humanity.", shadow: "Conformity or becoming too generic." },
  Jester: { family: "Oneness", purpose: "Use play and irreverence to bring people into the present.", shadow: "Superficiality or using levity to avoid difficult truths." },
  Creator: { family: "Structure", purpose: "Give original ideas form through imagination and invention.", shadow: "Perfectionism or never moving from vision to implementation." },
  Healer: { family: "Structure", purpose: "Care for people and restore safety through service.", shadow: "Self-neglect, weak boundaries or dependency." },
  Royal: { family: "Structure", purpose: "Create trusted systems through leadership and accountability.", shadow: "Control, rigidity or exclusion." }
};

const archetypeOptions = {
  gift: [
    ["Make complex truth understandable", "Sage"], ["Open new paths to self-discovery", "Explorer"], ["Restore trust and possibility", "Innocent"],
    ["Transform how reality is perceived", "Mystic"], ["Challenge limiting conventions", "Outlaw"], ["Help people meet difficulty with courage", "Champion"],
    ["Create intimate, beautiful connection", "Lover"], ["Make people feel part of a shared humanity", "Connector"], ["Bring play, presence and relief", "Jester"],
    ["Invent original worlds and tools", "Creator"], ["Care for people through vulnerable transitions", "Healer"], ["Create clear systems others can trust", "Royal"]
  ],
  method: [
    ["Teach people how to see more clearly", "Sage"], ["Invite people beyond familiar boundaries", "Explorer"], ["Make a complex future feel hopeful and accessible", "Innocent"],
    ["Act as a catalyst for profound inner change", "Mystic"], ["Break rules that keep people constrained", "Outlaw"], ["Equip people to overcome a meaningful challenge", "Champion"],
    ["Deepen felt connection with self and others", "Lover"], ["Create a welcoming place where nobody is above anyone", "Connector"], ["Disarm tension through delight and surprise", "Jester"],
    ["Turn imagination into experiences that did not exist before", "Creator"], ["Hold people safely through change", "Healer"], ["Set a standard and organise the ecosystem around it", "Royal"]
  ],
  shadow: [
    ["Sounding intelligent but emotionally distant", "Sage"], ["Always seeking the next frontier without finishing", "Explorer"], ["Making the work feel unrealistically safe or simple", "Innocent"],
    ["Promising transformation we cannot responsibly guarantee", "Mystic"], ["Becoming defined by opposition and conflict", "Outlaw"], ["Glorifying struggle, performance or heroic leadership", "Champion"],
    ["Prioritising allure or approval over substance", "Lover"], ["Smoothing out the difference that makes us matter", "Connector"], ["Using play to avoid seriousness or accountability", "Jester"],
    ["Remaining in endless invention instead of shipping", "Creator"], ["Overprotecting people or weakening their agency", "Healer"], ["Becoming controlling, hierarchical or exclusive", "Royal"]
  ]
};

const archetypeField = (id, label, help, limit, weight, group) => ({
  id, type: "multi", label, help, limit, weight,
  options: archetypeOptions[group].map(([option]) => option),
  scoreMap: Object.fromEntries(archetypeOptions[group])
});

const LOOK_FEEL_OPTIONS = [
  {
    id: "bioluminescent",
    title: "Bioluminescent depth",
    group: "Current / colder",
    description: "A living, immersive interface with dark blue-violet space, luminous cyan guidance and a soft sense of inner motion.",
    colors: ["#050716", "#16134a", "#256bff", "#55d8ff", "#f7fbff"]
  },
  {
    id: "numadelic_ember",
    title: "Numadelic ember",
    group: "New / warmer",
    description: "A warmer evolution that keeps the dark immersive base but brings in orange, amber and human heat from the Numadelic Labs world.",
    colors: ["#090611", "#24122f", "#f26a2e", "#ffb15f", "#fff2df"]
  },
  {
    id: "lucid_blueprint",
    title: "Lucid blueprint",
    group: "Current / colder",
    description: "Cleaner, calmer and more system-led, with crisp blue contrast, precise components and enough softness to avoid feeling clinical.",
    colors: ["#080b1c", "#17244d", "#78b9ff", "#d7e9ff", "#ffffff"]
  },
  {
    id: "earth_signal",
    title: "Earth signal",
    group: "New / warmer",
    description: "A grounded direction that connects technology to embodiment, using deep mineral tones, warm neutrals and restrained electric accents.",
    colors: ["#080a12", "#173239", "#b56a3c", "#d8b784", "#f4ead9"]
  },
  {
    id: "ceremonial_tech",
    title: "Ceremonial technology",
    group: "Current / colder",
    description: "A more ritualised world where sacred geometry, deep indigo, silver light and precise UI systems meet.",
    colors: ["#06040f", "#211448", "#6f4dff", "#9ddcff", "#ececff"]
  },
  {
    id: "living_studio",
    title: "Living studio",
    group: "New / warmer",
    description: "A creator-facing direction that feels more tactile, modular and alive, with soft whites, ink, sea green and a touch of generative color.",
    colors: ["#071015", "#123d49", "#1fb9a8", "#b7f1dc", "#fffaf0"]
  }
];

const MOCKUP_OPTIONS = [
  { id: "mockup1", title: "Mockup 1", image: "assets/Anuma%20UI_Option1.png" },
  { id: "mockup2", title: "Mockup 2", image: "assets/Anuma%20UI_Option2.png" },
  { id: "mockup4", title: "Mockup 4", image: "assets/Anuma%20UI_Option4.png" },
  { id: "mockup6", title: "Mockup 6", image: "assets/Anuma%20UI_Option6.png" },
  { id: "mockup8", title: "Mockup 8", image: "assets/Anuma%20UI_Option8.png" },
  { id: "mockup9", title: "Mockup 9", image: "assets/Anuma%20UI_Option9.png" }
];

const steps = [
  {
    id: "orientation", nav: "Orientation", navNumber: "00", kicker: "00 / Onboarding", title: "Enter the transition<br><em>with intention.</em>",
    intro: "aNUma is moving into a new chapter: from a pioneering VR experience into a clearer ecosystem of solo journeys, guided practice, and creation tools. This transition asks for more than a new look. It asks us to refine the identity so the work can flourish without losing what made it matter in the first place.",
    content: [
      "Use this process to surface what is true, what is changing, and what the next identity must protect.",
      "Write from your own experience. Specific memories, tensions and doubts are more useful than polished consensus.",
      "The goal is not to decide the brand in one sitting. The goal is to gather the raw material for a stronger shared direction."
    ],
    fields: []
  },
  {
    id: "context", nav: "Your lens", kicker: "01 / Context", title: "First,<br><em>a little context.</em>",
    intro: "This section captures who is responding, how close you are to the work, and why you believe the brand needs to evolve now.",
    fields: [
      { id: "name", type: "text", label: "Your name", placeholder: "First and last name" },
      { id: "role", type: "text", label: "Your role or relationship to aNUma", placeholder: "e.g. Founder, advisor, programme lead" },
      { id: "tenure", type: "radio", label: "How long have you been close to the work?", options: [["under1","Under 1 year"],["1to3","1-3 years"],["3to5","3-5 years"],["5plus","5+ years"]] },
      { id: "whyNow", type: "textarea", label: "Why does the brand need to change now?", help: "Name the shift, pressure or opportunity. Avoid prescribing a visual solution.", placeholder: "The current brand no longer..." }
    ]
  },
  {
    id: "truth", nav: "Core truth", kicker: "02 / Foundations", title: "Let's uncover the truth<br><em>beneath the language.</em>",
    intro: "Before we choose words or visuals, we need to name what is already true about the work: why it began, what it has learned, what must be protected, and why it still matters.",
    fields: [
      { id: "origin", type: "textarea", label: "Why was aNUma created?", help: "Name the original need, possibility or invitation that made the work necessary.", placeholder: "It began because..." },
      { id: "belief", type: "textarea", label: "What has aNUma learned through experience that others may not know yet?", help: "Use track record, repeated encounters, hard-won lessons or patterns the team has seen over time.", placeholder: "Through the work, we have learned..." },
      { id: "nonnegotiable", type: "textarea", label: "What must never be lost as aNUma evolves?", placeholder: "Even in ten years, we must..." },
      { id: "futureLoss", type: "textarea", label: "What value, relevance or meaning would be missing if aNUma no longer existed?", placeholder: "People and communities would lose..." }
    ]
  },
  {
    id: "ecosystem", nav: "Ecosystem", kicker: "03 / Architecture", title: "Let's make the whole<br><em>system legible.</em>",
    intro: "aNUma and Numadelic Labs operate in relation. This exercise clarifies how the for-profit and non-profit branches can coexist in the brand story without forcing a premature architecture.",
    fields: [
      { id: "anumaRole", type: "textarea", label: "In one sentence, what role should aNUma play in the ecosystem?", placeholder: "aNUma exists to..." },
      { id: "labsRole", type: "textarea", label: "In one sentence, what function should Numadelic Labs serve?", placeholder: "Numadelic Labs exists to..." },
      { id: "relationship", type: "radio", label: "How should people understand their relationship?", options: [["one","One brand with two expressions"],["endorsed","Distinct initiatives, visibly connected"],["independent","Independent brands with a shared origin"],["unclear","The model is still unresolved"]] },
      { id: "sharedDistinct", type: "split", label: "What must they share, and what must remain distinct?", left: "Shared DNA", right: "Necessary difference" },
      { id: "confusion", type: "textarea", label: "Where does the current ecosystem create confusion or friction?", placeholder: "People currently misunderstand...", optional: true }
    ]
  },
  {
    id: "offers", nav: "Three layers", kicker: "04 / Product System", title: "Let's clarify<br><em>the ecosystem.</em>",
    intro: "In previous conversations, three pathways have started to emerge: solo experiences, group experiences for facilitators, clinics and labs, and advanced tools for experience designers. The aNUma Web App has also been discussed as a way to create reflective friction, support preparation and integration, and make each session feel intentional rather than consumed. This section explores how these pieces could work together while still feeling like one aNUma world.",
    fields: [
      { id: "soloSection", type: "sectionNote", optional: true, label: "Pathway 01", title: "Solo experiences", text: "Start with the individual journey. What should it offer, what should it never overpromise, and what context does it need before someone enters the experience?" },
      { id: "soloPathway", type: "textarea", label: "How should the solo pathway work, feel and create value?", help: "Consider the person seeking an individual experience, the promise, the boundaries, the preparation and the features that make it more than passive consumption.", placeholder: "The solo pathway should..." },
      { id: "facilitatorSection", type: "sectionNote", optional: true, label: "Pathway 02", title: "Group experiences for facilitators, clinics and labs", text: "Now look at the guided setting. This pathway needs to serve practice, research, care and group facilitation without becoming generic professional software." },
      { id: "facilitatorPathway", type: "textarea", label: "How should the group-experience pathway support facilitators, clinics and labs?", help: "Think about session controls, experience libraries, scripts, notes, evidence, training, participant safety and why someone would pay to use it in practice.", placeholder: "For facilitators, clinics and labs, aNUma should..." },
      { id: "facilitatorPrice", type: "radio", label: "Which pricing logic feels most aligned for facilitators, clinics or labs?", options: [["subscription","Ongoing professional subscription"],["usage","Per participant or session"],["license","Annual practice or site licence"],["hybrid","Lower subscription plus usage"],["unknown","We need to test the model"]] },
      { id: "designerSection", type: "sectionNote", optional: true, label: "Pathway 03", title: "Advanced tools for experience designers", text: "Then look at the creator layer. This pathway should clarify what serious experience designers can build, publish or use commercially." },
      { id: "designerPathway", type: "textarea", label: "What should experience designers be able to create, control or publish?", help: "Consider authoring tools, environments, avatars, molecular simulations, interaction, scripts, permissions and commercial use.", placeholder: "Experience designers should be able to..." },
      { id: "designerEconomics", type: "textarea", label: "How should experience designers gain value, and how might aNUma share in it?", placeholder: "Designers could publish, share or sell..." },
      { id: "companionSection", type: "sectionNote", optional: true, label: "Companion layer", title: "aNUma Web App", text: "This is still an ideation-stage concept: a web app that could support authentication, preparation, a practice tracker, insight capture, a notification system, integration prompts and community features. Reflective friction is useful here: it means adding intentional pauses and prompts that help people contemplate, integrate and care for set and setting instead of rushing into another experience." },
      { id: "companionRole", type: "textarea", label: "What thoughts or ideas do you have for the aNUma Web App?", help: "Think broadly about preparation, practice tracking, reflection, notifications, community, authentication, safety and how the web app could create more intentional context around the experiences.", placeholder: "The web app could help people..." },
      { id: "companionFunctions", type: "multi", label: "Which aNUma Web App functions would create the most useful reflective friction?", help: "Choose up to four. Focus on the functions that make the experience more intentional, not just more feature-rich.", limit: 4, options: ["Account and session authentication","Preparation prompts before VR","Intention setting","Personal settings for the next session","Safety and consent check-ins","Insight capture after the session","Integration practice tracker","Reminders for reflection","Facilitator or clinician handoff","Progress history across experiences"] },
      { id: "communitySection", type: "sectionNote", optional: true, label: "Shared layer", title: "Community and continuity", text: "After the pathways, name what connects people across experiences: language, practice, belonging, evidence, learning or shared rituals." },
      { id: "communityRole", type: "textarea", label: "What should the community layer make possible across all pathways?", placeholder: "The community layer should..." },
      { id: "ecosystemSection", type: "sectionNote", optional: true, label: "Whole system", title: "The full ecosystem", text: "Finally, step back and describe how the pieces should relate when the product vision becomes more complete." },
      { id: "ecosystemVision", type: "textarea", label: "What only becomes possible when the full ecosystem connects?", placeholder: "When the ecosystem is working, aNUma can..." },
      { id: "layerRelationship", type: "radio", label: "How visibly should the three layers relate?", options: [["one","One aNUma product with three modes"],["tiers","One ecosystem with named tiers"],["family","A family of distinct products endorsed by aNUma"],["open","Still open - the identity should help decide"]] },
      { id: "launchPriority", type: "multi", label: "What must the new landing page communicate in its first 30 seconds?", help: "Choose the three messages that must land before anything else in the public-facing visual identity and landing page.", limit: 3, options: ["What aNUma is","Who it is for","Why it matters now","Why it is trustworthy","How the ecosystem works","What numadelic means","What makes the work credible","How to take the next step"] }
    ]
  },
  {
    id: "people", nav: "People", kicker: "05 / Audience", title: "Let's understand who<br><em>needs to move closer.</em>",
    intro: "A brand cannot be equally meaningful to everyone. Focus on the people whose trust, participation or advocacy changes the outcome.",
    fields: [
      { id: "priorityAudience", type: "textarea", label: "Who is the single most important audience for the next chapter?", help: "Describe a recognisable person or group, not a demographic bucket.", placeholder: "They are people who..." },
      { id: "want", type: "textarea", label: "What are they already looking for that could make aNUma relevant to them?", placeholder: "They are looking for..." },
      { id: "barrier", type: "textarea", label: "What practical barriers might stop this audience from trying, funding or recommending aNUma?", placeholder: "The barriers are..." },
      { id: "currentPerception", type: "textarea", label: "What assumption might this audience make before they understand the work?", placeholder: "Before they understand it, they may assume..." },
      { id: "stakeholders", type: "matrix", label: "Map the wider circle", cells: [
        ["Participants", "What do they need from us?"], ["Partners", "Why would they join us?"], ["Funders", "What proof earns confidence?"], ["Critics", "What concern deserves an answer?"]
      ]}
    ]
  },
  {
    id: "story", nav: "Story", kicker: "06 / Narrative", title: "Let's place the audience<br><em>inside the story.</em>",
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
    id: "character", nav: "Character", kicker: "07 / Personality", title: "Let's choose a character<br><em>for the brand.</em>",
    intro: "Select the few qualities that should guide behaviour, language and design. The constraint matters: a brand with twenty traits has no character.",
    fields: [
      { id: "primaryTraits", type: "rank", label: "Choose exactly 5 defining traits", help: "These should be distinctive enough to guide a creative decision.", limit: 5, options: ["Grounded","Brave","Inquisitive","Lucid","Playful","Rigorous","Warm","Unconventional","Restorative","Provocative","Generous","Visionary","Embodied","Precise","Open","Catalytic","Humble","Inventive"] },
      { id: "notTraits", type: "rank", label: "Choose up to 5 traits we must avoid", limit: 5, options: ["Clinical","Dogmatic","Elitist","Vague","Naive","Corporate","Mystical","Cold","Chaotic","Preachy","Trendy","Institutional","Exclusive","Overpromising"] },
      { id: "areNot", type: "matrix", label: "Complete the tension", cells: [
        ["We are", "Example: rigorous, but human."],
        ["But we are not", "Example: clinical, cold or extractive."],
        ["Vision", "What future is the brand moving toward?"],
        ["Anti-vision", "What future does the brand reject?"],
        ["Allies", "Who or what belongs beside this brand?"],
        ["Enemies", "What forces, habits or assumptions does the brand work against?"]
      ] },
      { id: "human", type: "textarea", label: "What should aNUma's character make people trust it to do?", placeholder: "People should trust us to..." }
    ]
  },
  {
    id: "archetype", nav: "Archetype", kicker: "08 / Brand role", title: "Let's identify<br><em>the brand archetype.</em>",
    intro: "Archetypes reveal the recurring role a brand plays in people's lives. Choose what is true in practice, not what sounds most aspirational. The result is a hypothesis for synthesis, not a final label.",
    fields: [
      archetypeField("naturalGift", "What contribution feels most natural to aNUma?", "Choose three. This round carries the most weight.", 3, 3, "gift"),
      archetypeField("changeMethod", "How does aNUma most credibly create change?", "Choose two behaviours the organisation can demonstrate today.", 2, 2, "method"),
      archetypeField("shadowRisk", "Which shadow risks could aNUma realistically fall into?", "Choose two uncomfortable risks. Recognising the shadow helps distinguish an authentic archetype from an attractive costume.", 2, 1, "shadow"),
      { id: "archetypeResult", type: "archetypeResult", label: "Your emerging archetype signal", optional: true }
    ]
  },
  {
    id: "expression", nav: "Expression", kicker: "09 / Voice & Feeling", title: "Let's shape how the brand<br><em>enters the room.</em>",
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
    id: "proof", nav: "Proof", kicker: "10 / Impact", title: "Let's connect ambition<br><em>to evidence.</em>",
    intro: "Trust grows when aspiration connects to concrete change. Capture what aNUma can prove now and what it must become able to prove.",
    fields: [
      { id: "proud", type: "textarea", label: "Which moment or achievement are you most proud of, and why?", placeholder: "The moment that best represents us is..." },
      { id: "proofPoints", type: "textarea", label: "What evidence already demonstrates aNUma's value?", help: "Consider outcomes, stories, partnerships, methods, reach and changed behaviour.", placeholder: "We can point to..." },
      { id: "impact", type: "textarea", label: "What meaningful change should aNUma create over the next 3-5 years?", placeholder: "We will know the work matters when..." },
      { id: "measure", type: "textarea", label: "How should that change be observed or measured?", placeholder: "Signals of progress include..." },
      { id: "claim", type: "textarea", label: "What tempting claim should the brand never make?", placeholder: "We must never imply that..." }
    ]
  },
  {
    id: "edge", nav: "Edge", kicker: "11 / Future", title: "Let's imagine the future<br><em>aNUma can responsibly build.</em>",
    intro: "Distinctiveness often lives in an unusual combination. Finish by naming the tension, risk and future the new identity needs to make visible.",
    fields: [
      { id: "alternatives", type: "textarea", label: "What do people choose instead of aNUma, including doing nothing?", placeholder: "The real alternatives are..." },
      { id: "different", type: "textarea", label: "What can aNUma credibly own that those alternatives cannot?", placeholder: "Only aNUma combines..." },
      { id: "tension", type: "textarea", label: "Which apparent contradiction is actually our strength?", help: "Examples of the structure: rigorous and imaginative; ancient and emerging; individual and systemic.", placeholder: "We are both... and..." },
      { id: "medium", type: "textarea", label: "Where is VR essential, and where might another medium deliver a numadelic experience better?", help: "Be critical about the medium. Consider live facilitation, audio, web, installation, mobile, learning tools, community rituals or formats that do not require a headset.", placeholder: "VR is essential when... Another medium may work better when..." },
      { id: "risk", type: "radio", label: "Which risk would be most damaging in the next identity?", options: [["safe","Becoming safe and forgettable"],["alienating","Becoming distinctive but alienating"],["abstract","Remaining abstract and hard to explain"],["narrow","Becoming clear but too narrow"]] },
      { id: "headline", type: "textarea", label: "Looking toward 2027, what would make the next chapter feel successful and meaningful?", placeholder: "By 2027, aNUma has..." },
      { id: "anything", type: "textarea", label: "Anything else you want the identity team to know?", optional: true, placeholder: "Add anything we should carry into the next phase..." }
    ]
  },
  {
    id: "lookfeel", nav: "Look & feel", kicker: "12 / Visual Direction", title: "Let's imagine the next look<br><em>for aNUma.</em>",
    intro: "This is not a final style vote. It gives the identity team a directional read on the emotional world, colour territory and interface priorities that feel most right for the next aNUma experience.",
    fields: [
      { id: "visualDirection", type: "visualVote", label: "Which visual direction feels most promising for the next aNUma interface?", help: "Choose the option you would want to see explored through AI-generated UI mockups.", options: LOOK_FEEL_OPTIONS },
      { id: "customPalette", type: "paletteBuilder", label: "Do you have your own palette idea?", help: "Optional: name a palette and choose five or six colors that feel right for aNUma.", optional: true, colors: ["#080713", "#111027", "#7187ff", "#55d8ff", "#f4f2ff", "#ffffff"] },
      { id: "visualReason", type: "textarea", label: "Imagine this direction as a real app screen. What visual moments, details or interface elements would you want to see?", placeholder: "I would want to see..." },
      { id: "uiFeatures", type: "multi", label: "Which UI features matter most in the next version?", help: "Choose up to four. Think about what people need to feel oriented, safe and ready to continue.", limit: 4, options: ["Clear pathway selection","Beautiful solo onboarding","Preparation and integration prompts","Hand tracking","Facilitator session controls","Experience library navigation","Creator / authoring workspace","Safety and consent language","Progress and reflection history","Community or cohort layer","Evidence and impact signals"] },
      { id: "uiFeatureOther", type: "textarea", label: "Is there another feature the interface should include?", optional: true, placeholder: "Another feature I would add is..." },
      { id: "mockupVote", type: "mockupVote", label: "Which UI mockup is your favourite?", help: "Vote for the direction that feels most worth developing. This is about critical response, not picking a final design.", options: MOCKUP_OPTIONS },
      { id: "mockupWhy", type: "textarea", label: "Why do you like this mockup best?", help: "Name the specific design choices, feelings or product signals that make it stronger than the others.", placeholder: "I prefer this one because..." },
      { id: "mockupAlternative", type: "textarea", label: "Do you have another idea for the look, interaction or product experience?", optional: true, placeholder: "Another direction I would explore is..." },
      { id: "mockupReview", type: "split", label: "When we compare future mockups, what should the team evaluate?", left: "Look and feeling", right: "Practical function" }
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
      <span class="nav-step__num">${step.navNumber || String(index).padStart(2,"0")}</span>
      <span class="nav-step__name">${step.nav}</span>
      <span class="nav-step__state"></span>
    </button>`).join("");
  navMount.querySelectorAll(".nav-step").forEach(button => button.addEventListener("click", () => {
    captureInputs(); currentStep = Number(button.dataset.index); state.currentStep = currentStep; persist(); renderStep();
  }));
}

function renderStep() {
  const step = steps[currentStep];
  const content = step.content ? `<div class="orientation-notes">${step.content.map(item => `<p>${item}</p>`).join("")}</div>` : "";
  const questions = step.fields.length ? `<div class="questions">${step.fields.map(field => renderField(step.id, field)).join("")}</div>` : "";
  stepMount.innerHTML = `<article class="step">
    <div class="step__meta">${step.kicker}</div>
    <h2>${step.title}</h2>
    <p class="step__intro">${step.intro}</p>
    ${content}
    ${questions}
  </article>`;
  bindFields(step);
  backButton.classList.toggle("hidden", currentStep === 0);
  const nextLabel = currentStep === steps.length - 1 ? "Review responses" : "Continue";
  document.querySelector("#nextLabel").textContent = nextLabel;
  nextButton.setAttribute("aria-label", nextLabel);
  renderNav(); updateProgress(); window.scrollTo(0,0);
}

function renderField(stepId, field) {
  if (field.type === "sectionNote") {
    return `<div class="section-note" data-question="${field.id}"><span>${field.label}</span><h3>${field.title}</h3><p>${field.text}</p></div>`;
  }
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
    const displayOptions = [...field.options, ...selected.filter(item => !field.options.includes(item))];
    control = `<div class="rank-zone" data-rank="${field.id}" data-limit="${field.limit}"><div class="rank-zone__head"><span>Tap to select</span><span class="selection-count">${selected.length} / ${field.limit}</span></div><div class="selected-pills" aria-live="polite">${renderSelectedPills(selected)}</div><div class="rank-list">${displayOptions.map(v => `<label class="rank-chip"><input type="checkbox" data-field="${field.id}" value="${escapeHtml(v)}" ${selected.includes(v) ? "checked" : ""}>${escapeHtml(v)}</label>`).join("")}</div><div class="custom-word"><input class="field" type="text" aria-label="Add your own trait" placeholder="Add a trait that is missing"><button type="button" aria-label="Add trait">+</button></div></div>`;
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
  if (field.type === "visualVote") {
    control = `<div class="visual-grid">${field.options.map(option => `<label class="visual-card"><input type="radio" name="${field.id}" data-field="${field.id}" value="${option.id}" ${value === option.id ? "checked" : ""}><span class="visual-card__group">${option.group}</span><span class="visual-card__swatches">${option.colors.map(color => `<i style="background:${color}"></i>`).join("")}</span><strong>${option.title}</strong><span>${option.description}</span></label>`).join("")}</div>`;
  }
  if (field.type === "paletteBuilder") {
    const palette = value && typeof value === "object" ? value : { name: "", colors: field.colors };
    const colors = [...(palette.colors || []), ...field.colors].slice(0, 6);
    control = `<div class="palette-builder" data-palette="${field.id}">
      <input class="field palette-builder__name" data-field="${field.id}" data-part="name" type="text" value="${escapeHtml(palette.name || "")}" placeholder="Name your palette">
      <div class="palette-builder__colors">${colors.map((color, index) => `<label><span>Color ${index + 1}</span><input type="color" data-field="${field.id}" data-part="color-${index}" value="${escapeHtml(color)}"><code>${escapeHtml(color)}</code></label>`).join("")}</div>
    </div>`;
  }
  if (field.type === "mockupVote") {
    control = `<div class="mockup-grid">${field.options.map(option => `<label class="mockup-card"><input type="radio" name="${field.id}" data-field="${field.id}" value="${option.id}" ${value === option.id ? "checked" : ""}><span>${option.title}</span><img src="${option.image}" alt="${option.title} aNUma UI mockup"></label>`).join("")}</div>`;
  }
  if (field.type === "archetypeResult") control = renderArchetypeResult();
  return `<div class="question" data-question="${field.id}">${head}${control}</div>`;
}

function renderSelectedPills(selected) {
  if (!selected.length) return `<span class="selected-pills__empty">Selected traits will appear here.</span>`;
  return selected.map(item => `<span class="selected-pill">${escapeHtml(item)}</span>`).join("");
}

function calculateArchetypeResult() {
  const archetypeStep = steps.find(step => step.id === "archetype");
  const scoredFields = archetypeStep.fields.filter(field => field.scoreMap);
  if (scoredFields.some(field => getAnswer("archetype", field.id, []).length !== field.limit)) return null;
  const scores = Object.fromEntries(Object.keys(ARCHETYPES).map(name => [name, 0]));
  const evidence = Object.fromEntries(Object.keys(ARCHETYPES).map(name => [name, []]));
  scoredFields.forEach(field => {
    getAnswer("archetype", field.id, []).forEach(option => {
      const name = field.scoreMap[option];
      if (!name) return;
      scores[name] += field.weight;
      evidence[name].push(option);
    });
  });
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!ranked[0] || ranked[0][1] === 0) return null;
  return {
    primary: ranked[0][0], primaryScore: ranked[0][1],
    secondary: ranked[1][0], secondaryScore: ranked[1][1], scores, evidence
  };
}

function renderArchetypeResult() {
  const result = calculateArchetypeResult();
  if (!result) return `<div class="archetype-result archetype-result--empty"><p>Complete the three rounds above to reveal an emerging signal.</p></div>`;
  const max = Math.max(...Object.values(result.scores), 1);
  return `<div class="archetype-result">
    <p class="archetype-result__note">A directional signal from this response. Compare it with the rest of the team before deciding the brand's primary and supporting archetypes.</p>
    <div class="archetype-result__leaders">${[result.primary, result.secondary].map((name, index) => {
      const profile = ARCHETYPES[name];
      const score = result.scores[name];
      return `<article class="archetype-card"><span>${index === 0 ? "Primary signal" : "Supporting signal"} / ${profile.family}</span><h3>${name}</h3><p>${profile.purpose}</p><div class="archetype-bar"><i style="width:${Math.round(score / max * 100)}%"></i></div><small>${score} weighted points</small><strong>Watch for: ${profile.shadow}</strong></article>`;
    }).join("")}</div>
  </div>`;
}

function syncArchetypeResult() {
  const result = calculateArchetypeResult();
  if (!state.answers.archetype) state.answers.archetype = {};
  if (result) state.answers.archetype.archetypeResult = result;
  else delete state.answers.archetype.archetypeResult;
  persist();
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
    "network": "The browser's online speech service is unreachable. Typed answers still work; on-device voice depends on Chrome or Edge language-pack support.",
    "language-not-supported": "On-device English recognition is not available on this browser or device.",
    "no-speech": "No speech was detected. Move closer to the microphone and try again."
  };
  return messages[error] || "Voice input could not start. Check microphone access and try again.";
}

async function toggleVoiceInput(input, button, Recognition) {
  if (activeRecognition) {
    activeRecognition.cancelled = true;
    activeRecognition.stop();
    if (activeRecognition.button === button) {
      showVoiceStatus("Voice input stopped.");
      return;
    }
  }

  const recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
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
    showVoiceStatus(`${recognition.processLocally ? "On-device voice" : "Voice input"} is listening... speak naturally, then pause.`);
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
  button.disabled = true;
  if (typeof Recognition.available === "function" && typeof Recognition.install === "function" && "processLocally" in recognition) {
    try {
      const availability = await Recognition.available({ langs: ["en-US"], processLocally: true });
      if (availability === "available") recognition.processLocally = true;
      else if (availability === "downloadable" || availability === "downloading") {
        showVoiceStatus("Preparing private on-device voice. The one-time English language pack may take a moment.");
        recognition.processLocally = Boolean(await Recognition.install({ langs: ["en-US"] }));
      }
    } catch (error) {
      console.info("On-device speech is unavailable; using the browser service.", error);
    }
  }
  button.disabled = false;
  try {
    recognition.start();
  } catch {
    button.disabled = false;
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
  if (field.type === "radio" || field.type === "mockupVote") setAnswer(step.id, fieldId, input.value);
  else if (field.type === "rank") {
    const zone = input.closest("[data-rank]");
    const checked = [...zone.querySelectorAll("input[type=checkbox]:checked")];
    if (checked.length > field.limit) { input.checked = false; return; }
    setAnswer(step.id, fieldId, checked.map(item => item.value));
    zone.querySelector(".selection-count").textContent = `${checked.length} / ${field.limit}`;
    zone.querySelector(".selected-pills").innerHTML = renderSelectedPills(checked.map(item => item.value));
    zone.querySelectorAll(".rank-chip").forEach(chip => chip.classList.toggle("disabled", checked.length >= field.limit && !chip.querySelector("input").checked));
  } else if (field.type === "visualVote") {
    setAnswer(step.id, fieldId, input.value);
  } else if (field.type === "paletteBuilder") {
    const zone = input.closest("[data-palette]");
    const name = zone.querySelector('[data-part="name"]').value.trim();
    const colors = [...zone.querySelectorAll('input[type="color"]')].map(colorInput => colorInput.value);
    if (input.type === "color") input.closest("label").querySelector("code").textContent = input.value;
    setAnswer(step.id, fieldId, { name, colors });
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
    if (step.id === "archetype") {
      syncArchetypeResult();
      const result = stepMount.querySelector('[data-question="archetypeResult"] .archetype-result');
      if (result) result.outerHTML = renderArchetypeResult();
    }
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
  if (!required.length) return 1;
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
  document.querySelector("#reviewMount").innerHTML = steps.filter(step => step.fields.length).map(step => {
    const items = step.fields.filter(field => field.type !== "sectionNote" && isAnswered(getAnswer(step.id,field.id))).map(field => `<div class="review-item"><small>${field.label}</small><div class="review-answer">${formatAnswer(field, getAnswer(step.id,field.id))}</div></div>`).join("");
    return `<section class="review-card"><h3>${step.kicker} - ${step.nav}</h3>${items || `<div class="review-item"><p>No responses recorded.</p></div>`}</section>`;
  }).join("");
  showScreen("review");
}

function formatAnswer(field, value) {
  if (field.type === "archetypeResult") return `${escapeHtml(value.primary)} (${value.primaryScore} points) / ${escapeHtml(value.secondary)} (${value.secondaryScore} points)`;
  if (field.type === "visualVote") return escapeHtml(field.options.find(option => option.id === value)?.title || value);
  if (field.type === "mockupVote") {
    const option = field.options.find(option => option.id === value);
    if (!option) return escapeHtml(value);
    return `<strong>${escapeHtml(option.title)}</strong><img class="review-image" src="${option.image}" alt="${escapeHtml(option.title)} aNUma UI mockup">`;
  }
  if (field.type === "paletteBuilder") return `${escapeHtml(value.name || "Custom palette")}\n${escapeHtml((value.colors || []).join(" · "))}`;
  if (Array.isArray(value)) return escapeHtml(value.join(" · "));
  if (value && typeof value === "object") return Object.entries(value).filter(([,v]) => v).map(([k,v]) => `${escapeHtml(k)}: ${escapeHtml(v)}`).join("\n");
  if (field.type === "radio") return escapeHtml(field.options.find(([v]) => v === value)?.[1] || value);
  if (field.type === "spectrum") return `${field.left} ${value}/100 ${field.right}`;
  return escapeHtml(value);
}

function serializeAnswer(field, value) {
  const base = { id: field.id, label: field.label, type: field.type, value };
  if (field.type === "radio") return { ...base, display: field.options.find(([v]) => v === value)?.[1] || value };
  if (field.type === "visualVote") {
    const option = field.options.find(option => option.id === value);
    return { ...base, display: option?.title || value, colors: option?.colors || [] };
  }
  if (field.type === "mockupVote") {
    const option = field.options.find(option => option.id === value);
    return { ...base, display: option?.title || value, image: option?.image || "" };
  }
  if (field.type === "paletteBuilder") return { ...base, display: value?.name || "Custom palette", colors: value?.colors || [] };
  if (field.type === "spectrum") return { ...base, display: `${field.left} ${value}/100 ${field.right}` };
  return { ...base, display: stripTags(formatAnswer(field, value)) };
}

function stripTags(value) {
  const element = document.createElement("div");
  element.innerHTML = String(value ?? "");
  return element.textContent || element.innerText || "";
}

function exportResponses() {
  const respondentName = String(getAnswer("context","name","team-member")).trim() || "team-member";
  const output = {
    project: "aNUma Brand Discovery",
    respondentName,
    exportedAt: new Date().toISOString(),
    note: "Individual discovery response. Treat as input for synthesis, not final strategy.",
    sections: steps.filter(step => step.fields.length).map(step => ({
      id: step.id,
      section: step.nav,
      responses: step.fields
        .filter(field => field.type !== "sectionNote")
        .map(field => serializeAnswer(field, getAnswer(step.id,field.id)))
    }))
  };
  const blob = new Blob([JSON.stringify(output,null,2)], { type: "application/json" });
  const url = URL.createObjectURL(blob); const anchor = document.createElement("a");
  const name = respondentName.toLowerCase().replace(/[^a-z0-9]+/g,"-") || "team-member";
  anchor.href = url; anchor.download = `anuma-brand-discovery-${name}.json`; anchor.click(); URL.revokeObjectURL(url);
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
document.querySelector("#printButton").addEventListener("click", () => window.print());
document.querySelector("#thankYouButton").addEventListener("click", () => showScreen("thankyou"));
document.querySelector("#backToReviewButton").addEventListener("click", () => showScreen("review"));
document.querySelector("#exitButton").addEventListener("click", () => document.querySelector("#resetDialog").showModal());
document.querySelector("#cancelReset").addEventListener("click", () => document.querySelector("#resetDialog").close());
document.querySelector("#confirmReset").addEventListener("click", () => { localStorage.removeItem(STORAGE_KEY); state = {answers:{},currentStep:0,started:false}; currentStep = 0; document.querySelector("#resetDialog").close(); document.querySelector("#resumeButton").classList.add("hidden"); showScreen("welcome"); });
document.addEventListener("keydown", event => { if (event.key === "Enter" && (event.ctrlKey || event.metaKey) && document.querySelector('[data-screen="workspace"]').classList.contains("active")) nextButton.click(); });

if (state.started) document.querySelector("#resumeButton").classList.remove("hidden");
updateProgress();
