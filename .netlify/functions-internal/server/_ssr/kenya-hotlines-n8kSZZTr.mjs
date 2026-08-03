import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as ShieldAlert, f as PhoneCall } from "../_libs/lucide-react.mjs";
import { t as LegalPageShell } from "./legal-page-shell-Dj8sOTX8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kenya-hotlines-n8kSZZTr.js
var import_jsx_runtime = require_jsx_runtime();
var hotlines = [
	{
		name: "Emergency services",
		contact: "999 / 112 / 911",
		notes: "Use the number that works in your area from a phone with signal right away."
	},
	{
		name: "Kenya Red Cross",
		contact: "1199",
		notes: "For urgent support and disaster response guidance."
	},
	{
		name: "Befrienders Kenya",
		contact: "Available via local referral and community support channels",
		notes: "Suicide prevention and emotional support resources."
	},
	{
		name: "Gender Violence Recovery Centre (GVRC)",
		contact: "Call local emergency services or your nearest hospital for immediate intake",
		notes: "For survivors of sexual and gender-based violence needing urgent help."
	},
	{
		name: "AAR / hospital emergency departments",
		contact: "Use the nearest emergency department",
		notes: "Go to the closest facility if you cannot wait for a callback."
	},
	{
		name: "Samaritans (international support while in Kenya)",
		contact: "116 123 (if accessible by your carrier) or use a local emergency number",
		notes: "If the line does not connect, use emergency services or the nearest hospital."
	}
];
var emergencySteps = [
	"Call the nearest emergency number immediately.",
	"If you cannot speak safely, go to the nearest hospital or ask someone nearby to call for you.",
	"Keep the phone on speaker if you are with someone and need support while waiting.",
	"If the risk is immediate, do not wait for a callback from an app or website."
];
function KenyaHotlinesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPageShell, {
		label: "Emergency help",
		title: "Kenya crisis hotlines",
		intro: "If you or someone near you is in immediate danger, call emergency services or go to the nearest hospital now.",
		primaryCta: {
			label: "Back to home",
			to: "/"
		},
		secondaryCta: {
			label: "Open chat",
			to: "/chat"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-lg border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4.5 w-4.5 text-secondary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium text-foreground",
						children: "What to do first"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-2 text-xs leading-relaxed text-muted-foreground",
					children: emergencySteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[10px] text-foreground",
							children: index + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
					}, step))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4.5 w-4.5 text-secondary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium text-foreground",
						children: "Direct numbers and services"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: hotlines.map((hotline) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-foreground",
								children: hotline.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-secondary-foreground",
								children: hotline.contact
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
								children: hotline.notes
							})
						]
					}, hotline.name))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This page is informational only. Plight cannot dispatch emergency services. If the situation is urgent, use your phone, local hospital, or nearby responders immediately." })
		})]
	});
}
//#endregion
export { KenyaHotlinesPage as component };
