import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as House, L as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-DSLF4HH0.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Section } from "./section-Crj9FFF7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-shell-Dj8sOTX8.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPageShell({ label, title, intro, children, primaryCta, secondaryCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 border-b border-border bg-nav/95 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Plight"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate text-sm font-medium text-foreground",
						children: title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => window.history.back(),
							className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), "Home"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			label,
			title,
			intro,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: primaryCta.to,
					className: "inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90",
					children: primaryCta.label
				}), secondaryCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: secondaryCta.to,
					className: "inline-flex items-center rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
					children: secondaryCta.label
				}) : null]
			})]
		}) })]
	});
}
//#endregion
export { LegalPageShell as t };
