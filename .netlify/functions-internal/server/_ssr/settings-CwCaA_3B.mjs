import { r as __toESM } from "../_runtime.mjs";
import { m as require_jsx_runtime, p as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as CardDescription, c as Input, i as CardContent, n as Button, o as CardHeader, r as Card, s as CardTitle, t as AppPageNav } from "./input-SWuTmtIH.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CwCaA_3B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var settingsSections = [
	{
		title: "Profile",
		description: "Edit your name, email, and display preferences.",
		fields: [
			"Full name",
			"Email address",
			"Display name"
		]
	},
	{
		title: "Security",
		description: "Manage passwords, active sessions, and account protection.",
		fields: [
			"Password",
			"Two-factor authentication",
			"Active devices"
		]
	},
	{
		title: "Notifications",
		description: "Choose reminders, check-ins, and product updates.",
		fields: [
			"Email reminders",
			"Check-in cadence",
			"Marketing emails"
		]
	},
	{
		title: "Privacy",
		description: "Control history, downloads, and data visibility.",
		fields: [
			"Conversation history",
			"Download data",
			"Delete account"
		]
	},
	{
		title: "Accessibility and appearance",
		description: "Adjust comfort settings for the interface.",
		fields: [
			"Theme",
			"Text size",
			"Reduced motion"
		]
	}
];
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppPageNav, {
			title: "Settings",
			backLabel: "Back",
			homeLabel: "Landing"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-6xl px-6 py-10 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[280px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs",
						children: "Account"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-4 space-y-2 text-xs text-secondary-foreground",
						children: settingsSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
							className: "block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-hover hover:text-foreground",
							children: section.title
						}, section.title))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: "Profile"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Basic information tied to your account." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "grid gap-4 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Full name" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Email address",
										type: "email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Display name" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-md border border-border bg-card px-3 py-2.5 text-xs text-muted-foreground",
										children: "Account status: active"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: "Security"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Account protection and session control." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-4 text-xs text-secondary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Password",
										value: "Change password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Two-factor authentication",
										value: "Enabled after setup"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Active devices",
										value: "Manage signed-in sessions"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: "Notifications"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Choose what reminders and updates you receive." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-4 text-xs text-secondary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Email reminders",
										defaultChecked: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Check-in cadence",
										defaultChecked: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Marketing emails",
										defaultChecked: false
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: "Privacy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Control your data and conversation footprint." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-4 text-xs text-secondary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Conversation history",
										value: "Keep history until deleted"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Download data",
										value: "Export available later"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Delete account",
										value: "Permanent removal flow placeholder"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-border shadow-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: "Accessibility and appearance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Interface comfort settings and theme controls." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "space-y-4 text-xs text-secondary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4 rounded-md border border-border px-3 py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-foreground",
											children: "Theme"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Use the app-wide toggle in the top bar."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md border border-border bg-card px-2 py-1 text-[11px] text-muted-foreground",
											children: "System aware"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Text size",
										value: "Default"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
										label: "Reduced motion",
										value: "Available in a later update"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "rounded-md",
									children: "Save changes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "rounded-md",
									variant: "outline",
									children: "Reset"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "inline-flex items-center rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground",
									children: "Back to login"
								})
							]
						})
					]
				})]
			})
		})]
	});
}
function SettingRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: value
		})] })
	});
}
function ToggleRow({ label, defaultChecked }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Placeholder switch control"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked })]
	});
}
//#endregion
export { SettingsPage as component };
