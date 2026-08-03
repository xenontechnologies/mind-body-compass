import { r as __toESM } from "../_runtime.mjs";
import { m as require_jsx_runtime, p as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as themeInitScript, t as ThemeProvider } from "./theme-provider-DKF0brJ-.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, i as HeadContent, l as createFileRoute, o as createRouter, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CU8KnzsS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BI_B4NaW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Plight — Mental Health Support & Medical Guidance" },
			{
				name: "description",
				content: "Plight pairs a mental health companion with a medical guidance assistant, and escalates to licensed professionals when it matters."
			},
			{
				name: "author",
				content: "Plight"
			},
			{
				property: "og:title",
				content: "Plight — Support that listens. Guidance you can trust."
			},
			{
				property: "og:description",
				content: "Mental health support and medical guidance in one calm, private space, with human escalation when needed."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300..800;1,300..800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeInitScript } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-CIyEX9vW.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Plight — Mental Health Support & Medical Guidance" },
		{
			name: "description",
			content: "Plight pairs Mind Support, a mental health companion, with Health Guide, a symptom triage assistant using a clear 5-point severity scale — and escalates to licensed professionals."
		},
		{
			property: "og:title",
			content: "Plight — Support that listens. Guidance you can trust."
		},
		{
			property: "og:description",
			content: "Two purpose-built assistants in one calm space: emotional support and medical guidance, with human escalation when it matters."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./chat-DZLzFOlw.mjs");
var Route$7 = createFileRoute("/chat")({
	head: () => ({ meta: [
		{ title: "Chat — Mind Support & Health Guide | Plight" },
		{
			name: "description",
			content: "Switch between Mind Support for emotional wellbeing and Health Guide for symptom triage with a 1–5 severity read, plus escalation to licensed professionals."
		},
		{
			property: "og:title",
			content: "Plight Chat — Mind Support & Health Guide"
		},
		{
			property: "og:description",
			content: "One calm chat surface with two assistants: supportive conversation and medical guidance, each with its own history."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./data-processing-Bice19w9.mjs");
var Route$6 = createFileRoute("/data-processing")({
	head: () => ({ meta: [{ title: "Data Processing | Plight" }, {
		name: "description",
		content: "How Plight processes data for support, guidance, safety, and escalation workflows."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./kenya-hotlines-n8kSZZTr.mjs");
var Route$5 = createFileRoute("/kenya-hotlines")({
	head: () => ({ meta: [{ title: "Kenya Crisis Hotlines | Plight" }, {
		name: "description",
		content: "Emergency and crisis hotline guidance for people in Kenya."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./login-CS1-1gse.mjs");
var Route$4 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login | Plight" }, {
		name: "description",
		content: "Login page for Plight."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-policy-BLuQLDpT.mjs");
var Route$3 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: "Privacy Policy | Plight" }, {
		name: "description",
		content: "Privacy policy for Plight's mental health support and medical guidance platform."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./register-CaNC5cEg.mjs");
var Route$2 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "Register | Plight" }, {
		name: "description",
		content: "Registration page for Plight."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./settings-CwCaA_3B.mjs");
var Route$1 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings | Plight" }, {
		name: "description",
		content: "User settings page for Plight."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-of-service-DSi6oRvm.mjs");
var Route = createFileRoute("/terms-of-service")({
	head: () => ({ meta: [{ title: "Terms of Service | Plight" }, {
		name: "description",
		content: "Terms of service for Plight's mental health support and medical guidance platform."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	ChatRoute: Route$7.update({
		id: "/chat",
		path: "/chat",
		getParentRoute: () => Route$9
	}),
	DataProcessingRoute: Route$6.update({
		id: "/data-processing",
		path: "/data-processing",
		getParentRoute: () => Route$9
	}),
	KenyaHotlinesRoute: Route$5.update({
		id: "/kenya-hotlines",
		path: "/kenya-hotlines",
		getParentRoute: () => Route$9
	}),
	LoginRoute: Route$4.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$9
	}),
	PrivacyPolicyRoute: Route$3.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$9
	}),
	RegisterRoute: Route$2.update({
		id: "/register",
		path: "/register",
		getParentRoute: () => Route$9
	}),
	SettingsRoute: Route$1.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$9
	}),
	TermsOfServiceRoute: Route.update({
		id: "/terms-of-service",
		path: "/terms-of-service",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
