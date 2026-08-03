import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as LegalPageShell } from "./legal-page-shell-Dj8sOTX8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-of-service-DSi6oRvm.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Acceptable use",
		body: ["Use Plight lawfully and respectfully. Do not attempt to exploit the service, disrupt availability, or submit content that is illegal, abusive, or harmful.", "The platform is intended to support wellbeing and guidance. It is not designed to replace licensed clinical care or emergency services."]
	},
	{
		title: "Medical and safety limits",
		body: ["Health Guide provides general guidance and a severity scale, not diagnosis or treatment.", "Mind Support provides supportive conversation and escalation to human help when needed, but it is not therapy and cannot guarantee immediate professional response everywhere."]
	},
	{
		title: "Accounts and access",
		body: ["You are responsible for keeping your account credentials secure and for activity that occurs under your account.", "We may suspend or limit access if we detect abuse, safety risks, or violations of these terms."]
	},
	{
		title: "Intellectual property",
		body: ["The product, design system, branding, and content are owned by Plight or its licensors and are protected by applicable law.", "You may not copy, resell, or distribute the service content without permission, except where permitted by law."]
	},
	{
		title: "Liability",
		body: ["Plight is provided on an 'as is' and 'as available' basis. To the extent allowed by law, we disclaim liability for indirect or consequential damages.", "Nothing in these terms limits rights that cannot legally be excluded."]
	}
];
function TermsOfServicePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPageShell, {
		label: "Legal",
		title: "Terms of Service",
		intro: "The rules that govern use of Plight's website and product in the current build.",
		primaryCta: {
			label: "Read Privacy Policy",
			to: "/privacy-policy"
		},
		secondaryCta: {
			label: "Data Processing Addendum",
			to: "/data-processing"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: sections.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `rounded-lg border p-5 ${index % 2 === 0 ? "border-border bg-card" : "border-border bg-surface"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-foreground",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground",
					children: section.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
				})]
			}, section.title))
		})
	});
}
//#endregion
export { TermsOfServicePage as component };
