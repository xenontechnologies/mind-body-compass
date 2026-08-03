import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useTheme } from "./theme-provider-DKF0brJ-.mjs";
import { i as Sun, m as Moon } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-DSLF4HH0.js
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle({ className = "" }) {
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		title: theme === "dark" ? "Light theme" : "Dark theme",
		className: `inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground active:bg-pressed ${className}`,
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
	});
}
//#endregion
export { ThemeToggle as t };
