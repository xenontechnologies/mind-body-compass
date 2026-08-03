import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as LegalPageShell } from "./legal-page-shell-Dj8sOTX8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-processing-Bice19w9.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		title: "Controller and processor roles",
		body: "Plight acts as a data controller for website and account operations, and may act as a processor for content you submit into the assistant experience depending on the deployment model and customer relationship."
	},
	{
		title: "Categories of data",
		body: "The platform may process profile information, conversation content, support requests, telemetry, and safety signals needed to operate the service and escalate care."
	},
	{
		title: "Processing purposes",
		body: "Data is processed to provide responses, maintain histories, route escalations, secure the platform, comply with law, and improve product quality."
	},
	{
		title: "Subprocessors and safeguards",
		body: "We may use hosting, analytics, communications, and care-network providers under contracts that require confidentiality, security, and limited use."
	},
	{
		title: "Data subject rights",
		body: "Where applicable, individuals may request access, correction, deletion, restriction, or portability of their data, subject to legal and safety exceptions."
	}
];
function DataProcessingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPageShell, {
		label: "Legal",
		title: "Data Processing",
		intro: "A practical summary of how support, safety, and customer data flows through Plight.",
		primaryCta: {
			label: "Privacy Policy",
			to: "/privacy-policy"
		},
		secondaryCta: {
			label: "Terms of Service",
			to: "/terms-of-service"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-foreground",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-muted-foreground",
					children: item.body
				})]
			}, item.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 rounded-lg border border-border bg-surface p-5 text-xs leading-relaxed text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This page is a build-time policy summary and should be replaced or reviewed by legal counsel before public launch." })
		})]
	});
}
//#endregion
export { DataProcessingPage as component };
