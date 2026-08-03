import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-Crj9FFF7.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, label, title, intro, children, bordered = true, surface = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `${bordered ? "border-t border-border" : ""} ${surface ? "bg-surface" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-16 md:py-24",
			children: [(label || title || intro) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs",
						children: label
					}),
					title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl leading-snug font-semibold tracking-tight text-foreground md:text-3xl",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: intro
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: label || title || intro ? "mt-10 md:mt-12" : "",
				children
			})]
		})
	});
}
//#endregion
export { Section as t };
