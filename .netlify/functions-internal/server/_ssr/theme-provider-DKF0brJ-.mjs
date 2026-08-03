import { r as __toESM } from "../_runtime.mjs";
import { m as require_jsx_runtime, p as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-provider-DKF0brJ-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "plight-theme";
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	setTheme: () => {},
	toggleTheme: () => {}
});
var themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		let stored = null;
		try {
			stored = localStorage.getItem(STORAGE_KEY);
		} catch {
			stored = null;
		}
		if (stored === "dark" || stored === "light") setThemeState(stored);
		else setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light");
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.style.colorScheme = theme;
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		try {
			localStorage.setItem(STORAGE_KEY, next);
		} catch {}
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => {
		setThemeState((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			try {
				localStorage.setItem(STORAGE_KEY, next);
			} catch {}
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			setTheme,
			toggleTheme
		},
		children
	});
}
function useTheme() {
	return (0, import_react.useContext)(ThemeContext);
}
//#endregion
export { themeInitScript as n, useTheme as r, ThemeProvider as t };
