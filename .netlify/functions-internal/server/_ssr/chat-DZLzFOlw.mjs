import { r as __toESM } from "../_runtime.mjs";
import { m as require_jsx_runtime, p as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as severityInfo, i as SEVERITY_LEVELS, r as PlightWordmark, t as CRISIS_LINES } from "./severity-0QvIUcUc.mjs";
import { E as ClipboardList, L as ArrowLeft, M as Brain, P as ArrowUp, _ as MessageSquarePlus, a as Stethoscope, d as Phone, l as Settings, r as Trash2, x as LifeBuoy } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-DSLF4HH0.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-DZLzFOlw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var options = [{
	value: "mind",
	label: "Mind Support",
	icon: Brain
}, {
	value: "health",
	label: "Health Guide",
	icon: Stethoscope
}];
function ChatModeToggle({ mode, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": "Assistant mode",
		className: "inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-1",
		children: options.map(({ value, label, icon: Icon }) => {
			const activeMode = mode === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "tab",
				type: "button",
				"aria-selected": activeMode,
				onClick: () => onChange(value),
				className: `inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors duration-150 ${activeMode ? "bg-selected text-foreground" : "text-muted-foreground hover:bg-hover hover:text-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-3.5 w-3.5",
					strokeWidth: 1.5
				}), label]
			}, value);
		})
	});
}
function ChatSidebar({ conversations, activeId, onSelect, onNew, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex w-full shrink-0 flex-col border-b border-border bg-sidebar md:h-dvh md:w-64 md:border-r md:border-b-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlightWordmark, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onNew,
					className: "inline-flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, {
						className: "h-3.5 w-3.5",
						strokeWidth: 1.5
					}), "New chat"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-3 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs px-1 pb-2",
					children: "History"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: conversations.map((c) => {
						const isActive = c.id === activeId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onSelect(c.id),
								className: `w-full truncate rounded-md px-2.5 py-2 pr-8 text-left text-xs transition-colors duration-150 ${isActive ? "bg-selected text-foreground" : "text-muted-foreground hover:bg-hover hover:text-foreground"}`,
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onDelete(c.id),
								"aria-label": `Delete ${c.title}`,
								className: "absolute top-1.5 right-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md text-disabled opacity-0 transition-opacity duration-150 group-hover:opacity-100 hover:text-foreground focus-visible:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
									className: "h-3.5 w-3.5",
									strokeWidth: 1.5
								})
							})]
						}, c.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto space-y-1 border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
						className: "h-3.5 w-3.5",
						strokeWidth: 1.5
					}), "Settings"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-3.5 w-3.5",
						strokeWidth: 1.5
					}), "Back to site"]
				})]
			})
		]
	});
}
function ChatInput({ disabled, placeholder, onSend }) {
	const [value, setValue] = (0, import_react.useState)("");
	const submit = () => {
		if (!value.trim() || disabled) return;
		onSend(value);
		setValue("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			submit();
		},
		className: "flex items-end gap-2 rounded-lg border border-border bg-card p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (e) => setValue(e.target.value),
			onKeyDown: (e) => {
				if (e.key === "Enter" && !e.shiftKey) {
					e.preventDefault();
					submit();
				}
			},
			rows: 2,
			placeholder,
			"aria-label": "Message",
			className: "max-h-40 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2 text-xs leading-relaxed text-foreground outline-none placeholder:text-disabled md:text-[13px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			disabled: disabled || !value.trim(),
			"aria-label": "Send message",
			className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground active:bg-pressed disabled:text-disabled disabled:hover:bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
				className: "h-4 w-4",
				strokeWidth: 1.6
			})
		})]
	});
}
function CrisisBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border bg-surface px-4 py-2 text-[11px] text-muted-foreground md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1.5 text-secondary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
				className: "h-3 w-3",
				strokeWidth: 1.6
			}), "In crisis? Contact your local emergency number now."]
		}), CRISIS_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground",
				children: line.contact
			}),
			" · ",
			line.region
		] }, line.region))]
	});
}
function EscalationCard({ reason, onConnect, connected = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-border-strong bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
					className: "h-4 w-4 text-foreground",
					strokeWidth: 1.5
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.12em] text-foreground uppercase",
					children: "Professional support recommended"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-secondary-foreground",
				children: reason
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs leading-relaxed text-muted-foreground",
				children: "This seems like something a licensed professional should be involved in. You're not being handed off — you can keep talking with me in the meantime."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-md border border-border bg-card p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs",
					children: "Crisis lines — available now"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2.5 space-y-2",
					children: CRISIS_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-xs text-secondary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: line.contact
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								" ",
								"· ",
								line.label,
								" (",
								line.region,
								")"
							]
						})] })]
					}, line.region))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onConnect,
					disabled: connected,
					className: "rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90 disabled:opacity-60",
					children: connected ? "Request sent — a clinician will reach out" : "Connect with a licensed psychiatrist"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center rounded-md border border-border px-3 py-2 text-xs text-muted-foreground",
					children: "Or keep chatting here"
				})]
			})
		]
	});
}
function SeverityCard({ level, explanation }) {
	const info = severityInfo(level);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-border-strong bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
					className: "h-4 w-4 text-foreground",
					strokeWidth: 1.5
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.12em] text-foreground uppercase",
					children: "Severity assessment"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-baseline gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold tracking-tight text-foreground",
						children: info.level
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-foreground",
						children: info.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "of 5"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3.5 flex gap-1",
				role: "img",
				"aria-label": `Severity ${info.level} of 5: ${info.name}`,
				children: SEVERITY_LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `h-1.5 flex-1 rounded-full ${l.level <= info.level ? "bg-foreground" : "bg-border"}`,
					style: l.level <= info.level ? { opacity: .4 + l.level * .12 } : void 0
				}, l.level))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex justify-between gap-1 text-[10px] text-muted-foreground",
				children: SEVERITY_LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "flex-1 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: l.level === info.level ? "text-foreground" : "",
						children: l.level
					})
				}, l.level))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 flex justify-between text-[10px] text-disabled",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1 Mild" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "3 Consult Soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5 Emergency" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 border-t border-border pt-4 text-xs leading-relaxed text-secondary-foreground",
				children: explanation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-md border border-border bg-card p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs",
					children: "Recommended next step"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-foreground",
					children: info.next
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] leading-relaxed text-muted-foreground",
				children: "This is guidance toward the right level of care — not a diagnosis or treatment plan."
			})
		]
	});
}
function MessageBubble({ message, onConnect, connected }) {
	const isUser = message.role === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fade-up space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: isUser ? "flex justify-end" : "flex justify-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `max-w-[85%] ${isUser ? "text-right" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs mb-1.5",
						children: isUser ? "You" : "Assistant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `rounded-md border border-border px-3.5 py-2.5 text-left text-xs leading-relaxed whitespace-pre-wrap md:text-[13px] ${isUser ? "bg-selected text-foreground" : "bg-surface text-secondary-foreground"}`,
						children: message.text
					})]
				})
			}),
			message.card?.kind === "escalation" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EscalationCard, {
				reason: message.card.reason,
				onConnect,
				connected
			}),
			message.card?.kind === "severity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeverityCard, {
				level: message.card.level,
				explanation: message.card.explanation
			})
		]
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Assistant is typing"
			}), [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-1.5 w-1.5 rounded-full bg-muted-foreground",
				style: { animation: `plight-pulse 1.2s ease-in-out ${i * .15}s infinite` }
			}, i))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes plight-pulse{0%,100%{opacity:.3}50%{opacity:1}}` })]
	});
}
var MODES = {
	mind: {
		name: "Mind Support",
		description: "Supportive conversation, coping tools, and a route to a real professional.",
		disclaimer: "This assistant offers support, not therapy or a diagnosis.",
		greeting: "Hi — I'm here to listen, at whatever pace suits you. What's been sitting with you today?"
	},
	health: {
		name: "Health Guide",
		description: "Structured symptom questions and a clear 1–5 severity read with next steps.",
		disclaimer: "This assistant provides guidance, not diagnosis or treatment. For emergencies, contact emergency services.",
		greeting: "Tell me what you're noticing physically — I'll ask a few questions about duration and severity, then give you a clear next step."
	}
};
function createId() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
/**
* Placeholder response engine.
*
* Swap `generateReply` for a real model/backend call later — the message shape
* (text + optional inline card) is all the UI depends on.
*/
var CRISIS_SIGNALS = [
	"kill myself",
	"end my life",
	"suicide",
	"suicidal",
	"self harm",
	"self-harm",
	"hurt myself",
	"no reason to live",
	"can't go on",
	"cant go on",
	"want to die",
	"give up completely",
	"hopeless",
	"worthless"
];
var EMERGENCY_SIGNALS = [
	"chest pain",
	"can't breathe",
	"cant breathe",
	"trouble breathing",
	"severe bleeding",
	"unconscious",
	"slurred speech",
	"numb on one side",
	"worst headache",
	"coughing blood"
];
var PROMPT_SIGNALS = [
	"fever",
	"vomit",
	"rash",
	"dizzy",
	"pain",
	"cough",
	"swelling",
	"headache"
];
var MIND_REPLIES = [
	"Thank you for saying that out loud — it takes something to put it into words. What does it feel like in your body when it's at its strongest?",
	"That sounds genuinely heavy, and it makes sense that you're tired. Has anything made it even slightly easier this week, even briefly?",
	"I want to stay with that for a moment rather than rush to advice. When did you first notice this shift?",
	"Let's try something small and concrete: breathe in for 4, hold for 7, out for 8 — three rounds. I'll be here when you're done. How does your chest feel after?",
	"It sounds like part of you is being very hard on yourself. If a friend described exactly this to you, what would you want them to hear?",
	"Noticing it is real progress, even when it doesn't feel like it. Would it help to name one thing you can control today, however small?"
];
var HEALTH_FOLLOWUPS = [
	"Understood. How long has this been going on — hours, days, or longer?",
	"Thanks. On a scale of mild to severe, how intense does it feel right now, and is it constant or coming in waves?",
	"Helpful. Any other symptoms alongside it — fever, shortness of breath, nausea, or anything unusual?",
	"Last question: has anything made it noticeably better or worse, and are you managing to eat, drink, and sleep?"
];
function includesAny(text, list) {
	const lower = text.toLowerCase();
	return list.some((s) => lower.includes(s));
}
function severityFrom(text, turns) {
	if (includesAny(text, EMERGENCY_SIGNALS)) return {
		level: 5,
		explanation: "You've described symptoms that can indicate a time-critical condition. This is not something to assess at home."
	};
	if (includesAny(text, [
		"worse",
		"getting worse",
		"high fever",
		"severe",
		"days of"
	])) return {
		level: 4,
		explanation: "The symptoms are escalating rather than settling, and that pattern usually means being seen today rather than waiting."
	};
	if (includesAny(text, PROMPT_SIGNALS) && turns >= 3) return {
		level: 3,
		explanation: "The duration and combination of what you've described warrant a clinician's input, though nothing suggests urgency."
	};
	if (turns >= 4) return {
		level: 2,
		explanation: "Nothing you've described is alarming, but the pattern is worth tracking for the next couple of days."
	};
	return {
		level: 1,
		explanation: "What you've described sounds mild and self-limiting, and is likely to settle with rest and basic self-care."
	};
}
function generateReply(mode, userText, history) {
	const userTurns = history.filter((m) => m.role === "user").length;
	let text;
	let card;
	if (mode === "mind") if (includesAny(userText, CRISIS_SIGNALS)) {
		text = "I'm really glad you told me. What you're describing sounds like more weight than anyone should carry alone, and I'd rather not be the only support in the room right now.";
		card = {
			kind: "escalation",
			reason: "Signals of severe distress were detected in this conversation. A licensed professional should be involved."
		};
	} else text = MIND_REPLIES[Math.min(userTurns, MIND_REPLIES.length - 1)] ?? MIND_REPLIES[0];
	else {
		const emergency = includesAny(userText, EMERGENCY_SIGNALS);
		if (emergency || userTurns >= HEALTH_FOLLOWUPS.length) {
			const { level, explanation } = severityFrom(userText, userTurns + 1);
			text = emergency ? "I'm going to stop the questions here — based on what you've described, this needs immediate attention." : "Thanks for working through those questions with me. Here's how I'd read what you've described.";
			card = {
				kind: "severity",
				level,
				explanation
			};
		} else text = HEALTH_FOLLOWUPS[userTurns] ?? HEALTH_FOLLOWUPS[0];
	}
	return {
		id: createId(),
		role: "assistant",
		text,
		createdAt: Date.now(),
		...card ? { card } : {}
	};
}
var STORAGE_KEY = "plight-chat-v1";
function newConversation(mode) {
	return {
		id: createId(),
		mode,
		title: "New conversation",
		updatedAt: Date.now(),
		messages: [{
			id: createId(),
			role: "assistant",
			text: MODES[mode].greeting,
			createdAt: Date.now()
		}]
	};
}
function titleFrom(text) {
	const clean = text.trim().replace(/\s+/g, " ");
	return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean || "New conversation";
}
function useChatStore() {
	const [mode, setMode] = (0, import_react.useState)("mind");
	const [conversations, setConversations] = (0, import_react.useState)([]);
	const [activeIds, setActiveIds] = (0, import_react.useState)({
		mind: null,
		health: null
	});
	const [typing, setTyping] = (0, import_react.useState)(false);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const timer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let loaded = [];
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				loaded = Array.isArray(parsed.conversations) ? parsed.conversations : [];
				if (parsed.mode === "mind" || parsed.mode === "health") setMode(parsed.mode);
			}
		} catch {
			loaded = [];
		}
		const seeded = [...loaded];
		["mind", "health"].forEach((m) => {
			if (!seeded.some((c) => c.mode === m)) seeded.push(newConversation(m));
		});
		setConversations(seeded);
		setActiveIds({
			mind: seeded.filter((c) => c.mode === "mind").sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
			health: seeded.filter((c) => c.mode === "health").sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null
		});
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({
				conversations,
				mode
			}));
		} catch {}
	}, [
		conversations,
		mode,
		hydrated
	]);
	(0, import_react.useEffect)(() => () => {
		if (timer.current) clearTimeout(timer.current);
	}, []);
	const modeConversations = (0, import_react.useMemo)(() => conversations.filter((c) => c.mode === mode).sort((a, b) => b.updatedAt - a.updatedAt), [conversations, mode]);
	const activeId = activeIds[mode];
	const active = (0, import_react.useMemo)(() => conversations.find((c) => c.id === activeId) ?? modeConversations[0] ?? null, [
		conversations,
		activeId,
		modeConversations
	]);
	return {
		mode,
		setMode,
		hydrated,
		typing,
		active,
		conversations: modeConversations,
		startNew: (0, import_react.useCallback)(() => {
			const conv = newConversation(mode);
			setConversations((prev) => [conv, ...prev]);
			setActiveIds((prev) => ({
				...prev,
				[mode]: conv.id
			}));
		}, [mode]),
		selectConversation: (0, import_react.useCallback)((id) => setActiveIds((prev) => ({
			...prev,
			[mode]: id
		})), [mode]),
		deleteConversation: (0, import_react.useCallback)((id) => {
			setConversations((prev) => {
				const next = prev.filter((c) => c.id !== id);
				const remaining = next.filter((c) => c.mode === mode);
				if (remaining.length === 0) {
					const conv = newConversation(mode);
					setActiveIds((ids) => ({
						...ids,
						[mode]: conv.id
					}));
					return [conv, ...next];
				}
				const fallback = remaining[0];
				setActiveIds((ids) => ids[mode] === id && fallback ? {
					...ids,
					[mode]: fallback.id
				} : ids);
				return next;
			});
		}, [mode]),
		send: (0, import_react.useCallback)((text) => {
			const trimmed = text.trim();
			if (!trimmed || !active || typing) return;
			const conversationId = active.id;
			const userMessage = {
				id: createId(),
				role: "user",
				text: trimmed,
				createdAt: Date.now()
			};
			setConversations((prev) => prev.map((c) => c.id === conversationId ? {
				...c,
				title: c.messages.some((m) => m.role === "user") ? c.title : titleFrom(trimmed),
				messages: [...c.messages, userMessage],
				updatedAt: Date.now()
			} : c));
			setTyping(true);
			const historyForReply = [...active.messages, userMessage];
			timer.current = setTimeout(() => {
				const reply = generateReply(active.mode, trimmed, historyForReply);
				setConversations((prev) => prev.map((c) => c.id === conversationId ? {
					...c,
					messages: [...c.messages, reply],
					updatedAt: Date.now()
				} : c));
				setTyping(false);
			}, 700 + Math.random() * 500);
		}, [active, typing])
	};
}
function ChatPage() {
	const { mode, setMode, hydrated, typing, active, conversations, startNew, selectConversation, deleteConversation, send } = useChatStore();
	const [connected, setConnected] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	const meta = MODES[mode];
	const ModeIcon = mode === "mind" ? Brain : Stethoscope;
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}, [active?.messages.length, typing]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background md:h-dvh md:flex-row md:overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatSidebar, {
			conversations,
			activeId: active?.id ?? null,
			onSelect: selectConversation,
			onNew: startNew,
			onDelete: deleteConversation
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrisisBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-border bg-nav px-4 py-3 md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatModeToggle, {
						mode,
						onChange: setMode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-start gap-2.5 transition-opacity duration-150",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeIcon, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-secondary-foreground",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-foreground",
							children: meta.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[11px] leading-relaxed text-muted-foreground",
							children: meta.description
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 py-6 md:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto w-full max-w-3xl space-y-5",
						children: [
							!hydrated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Loading your conversation…"
							}),
							active?.messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
								message,
								connected,
								onConnect: () => setConnected(true)
							}, message.id)),
							typing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-nav px-4 py-3 md:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto w-full max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatInput, {
							disabled: typing || !hydrated,
							placeholder: mode === "mind" ? "Tell me how you're feeling…" : "Describe your symptoms…",
							onSend: send
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
							children: meta.disclaimer
						})]
					})
				})
			]
		})]
	});
}
//#endregion
export { ChatPage as component };
