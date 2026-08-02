# Mind & Body Compass

PROJECT OVERVIEW

Build a full-stack mental health and wellness platform called Plight. The platform has two core parts:

A comprehensive marketing landing page designed to build trust, demonstrate depth of features, and appeal to investors/funders as well as end users.

A dual-mode chat interface where users can toggle between two distinct AI assistants:

Mind Support — a mental health companion chatbot that offers supportive conversation, coping strategies, and mood tracking, and escalates to a real licensed psychiatrist/mental health professional when it detects signs of severe distress or crisis.

Health Guide — a general medical guidance chatbot that helps users understand symptoms and provides a 5-point severity scale with clear recommended next steps. It explicitly does NOT diagnose or treat — it guides users toward the right level of care.

The overall tone is calm, trustworthy, clinical-but-warm, and privacy-conscious. This is a sensitive-topic product, so the UI should never feel clinical-cold or gimmicky — it should feel safe.

1. LANDING PAGE

Build a long-form, scroll-based landing page with the following sections, in order:

Navigation Bar

Logo/wordmark, links to Features, How It Works, Pricing, About, Testimonials, Contact

"Sign In" and a primary "Get Started" CTA button

Theme toggle (Light/Dark) visible at all times

Sticky on scroll, subtle bottom border only (no shadow)

Hero Section

Strong, reassuring headline (e.g., "Support that listens. Guidance you can trust.")

Subheadline explaining the dual-purpose nature (mental health support + medical guidance)

Primary CTA ("Start a conversation") and secondary CTA ("See how it works")

A minimal illustrative graphic or abstract chat preview (no stock photography of people — keep it abstract/iconographic to match the minimalist system)

Trust & Credibility Bar

Row of quiet trust markers: "HIPAA-conscious design," "Licensed professional network," "24/7 availability," "Data encrypted end-to-end"

This section exists specifically to reassure both users and potential funders/investors reading the page

Core Features Grid (comprehensive — aim for 9–12 feature cards)

Each card: icon, title, 1–2 sentence description. Include coverage across a wide range of issues so the platform reads as comprehensive:

AI mental health companion (anxiety, stress, low mood, loneliness)

Crisis detection & escalation to licensed psychiatrists

General medical guidance chatbot with severity triage

Mood & symptom tracking over time (journal/history)

Guided coping exercises (breathing, grounding, CBT-style prompts)

Secure, private conversations (encryption, no data selling)

Seamless switch between mental health mode and medical guidance mode

Personalized check-ins and reminders

Human-in-the-loop escalation (real professionals, not just AI)

Resource library (articles, hotlines, self-help tools)

Progress dashboard / insights over time

Multi-language / accessibility support

How It Works (3–4 step process)

Simple numbered steps: Sign up → Choose your assistant (Mind Support or Health Guide) → Chat & get guidance → Escalate to a real professional if needed.

Severity & Escalation Explainer

A dedicated section visually explaining:

The 5-point severity scale used by Health Guide (e.g., 1 = Mild/self-care, 2 = Monitor, 3 = Consult a doctor soon, 4 = Seek care promptly, 5 = Seek emergency care now)

How Mind Support escalates to a real psychiatrist when severe distress is detected

Reassurance that AI never replaces professional care — it's a bridge to it

Testimonials / User Comments Section

Include 6–8 short testimonial cards (quote, first name + initial, optional role like "User since 2024"). Vary the use cases (anxiety support, sleep issues, symptom triage, crisis escalation experience, general check-ins) so it reads as broad and credible. Include a star rating or simple satisfaction indicator per card.

Stats / Impact Section

A row of large stat callouts to strengthen funding appeal, e.g.:

"X,000+ conversations supported"

"X% of users report feeling better after a session"

"Licensed professionals available in X states/regions"

"Average response time under X seconds" (Use placeholder numbers clearly marked for the user to replace with real data.)

Pricing / Plans Section

Simple tiered cards (Free / Plus / Care+ or similar), each with feature bullet lists and a CTA.

FAQ Section

Accordion-style, covering privacy, how escalation works, cost, is this a replacement for therapy (answer: no), data security, availability.

For Investors / Partners (optional strip)

A subtle, low-key section: "Building the future of accessible mental health support" with a "Partner with us" or "Learn about our mission" link — signals funding-readiness without feeling like a pitch deck bolted onto a consumer page.

Footer

Links (Product, Company, Legal, Resources), crisis hotline disclaimer, social links, copyright, and a persistent note: "If you are in crisis, please contact your local emergency number or a crisis hotline immediately."

2. CHAT INTERFACE PAGE

Layout

Clean two-pane layout: a slim sidebar (conversation history, new chat, settings, theme toggle) and a main chat panel.

At the top of the main chat panel, a segmented toggle control (like a pill/tab switch) with two options:

Mind Support

Health Guide

Switching should be instant and visually smooth (150–200ms transition), and should clearly re-theme the chat header (icon + short description of the active mode) so users always know which assistant they're talking to.

Persist each mode's conversation history separately.

Mode 1 — Mind Support (Mental Health Chatbot)

Behavior to specify in the prompt:

Warm, non-judgmental, supportive conversational tone.

Offers active listening, coping strategies, grounding techniques, and gentle check-in questions.

Continuously and quietly assesses severity of user's emotional state through conversation.

If signals of severe distress, crisis, or safety risk are detected, the UI should surface an escalation card inline in the chat: a clear, calm message explaining that this seems like something a licensed professional should be involved in, with:

A "Connect with a licensed psychiatrist" button

Crisis hotline information displayed immediately and persistently

Option to continue chatting with the AI in the meantime

Include a persistent, unobtrusive disclaimer in the chat footer: "This assistant offers support, not therapy or a diagnosis."

Mode 2 — Health Guide (Medical Guidance Chatbot)

Behavior to specify in the prompt:

Asks structured, clarifying questions about symptoms (duration, severity, associated symptoms).

At the end of an assessment, displays a Severity Result card inline in the chat with:

A visual 1–5 scale indicator (e.g., horizontal stepped bar or dot scale, labeled clearly: 1 Mild, 2 Monitor, 3 Consult Soon, 4 Seek Care Promptly, 5 Emergency)

A short plain-language explanation of why that level was assigned

A clear "Recommended next step" block (e.g., "Rest and monitor for 48 hours" vs. "Please seek emergency care now" for level 5)

Never issues a diagnosis or treatment plan — always frames output as guidance toward appropriate care.

Persistent disclaimer in chat footer: "This assistant provides guidance, not diagnosis or treatment. For emergencies, contact emergency services."

Shared Chat Components

Message bubbles: flat, thin border, no heavy shadows, generous padding, clear sender distinction via subtle background shift only (no bright colors)

Typing indicator: minimal, three-dot pulse, subtle

Input bar: fixed to bottom, flat bordered textarea, send button as simple icon button

Inline cards (escalation card, severity card) should use the same flat/bordered visual language as the rest of the system — no bright red/green alert colors; use typography, icons, and spacing to convey urgency instead of saturated color

3. DESIGN SYSTEM — Minimalist, Monospaced, Grayscale

Apply this design system to every page and component.

Overall Aesthetic

Clean, modern, minimalist — inspired by contemporary productivity software and terminal-inspired interfaces. Prioritize simplicity, readability, and generous whitespace. The interface should feel calm, refined, and timeless, not trendy.

Support both Light (default) and Dark themes with seamless switching; every component must be adapted to both.

Emphasize: minimal visual clutter, strong typography, consistent spacing, soft grayscale colors, flat components, thin borders, subtle depth, clean layouts, smooth interactions, high readability.

Avoid: bright/saturated colors, heavy shadows, large gradients, glassmorphism, neumorphism, decorative textures, unnecessary animation.

Typography

Primary font: JetBrainsMono Nerd Font, fallback to FiraCode Nerd Font, Hack Nerd Font, or Cascadia Code Nerd Font. Monospaced throughout as a deliberate stylistic identity. Establish hierarchy through size, weight, and spacing — not color.

Light Theme (default)

Primary Background:      #EDEDED
Secondary Background:    #F5F5F5
Cards & Panels:          #FAFAFA
Sidebar:                 #E7E7E7
Navigation:              #ECECEC

Primary Border:          #D1D5DB
Secondary Border:        #C9CDD2

Primary Text:            #1F2937
Secondary Text:          #4B5563
Muted Text:              #6B7280
Disabled Text:           #9CA3AF

Dark Theme

Primary Background:      #121212
Secondary Background:    #181818
Cards & Panels:          #1E1E1E
Sidebar:                 #161616
Navigation:              #191919

Primary Border:          #303030
Secondary Border:        #3B3B3B

Primary Text:            #E5E7EB
Secondary Text:          #D1D5DB
Muted Text:              #9CA3AF
Disabled Text:           #6B7280

Interactive States

Hover:      #262626 (dark) / equivalent light-mode grey step
Selected:   #303030
Pressed:    #383838
Focus Ring: subtle 1–2px gray outline

Components

Flat appearance with subtle elevation only

Small corner radius (6–8px)

Thin borders throughout

Consistent spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

Soft hover states, no heavy shadows, no glossy/skeuomorphic effects

Buttons rely on subtle contrast, not bold color

Icons: simple outline style (Lucide, Tabler Icons, or Phosphor), monochrome only

Motion

Subtle and functional only: 150–200ms transitions, gentle fades, soft hover effects, smooth page transitions. No bouncing or exaggerated motion.

4. TECHNICAL / FUNCTIONAL NOTES FOR LOVABLE

Build responsive for desktop and mobile.

Chat state should persist per session (localStorage or backend, your choice) and separate history per mode (Mind Support vs. Health Guide).

Include a theme provider/context so Light/Dark applies globally and persists across sessions.

Escalation and severity cards should be reusable components, not hardcoded per-message.

Add placeholder/mock AI responses for now (I will connect the real AI logic separately) — but structure the message flow so it's easy to wire up to an actual model or backend later.

Include a clear, persistent crisis-resources footer/banner across chat pages (not just buried in FAQ).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d5503250-f3a0-4c11-b050-2a7ebc06f18c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
