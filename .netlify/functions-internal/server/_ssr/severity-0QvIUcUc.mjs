import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/severity-0QvIUcUc.js
var import_jsx_runtime = require_jsx_runtime();
function PlightMark({ className = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.5",
				y: "3.5",
				width: "19",
				height: "14",
				rx: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 17.5 6.5 21l4.2-3.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.8 10.6h2.1l1.4-2.9 1.9 5.6 1.5-3.4 1 1.7h2.5" })
		]
	});
}
function PlightWordmark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlightMark, { className: "h-[18px] w-[18px] text-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold tracking-[0.22em] text-foreground uppercase",
			children: "Plight"
		})]
	});
}
var CRISIS_NOTE = "If you are in crisis, please contact your local emergency number or a crisis hotline immediately.";
var CRISIS_LINES = [
	{
		region: "US & Canada",
		label: "988 Suicide & Crisis Lifeline",
		contact: "Call or text 988"
	},
	{
		region: "United Kingdom",
		label: "Samaritans",
		contact: "Call 116 123"
	},
	{
		region: "International",
		label: "Find a local hotline",
		contact: "findahelpline.com"
	}
];
var SEVERITY_LEVELS = [
	{
		level: 1,
		name: "Mild",
		short: "Self-care",
		body: "Symptoms are minor and likely to resolve on their own.",
		next: "Rest, hydrate, and use self-care measures. No appointment needed."
	},
	{
		level: 2,
		name: "Monitor",
		short: "Watch closely",
		body: "Nothing alarming, but the pattern is worth tracking for a couple of days.",
		next: "Monitor for 48 hours and log any change. Reach out if it worsens."
	},
	{
		level: 3,
		name: "Consult Soon",
		short: "See a clinician",
		body: "Symptoms warrant professional input, though not urgently.",
		next: "Book a routine appointment with a doctor within the next few days."
	},
	{
		level: 4,
		name: "Seek Care Promptly",
		short: "Same-day care",
		body: "The combination of symptoms suggests you shouldn't wait.",
		next: "Contact an urgent care clinic or your doctor today."
	},
	{
		level: 5,
		name: "Emergency",
		short: "Immediate care",
		body: "These symptoms can indicate a medical emergency.",
		next: "Seek emergency care now — call your local emergency number."
	}
];
function severityInfo(level) {
	return SEVERITY_LEVELS.find((l) => l.level === level) ?? SEVERITY_LEVELS[0];
}
//#endregion
export { severityInfo as a, SEVERITY_LEVELS as i, CRISIS_NOTE as n, PlightWordmark as r, CRISIS_LINES as t };
