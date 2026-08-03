import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, i as Root2, m as require_jsx_runtime, n as Header, p as require_react, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as SEVERITY_LEVELS, n as CRISIS_NOTE, r as PlightWordmark } from "./severity-0QvIUcUc.mjs";
import { A as ChartLine, F as ArrowUpRight, I as ArrowRight, M as Brain, N as BookOpen, O as ChevronDown, R as Activity, S as Languages, T as Clock, a as Stethoscope, b as Lock, c as ShieldAlert, d as Phone, g as MessageSquare, j as CalendarCheck, k as Check, n as Wind, o as Star, p as NotebookPen, s as ShieldCheck, t as X, u as Repeat, v as Menu, w as Gauge, x as LifeBuoy, y as Mail } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-DSLF4HH0.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Section } from "./section-Crj9FFF7.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIyEX9vW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "Features",
		href: "#features"
	},
	{
		label: "How It Works",
		href: "#how-it-works"
	},
	{
		label: "Pricing",
		href: "#pricing"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Testimonials",
		href: "#testimonials"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function LandingNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const close = () => setOpen(false);
		window.addEventListener("hashchange", close);
		return () => window.removeEventListener("hashchange", close);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-nav/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlightWordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden flex-1 items-center gap-1 lg:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
						children: link.label
					}) }, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "hidden rounded-md border border-border px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground sm:inline-flex",
							children: "Sign In"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90",
							children: "Get Started"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle navigation",
							"aria-expanded": open,
							className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-nav lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto grid w-full max-w-6xl gap-1 px-6 py-3",
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "block rounded-md px-3 py-2 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
					children: link.label
				}) }, link.href))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs",
					children: "Mental health & medical guidance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-3xl leading-[1.15] font-semibold tracking-tight text-foreground md:text-[2.75rem]",
					children: [
						"Support that listens.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Guidance you can trust."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-secondary-foreground md:text-base",
					children: [
						"Plight pairs two purpose-built assistants in one calm space:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-foreground",
							children: "Mind Support"
						}),
						" for emotional wellbeing, and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-foreground",
							children: "Health Guide"
						}),
						" for understanding physical symptoms with a clear 5-point severity scale. When something looks serious, we bridge you to a real licensed professional."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/chat",
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90",
						children: ["Start a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#how-it-works",
						className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
						children: "See how it works"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs leading-relaxed text-muted-foreground",
					children: "Plight is a support and guidance tool. It does not diagnose, treat, or replace professional care."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPreview, {})]
		})
	});
}
function ChatPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-md bg-selected px-2 py-1 text-[11px] text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-3.5 w-3.5" }), " Mind Support"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-3.5 w-3.5" }), " Health Guide"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewBubble, {
						role: "user",
						children: "I've been anxious all week and I'm not sleeping much."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewBubble, {
						role: "assistant",
						children: "That sounds exhausting. Let's slow it down together — when did the restless nights start, and what does the anxiety feel like in your body?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewBubble, {
						role: "user",
						children: "Mostly a tight chest. It starts around midnight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border-strong bg-surface p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-xs",
								children: "Suggested exercise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-secondary-foreground",
								children: "4-7-8 breathing · 3 rounds · grounding follow-up"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-1",
								"aria-hidden": "true",
								children: [
									0,
									1,
									2,
									3,
									4
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 flex-1 rounded-full ${i < 2 ? "bg-foreground/70" : "bg-border"}` }, i))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-disabled",
					children: "Type how you're feeling…"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto h-3.5 w-3.5 rounded-sm border border-border-strong",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function PreviewBubble({ role, children }) {
	const isUser = role === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: isUser ? "flex justify-end" : "flex justify-start",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `max-w-[85%] rounded-md border border-border px-3 py-2 text-xs leading-relaxed ${isUser ? "bg-selected text-foreground" : "bg-surface text-secondary-foreground"}`,
			children
		})
	});
}
var markers = [
	{
		icon: ShieldCheck,
		label: "HIPAA-conscious design"
	},
	{
		icon: Stethoscope,
		label: "Licensed professional network"
	},
	{
		icon: Clock,
		label: "24/7 availability"
	},
	{
		icon: Lock,
		label: "Data encrypted end-to-end"
	}
];
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid w-full max-w-6xl gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4",
			children: markers.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2.5 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0 text-secondary-foreground" }), label]
			}, label))
		})
	});
}
var features = [
	{
		icon: Brain,
		title: "AI mental health companion",
		body: "Talk through anxiety, stress, low mood, or loneliness with an assistant trained to listen before it suggests."
	},
	{
		icon: LifeBuoy,
		title: "Crisis detection & escalation",
		body: "Conversations are quietly assessed for risk. Signs of severe distress surface an immediate route to a licensed psychiatrist."
	},
	{
		icon: Gauge,
		title: "Medical guidance with triage",
		body: "Health Guide asks structured questions and returns a clear 1–5 severity level with a recommended next step."
	},
	{
		icon: NotebookPen,
		title: "Mood & symptom tracking",
		body: "Every session can be logged to a private journal so patterns across weeks become visible, not guesswork."
	},
	{
		icon: Wind,
		title: "Guided coping exercises",
		body: "Breathing, grounding, and CBT-style reframing prompts delivered step by step, in the flow of conversation."
	},
	{
		icon: Lock,
		title: "Private by construction",
		body: "Encrypted in transit and at rest. We never sell data, and you can delete any conversation permanently."
	},
	{
		icon: Repeat,
		title: "Switch modes instantly",
		body: "Move between Mind Support and Health Guide with one control. Each keeps its own separate history."
	},
	{
		icon: CalendarCheck,
		title: "Personalized check-ins",
		body: "Gentle, opt-in reminders that ask how you're doing at the times of day that matter to you."
	},
	{
		icon: Activity,
		title: "Human-in-the-loop care",
		body: "Real clinicians review escalations. The AI is a bridge to professional support, never a substitute for it."
	},
	{
		icon: BookOpen,
		title: "Resource library",
		body: "Plain-language articles, verified hotlines, and self-help tools, organised by what you're facing right now."
	},
	{
		icon: ChartLine,
		title: "Progress insights",
		body: "A quiet dashboard showing mood trend, session frequency, and exercises that actually helped you."
	},
	{
		icon: Languages,
		title: "Multi-language & accessible",
		body: "Screen-reader friendly, keyboard navigable, high-contrast themes, and support across multiple languages."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "features",
		label: "Capabilities",
		title: "Everything the platform does, in one calm surface",
		intro: "Plight is built as infrastructure for accessible care: support in the moment, triage when you need direction, and a human on the other side when it matters.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
			children: features.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "bg-card p-5 transition-colors duration-150 hover:bg-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-4.5 w-4.5 text-secondary-foreground",
						strokeWidth: 1.4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3.5 text-sm font-medium text-foreground",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted-foreground",
						children: body
					})
				]
			}, title))
		})
	});
}
var steps = [
	{
		title: "Create an account",
		body: "Sign up in under a minute. No insurance details, no clinical intake forms, no waiting room."
	},
	{
		title: "Choose your assistant",
		body: "Mind Support for emotional wellbeing, or Health Guide for physical symptoms. Switch any time."
	},
	{
		title: "Chat & get guidance",
		body: "Talk it through. You'll get coping tools, clarifying questions, and a plain-language severity read."
	},
	{
		title: "Escalate if needed",
		body: "If the conversation suggests you need more, we connect you to a licensed professional and share hotlines instantly."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "how-it-works",
		surface: true,
		label: "How it works",
		title: "Four steps from “I don't know where to start” to a clear next move",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4",
			children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border-strong text-xs text-secondary-foreground",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3.5 text-sm font-medium text-foreground",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted-foreground",
						children: step.body
					})
				]
			}, step.title))
		})
	});
}
function SeverityExplainer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "severity",
		label: "Severity & escalation",
		title: "Clear levels, honest limits",
		intro: "Guidance is only useful if you know what to do with it. Health Guide grades every assessment on a five-point scale, and Mind Support hands off to a human when a conversation calls for one.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs",
					children: "The 5-point severity scale"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex gap-1",
					"aria-hidden": "true",
					children: SEVERITY_LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-1.5 flex-1 rounded-full bg-foreground",
						style: { opacity: .2 + l.level * .16 }
					}, l.level))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5",
					children: SEVERITY_LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg font-semibold text-foreground",
									children: l.level
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-foreground",
									children: l.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
								children: l.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 border-t border-border pt-3 text-[11px] leading-relaxed text-secondary-foreground",
								children: l.next
							})
						]
					}, l.level))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
						className: "h-4.5 w-4.5 text-secondary-foreground",
						strokeWidth: 1.4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3.5 text-sm font-medium text-foreground",
						children: "How Mind Support escalates to a psychiatrist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-l border-border pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "Continuous, quiet assessment."
								}), " Language signalling hopelessness, self-harm risk, or acute crisis is flagged as the conversation unfolds."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-l border-border pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "An escalation card appears inline."
								}), " Calm, plainly worded, with hotline numbers shown immediately and persistently."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-l border-border pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "A licensed professional is offered."
								}), " One tap requests a psychiatrist from our network — you can keep chatting while you wait."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-l border-border pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "Nothing is forced."
								}), " You stay in control of what is shared and with whom."]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex flex-col rounded-lg border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs",
						children: "Our position"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3.5 text-sm font-medium text-foreground",
						children: "AI never replaces professional care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: "Plight is a bridge, not a destination. Mind Support offers support, not therapy. Health Guide offers guidance, not diagnosis or treatment. Both are designed to shorten the distance between the moment you notice something and the moment a qualified human is involved — and to make the wait less lonely."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#faq",
						className: "mt-auto inline-flex items-center gap-1.5 pt-6 text-xs text-secondary-foreground transition-colors duration-150 hover:text-foreground",
						children: ["Read the clinical FAQ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})
				]
			})]
		})]
	});
}
var testimonials = [
	{
		quote: "I used it at 2am when my chest was tight and I couldn't call anyone. It walked me through breathing until I could sleep.",
		name: "Amara O.",
		role: "User since 2024",
		rating: 5
	},
	{
		quote: "Health Guide graded my symptoms a 4 and told me not to wait. Turned out it was right. That nudge mattered.",
		name: "Daniel K.",
		role: "Symptom triage",
		rating: 5
	},
	{
		quote: "It noticed I was slipping and offered to connect me to a psychiatrist. I said yes. First time I'd ever asked for help.",
		name: "Rosa M.",
		role: "Escalated to care",
		rating: 5
	},
	{
		quote: "The nightly check-in is the only habit I've kept. Two lines about my mood and it remembers the context next time.",
		name: "Toby L.",
		role: "Daily check-ins",
		rating: 4
	},
	{
		quote: "I have insomnia and I've read every article. This actually asked questions instead of listing generic tips.",
		name: "Priya S.",
		role: "Sleep issues",
		rating: 5
	},
	{
		quote: "Switching between modes is the whole thing for me. My anxiety and my stomach problems are not separate.",
		name: "Marcus B.",
		role: "User since 2025",
		rating: 5
	},
	{
		quote: "No bright red warnings, no upselling. It just told me plainly that a doctor should look at it and gave me the words to use.",
		name: "Elena V.",
		role: "General guidance",
		rating: 4
	},
	{
		quote: "As a carer, the mood history gave me something concrete to bring to my son's appointment.",
		name: "Jonah W.",
		role: "Family member",
		rating: 5
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "testimonials",
		surface: true,
		label: "Testimonials",
		title: "What people tell us afterwards",
		intro: "Names shortened at users' request. Quotes are illustrative examples for this build — replace with verified reviews before launch.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-0.5",
						"aria-label": `${t.rating} out of 5`,
						children: [
							1,
							2,
							3,
							4,
							5
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							className: `h-3 w-3 ${i <= t.rating ? "text-foreground" : "text-disabled"}`,
							strokeWidth: 1.4,
							fill: i <= t.rating ? "currentColor" : "none"
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3.5 text-xs leading-relaxed text-secondary-foreground",
						children: [
							"“",
							t.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-foreground",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[11px] text-muted-foreground",
							children: t.role
						})]
					})
				]
			}, t.name))
		})
	});
}
var stats = [
	{
		value: "120,000+",
		label: "conversations supported",
		note: "placeholder — replace with real data"
	},
	{
		value: "87%",
		label: "of users report feeling better after a session",
		note: "placeholder"
	},
	{
		value: "31",
		label: "states/regions with licensed professionals",
		note: "placeholder"
	},
	{
		value: "< 3s",
		label: "average assistant response time",
		note: "placeholder"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		label: "Impact",
		title: "Measured, not claimed",
		intro: "All figures below are placeholders for this build. Swap them for audited metrics before publishing.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold tracking-tight text-foreground md:text-3xl",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-secondary-foreground",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-[11px] text-disabled",
						children: [
							"[",
							s.note,
							"]"
						]
					})
				]
			}, s.label))
		})
	});
}
var plans = [
	{
		name: "Free",
		price: "$0",
		cadence: "forever",
		summary: "For anyone who needs somewhere to start.",
		features: [
			"Unlimited Mind Support conversations",
			"Health Guide severity assessments",
			"Basic coping exercise library",
			"Crisis resources always available"
		],
		cta: "Start free",
		featured: false
	},
	{
		name: "Plus",
		price: "$12",
		cadence: "per month",
		summary: "For building a consistent practice.",
		features: [
			"Everything in Free",
			"Mood & symptom journal history",
			"Personalized check-ins and reminders",
			"Progress dashboard and insights",
			"Full guided exercise library"
		],
		cta: "Choose Plus",
		featured: true
	},
	{
		name: "Care+",
		price: "$39",
		cadence: "per month",
		summary: "For when you want a human in the loop.",
		features: [
			"Everything in Plus",
			"Priority escalation to licensed professionals",
			"Two clinician sessions per month",
			"Shareable summaries for your care team",
			"Multi-language support"
		],
		cta: "Choose Care+",
		featured: false
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "pricing",
		surface: true,
		label: "Pricing",
		title: "Support shouldn't be gated behind a paywall",
		intro: "The core assistants and every crisis resource stay free. Paid plans add history, insights, and human clinician time.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-5 lg:grid-cols-3",
			children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `flex flex-col rounded-lg border bg-card p-6 ${plan.featured ? "border-border-strong" : "border-border"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-foreground",
							children: plan.name
						}), plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-border px-2 py-0.5 text-[10px] tracking-[0.14em] text-muted-foreground uppercase",
							children: "Popular"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-baseline gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold tracking-tight text-foreground",
							children: plan.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: plan.cadence
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: plan.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 border-t border-border pt-5",
						children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-xs leading-relaxed text-secondary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground",
								strokeWidth: 1.6
							}), f]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/chat",
						className: `mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-xs font-medium transition-colors duration-150 ${plan.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border text-secondary-foreground hover:bg-hover hover:text-foreground"}`,
						children: plan.cta
					})
				]
			}, plan.name))
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "Is Plight a replacement for therapy?",
		a: "No. Mind Support offers supportive conversation, coping strategies, and check-ins — not therapy, diagnosis, or a treatment plan. It is designed to help you cope in the moment and to connect you with a licensed professional when that's what you need."
	},
	{
		q: "How does escalation to a real professional work?",
		a: "As you chat, Mind Support quietly assesses severity. If it detects signs of crisis or severe distress, an escalation card appears inline with crisis hotline numbers and a button to request a licensed psychiatrist from our network. You can keep chatting with the assistant while you wait, and you decide what gets shared."
	},
	{
		q: "What does the 5-point severity scale actually mean?",
		a: "Health Guide grades an assessment from 1 (mild, self-care) to 5 (seek emergency care now), with a plain-language explanation of why that level was assigned and a single recommended next step. It is guidance toward the right level of care — never a diagnosis."
	},
	{
		q: "How is my data stored and secured?",
		a: "Conversations are encrypted in transit and at rest, access is scoped to your account, and we never sell data or share it with advertisers. You can delete any conversation permanently, and deletion removes it from history and insights."
	},
	{
		q: "Where can I find Kenya emergency hotlines?",
		a: "Use the Kenya crisis hotlines page for emergency numbers, hospital guidance, and immediate next steps if someone is at risk."
	},
	{
		q: "What does it cost?",
		a: "The core assistants and all crisis resources are free, forever. Paid plans add journal history, personalized check-ins, progress insights, and — on Care+ — priority escalation plus clinician session time."
	},
	{
		q: "Is it available at night and on weekends?",
		a: "The assistants are available 24/7. Licensed professional availability depends on your region and time of day; if no clinician can respond immediately, we show verified crisis lines that can."
	},
	{
		q: "What should I do in an emergency?",
		a: "Contact your local emergency number or a crisis hotline immediately. Plight is not an emergency service and cannot dispatch help."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "faq",
		label: "FAQ",
		title: "Questions we get asked most",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "overflow-hidden rounded-lg border border-border bg-card",
			children: faqs.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: `item-${i}`,
				className: i === faqs.length - 1 ? "border-b-0" : "border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "px-5 py-4 text-left text-xs font-medium text-foreground hover:no-underline",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
					className: "px-5 pb-4 text-xs leading-relaxed text-muted-foreground",
					children: item.q === "Where can I find Kenya emergency hotlines?" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						item.a,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kenya-hotlines",
							className: "text-foreground underline underline-offset-2",
							children: "Open the Kenya hotline page"
						}),
						"."
					] }) : item.a
				})]
			}, item.q))
		})
	});
}
function Investors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs",
						children: "For investors & partners"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-lg leading-snug font-medium text-foreground md:text-xl",
						children: "Building the future of accessible mental health support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: "We're closing the gap between the moment someone needs help and the moment a qualified human is involved — with clinical oversight, transparent escalation, and privacy as a design constraint rather than a policy page."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
					children: ["Partner with us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#severity",
					className: "inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground",
					children: "Learn about our mission"
				})]
			})]
		})
	});
}
var contactMethods = [
	{
		icon: Mail,
		title: "Email",
		body: "For partnerships, press, and product questions.",
		action: "hello@plight.health",
		href: "mailto:hello@plight.health"
	},
	{
		icon: MessageSquare,
		title: "Chat",
		body: "Try the live experience to see Mind Support and Health Guide in action.",
		action: "Open chat",
		href: "/chat"
	},
	{
		icon: Phone,
		title: "Urgent help",
		body: "If this is a crisis, use your local emergency number or a crisis hotline immediately.",
		action: "See crisis guidance",
		href: "/kenya-hotlines"
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		surface: true,
		label: "Contact",
		title: "Reach out, start chat, or find urgent help",
		intro: "This section gives visitors a direct next step without breaking the calm style of the page.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-secondary-foreground",
						children: "If you're evaluating Plight for yourself, your team, or your organization, start with the chat experience or send a note by email. For anything urgent, use crisis support immediately."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:hello@plight.health",
							className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90",
							children: ["Email us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chat",
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
							children: "Open chat"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-surface p-6 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: contactMethods.map((method) => {
						const Icon = method.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-secondary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-medium text-foreground",
										children: method.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: method.body
								}),
								method.href.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: method.href,
									className: "mt-3 inline-flex items-center gap-1.5 text-xs text-foreground transition-colors duration-150 hover:text-secondary-foreground",
									children: [method.action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: method.href,
									className: "mt-3 inline-flex items-center gap-1.5 text-xs text-foreground transition-colors duration-150 hover:text-secondary-foreground",
									children: [method.action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						}, method.title);
					})
				})
			})]
		})
	});
}
var columns = [
	{
		title: "Product",
		links: [
			{
				label: "Features",
				href: "#features"
			},
			{
				label: "How It Works",
				href: "#how-it-works"
			},
			{
				label: "Pricing",
				href: "#pricing"
			},
			{
				label: "Severity scale",
				href: "#severity"
			},
			{
				label: "Contact",
				href: "#contact"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "About",
				href: "#about"
			},
			{
				label: "Testimonials",
				href: "#testimonials"
			},
			{
				label: "Partner with us",
				href: "#contact"
			},
			{
				label: "Get started",
				href: "/chat"
			}
		]
	},
	{
		title: "Legal",
		links: [
			{
				label: "Privacy policy",
				href: "/privacy-policy"
			},
			{
				label: "Terms of service",
				href: "/terms-of-service"
			},
			{
				label: "Data processing",
				href: "/data-processing"
			},
			{
				label: "Accessibility",
				href: "#faq"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				label: "FAQ",
				href: "#faq"
			},
			{
				label: "Crisis hotlines",
				href: "/kenya-hotlines"
			},
			{
				label: "Chat",
				href: "/chat"
			},
			{
				label: "Mission",
				href: "#about"
			}
		]
	}
];
function LandingFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contact",
		className: "border-t border-border bg-nav",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.2fr_2.4fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlightWordmark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground",
							children: "A calm place for mental health support and medical guidance — with a real professional on the other side when you need one."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chat",
							className: "mt-5 inline-flex rounded-md border border-border bg-card px-3 py-2 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
							children: "Start a conversation"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
						children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-xs",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: link.href.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.href,
								className: "text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground",
								children: link.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground",
								children: link.label
							}) }, link.label))
						})] }, col.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-md border border-border-strong bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs",
						children: "Crisis notice"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-secondary-foreground",
						children: CRISIS_NOTE
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Plight. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex gap-4",
						children: [
							{
								label: "X",
								href: "/privacy-policy"
							},
							{
								label: "LinkedIn",
								href: "#about"
							},
							{
								label: "Instagram",
								href: "/register"
							},
							{
								label: "GitHub",
								href: "/chat"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s.href.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: s.href,
							className: "transition-colors duration-150 hover:text-foreground",
							children: s.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "transition-colors duration-150 hover:text-foreground",
							children: s.label
						}) }, s.label))
					})]
				})
			]
		})
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeverityExplainer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Investors, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-xs",
								children: "Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-lg font-medium text-foreground",
								children: "Access your workspace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: "Use the auth and settings pages to explore the site structure."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90",
									children: "Login"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/register",
									className: "inline-flex items-center rounded-md border border-border bg-surface px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
									children: "Register"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/settings",
									className: "inline-flex items-center rounded-md border border-border bg-surface px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
									children: "Settings"
								})
							]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingFooter, {})
		]
	});
}
//#endregion
export { LandingPage as component };
