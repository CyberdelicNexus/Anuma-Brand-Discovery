(() => {
  const response = (id, label, value, type = "textarea") => ({
    id,
    label,
    type,
    value,
    display: Array.isArray(value) ? value.join(" · ") : typeof value === "object" ? Object.entries(value).map(([key, item]) => `${key}: ${item}`).join("\n") : String(value),
  });

  window.ANUMA_STRATEGIST_RESPONSE = {
    project: "aNUma Brand Discovery",
    respondentName: "Jose Montemayor",
    exportedAt: "2026-09-22T00:00:00.000Z",
    note: "Approved seventh team response. Integrated into team counts, means, rankings and evidence traces.",
    sections: [
      {
        id: "context",
        section: "Your lens",
        responses: [
          response("name", "Your name", "Jose Montemayor", "text"),
          response("role", "Your role or relationship to aNUma", "Brand strategist and design lead for this next phase.", "text"),
          response("whyNow", "Why does the brand need to change now?", "The research has earned credibility, but the way people discover, understand and access the work has not caught up. The brand needs to make the value clear and give people a practical way in."),
        ],
      },
      {
        id: "truth",
        section: "Core truth",
        responses: [
          response("origin", "Why was aNUma created?", "To explore how immersive technology can create new experiences of embodiment, connection and meaning, then make that research something people can actually experience."),
          response("belief", "What has aNUma learned through experience that others may not know yet?", "The container matters as much as the experience. Preparation, agency, facilitation and integration shape what people can take from it."),
          response("nonnegotiable", "What must never be lost as aNUma evolves?", "Epistemic humility, participant agency, scientific rigour, the numadelic aesthetic and the relational heart of the work."),
          response("futureLoss", "What value would be missing if aNUma no longer existed?", "A rare bridge between immersive design, contemplative practice and serious research."),
        ],
      },
      {
        id: "ecosystem",
        section: "Ecosystem",
        responses: [
          response("anumaRole", "In one sentence, what role should aNUma play in the ecosystem?", "aNUma should package, deliver and sustain numadelic practices for participants and practitioners."),
          response("labsRole", "In one sentence, what function should Numadelic Labs serve?", "Numadelic Labs should research, improve and safeguard the field, while extending access through public-benefit work."),
          response("relationship", "How should people understand their relationship?", "Distinct initiatives, visibly connected", "radio"),
          response("sharedDistinct", "What must they share, and what must remain distinct?", { "Shared DNA": "The numadelic method, values, aesthetic, community and commitment to evidence.", "Necessary difference": "Governance, claims, revenue, product delivery and public-benefit responsibilities." }, "split"),
          response("confusion", "Where does the current ecosystem create confusion or friction?", "It is not always clear who owns the product, who makes the scientific claims, where revenue goes or which name the public should trust."),
        ],
      },
      {
        id: "offers",
        section: "Three layers",
        responses: [
          response("soloPathway", "How should the solo pathway work, feel and create value?", "It should be a prepared journey, not a content feed: clear intention, readiness, consent, the experience, reflection and a next step."),
          response("facilitatorPathway", "How should the group-experience pathway support facilitators, clinics and labs?", "Give them training, session tools, trusted experiences, participant safeguards, evidence and a way to offer recurring practices or cohorts."),
          response("facilitatorPrice", "Which pricing logic feels most aligned for facilitators, clinics or labs?", "We need to test the model", "radio"),
          response("designerPathway", "What should experience designers be able to create, control or publish?", "They should build experiences through a no-code studio, test them in VR and submit them for review before publication."),
          response("designerEconomics", "How should experience designers gain value, and how might aNUma share in it?", "Start with paid training and creator tools. Add review services and revenue share only when there is a real audience and distribution channel."),
          response("companionRole", "What thoughts or ideas do you have for the aNUma Web App?", "It should hold the before and after: preparation, consent, reflection, practice history, community and access to facilitators."),
          response("companionFunctions", "Which companion functions would create the most useful reflective friction?", ["Preparation prompts before VR", "Safety and consent check-ins", "Insight capture after the session", "Integration practice tracker"], "multi"),
          response("communityRole", "What should the community layer make possible across all pathways?", "Help people practise together, find trusted guidance, join cohorts and continue relationships beyond one experience."),
          response("ecosystemVision", "What only becomes possible when the full ecosystem connects?", "Someone can discover the work, enter safely, continue practising, find guidance and eventually contribute back to the field."),
          response("layerRelationship", "How visibly should the three layers relate?", "One ecosystem with named tiers", "radio"),
          response("launchPriority", "What must the new landing page communicate in its first 30 seconds?", ["What aNUma is", "Who it is for", "How to take the next step"], "multi"),
        ],
      },
      {
        id: "people",
        section: "People",
        responses: [
          response("priorityAudience", "Who is the single most important audience for the next chapter?", "Contemplatively curious people already looking for a meaningful embodied practice, especially when a trusted teacher or facilitator can introduce them."),
          response("want", "What are they already looking for?", "A way to feel and practise what they may already understand intellectually, without dogma or empty wellness claims."),
          response("barrier", "What practical barriers might stop this audience?", "Headset access, technical setup, unclear benefits, an unfamiliar category, safety concerns and no obvious place to begin."),
          response("currentPerception", "What assumption might this audience make?", "That it is an abstract research demo, a VR art project or a psychedelic simulation rather than a real practice."),
          response("stakeholders", "Map the wider circle", { Participants: "A clear promise, safe entry, meaningful guidance and a way to continue.", Partners: "A distinctive embodied tool for communities they already serve.", Funders: "Evidence, credible partners, responsible claims and adoption.", Critics: "Why VR is needed, how risk is handled and whether the practice creates dependency." }, "matrix"),
        ],
      },
      {
        id: "story",
        section: "Story",
        responses: [
          response("problemExternal", "What practical problem do they face?", "They can understand ideas about connection or presence without having a reliable way to experience and practise them."),
          response("problemInternal", "How does that problem make them feel?", "Interested but disconnected; informed but not changed."),
          response("empathy", "What can aNUma say that proves we understand?", "Knowing something is not the same as feeling it or living it."),
          response("authority", "What makes aNUma a credible guide?", "Years of immersive design, peer-reviewed research, participant experience and a team that understands contemplative practice and technology."),
          response("plan", "What simple path do we invite people to take?", "Choose a practice. Prepare with care. Enter the experience. Reflect. Continue alone or with others."),
          response("success", "What becomes possible when it works?", "An unfamiliar experience becomes a practice they can understand, return to and integrate into life."),
        ],
      },
      {
        id: "character",
        section: "Character",
        responses: [
          response("primaryTraits", "Choose exactly 5 defining traits", ["Humble", "Rigorous", "Warm", "Embodied", "Inventive"], "rank"),
          response("notTraits", "Choose up to 5 traits we must avoid", ["Dogmatic", "Clinical", "Elitist", "Vague", "Overpromising"], "rank"),
          response("areNot", "Complete the tension", { "We are": "Rigorous, imaginative and human.", "But we are not": "Clinical, mystical for effect or certain about what another person should experience.", Vision: "Technology that protects attention and supports deeper ways of relating.", "Anti-vision": "Technology designed for extraction, passive consumption or dependency.", Allies: "Contemplative teachers, researchers, artists, facilitators, care partners and thoughtful technologists.", Enemies: "Attention extraction, empty spectacle, unsupported claims and endless invention without delivery." }, "matrix"),
          response("human", "What should aNUma's character make people trust it to do?", "Guide them into an unfamiliar experience with care, clarity and room to make their own meaning."),
        ],
      },
      {
        id: "archetype",
        section: "Archetype",
        responses: [
          response("naturalGift", "What contribution feels most natural to aNUma?", ["Create intimate, beautiful connection", "Open new paths to self-discovery", "Invent original worlds and tools"], "multi"),
          response("changeMethod", "How does aNUma most credibly create change?", ["Invite people beyond familiar boundaries", "Deepen felt connection with self and others"], "multi"),
          response("shadowRisk", "Which shadow risks could aNUma realistically fall into?", ["Promising transformation we cannot responsibly guarantee", "Remaining in endless invention instead of shipping"], "multi"),
        ],
      },
      {
        id: "expression",
        section: "Expression",
        responses: [
          response("voiceAcademic", "How should the voice balance expertise and access?", 70, "spectrum"),
          response("voicePoetic", "How should language balance imagination and clarity?", 45, "spectrum"),
          response("voiceProvocative", "How directly should aNUma challenge convention?", 40, "spectrum"),
          response("visualOrganic", "What visual energy feels most truthful?", 20, "spectrum"),
          response("feeling", "What should someone feel immediately after encountering aNUma?", "Curious, safe and drawn toward an experience they do not need to fully understand yet."),
          response("sample", "Write one sentence aNUma would say.", "You do not need to know what will happen. You need enough context to enter with curiosity and choice."),
        ],
      },
      {
        id: "proof",
        section: "Proof",
        responses: [
          response("proud", "Which moment or achievement are you most proud of?", "The work created experiences people remember while also producing serious research around them."),
          response("proofPoints", "What evidence already demonstrates aNUma's value?", "Peer-reviewed research, participant testimony, academic partnerships, working solo and group experiences and a committed network around the work."),
          response("impact", "What meaningful change should aNUma create?", "Make numadelic practice easier to access, safer to enter and possible to continue through trusted people and different formats."),
          response("measure", "How should that change be measured?", "Completed practices, return and referral, repeat cohorts, facilitator activity, paid renewals, participant-reported outcomes and safety data."),
          response("claim", "What tempting claim should the brand never make?", "That aNUma guarantees transformation, connection, healing or a psychedelic-equivalent experience."),
        ],
      },
      {
        id: "edge",
        section: "Edge",
        responses: [
          response("alternatives", "What do people choose instead of aNUma?", "Meditation apps, retreats, therapy, breathwork, spiritual communities, wellness VR, psychedelic experiences—or nothing."),
          response("different", "What can aNUma credibly own?", "The combination of immersive practice, weakly representational design, participant agency, relational experience and scientific inquiry."),
          response("tension", "Which apparent contradiction is actually our strength?", "We are rigorous and mysterious, technological and embodied, individual and relational."),
          response("medium", "Where is VR essential, and where might another medium work better?", "VR is strongest for immersion, altered embodiment and remote co-presence. Mobile, web, lighter XR, wearables, installations and retreats may work better for access, preparation, continuity and shared physical settings."),
          response("risk", "Which risk would be most damaging?", "Remaining abstract and hard to explain", "radio"),
          response("headline", "What would make the next chapter successful?", "aNUma has a clear paid offer, a refined solo journey, recurring facilitated practices and a companion layer that helps people prepare, integrate and return."),
          response("anything", "Anything else?", "The identity should launch with a working doorway, not ahead of one. The next release should prove a complete journey before expanding the ecosystem."),
        ],
      },
      {
        id: "lookfeel",
        section: "Look & feel",
        responses: [
          response("visualDirection", "Which visual direction feels most promising?", "bioluminescent", "visualVote"),
          response("visualReason", "What visual moments would you want to see?", "Soft bodies of light, diffuse cloud energy, slow coalescence, generous darkness and clear interfaces that feel calm rather than futuristic."),
          response("uiFeatures", "Which UI features matter most?", ["Clear pathway selection", "Beautiful solo onboarding", "Preparation and integration prompts", "Safety and consent language"], "multi"),
          response("uiFeatureOther", "Is there another feature the interface should include?", "A clear handoff between the companion app and the headset, including the option to enter alone or with others."),
          response("mockupVote", "Which UI mockup is your favourite?", "mockup1", "mockupVote"),
          response("mockupWhy", "Why do you like this mockup best?", "The five experiences are immediately legible, the luminous orbs feel like the brand and the interface creates wonder without hiding the choices."),
          response("mockupAlternative", "Do you have another idea?", "Carry the same luminous system into the companion app, facilitator tools and physical touchpoints without making every surface feel cosmic."),
          response("mockupReview", "What should the team evaluate?", { "Look and feeling": "Luminous, spacious, embodied, calm and open to interpretation.", "Practical function": "Clear choices, readable text, visible agency, simple navigation and an obvious next step." }, "split"),
        ],
      },
    ],
  };
})();
