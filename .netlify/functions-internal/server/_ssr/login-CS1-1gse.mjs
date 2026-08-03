import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Chromium, I as ArrowRight, h as Microscope, y as Mail } from "../_libs/lucide-react.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CardDescription, c as Input, i as CardContent, n as Button, o as CardHeader, r as Card, s as CardTitle, t as AppPageNav } from "./input-SWuTmtIH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CS1-1gse.js
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPageNav, {
			title: "Login",
			backLabel: "Back",
			homeLabel: "Landing"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-6xl px-6 py-10 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-xs",
								children: "Access"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl leading-tight font-semibold tracking-tight text-foreground",
								children: "Sign in to continue your conversations and settings."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
								children: "This page is presentational only. The buttons below are wired as UI affordances and do not implement authentication yet."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "h-11 justify-start rounded-md bg-card px-4 text-sm text-foreground shadow-none",
								variant: "outline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chromium, { className: "h-4 w-4" }), "Continue with Google"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "h-11 justify-start rounded-md bg-card px-4 text-sm text-foreground shadow-none",
								variant: "outline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Microscope, { className: "h-4 w-4" }), "Continue with Microsoft"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: "Email login link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Send a sign-in link to your email address. Functionality is not implemented yet." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs text-muted-foreground",
										htmlFor: "login-email",
										children: "Email address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "login-email",
										type: "email",
										placeholder: "you@example.com"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "w-full rounded-md",
									type: "button",
									children: ["Send magic link", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-lg border border-border bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-xs",
							children: "New here?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg font-medium text-foreground",
							children: "Create a Plight account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground",
							children: "Registration is a separate page so the user flow stays clear and easy to extend later."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/register",
							className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90",
							children: ["Go to registration", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { LoginPage as component };
