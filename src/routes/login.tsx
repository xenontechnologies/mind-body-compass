import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Chrome, Mail, Microscope } from "lucide-react";
import { AppPageNav } from "../components/app-page-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | Plight" },
      { name: "description", content: "Login page for Plight." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <AppPageNav title="Login" backLabel="Back" homeLabel="Landing" />
      <main className="mx-auto w-full max-w-6xl px-6 py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <section className="space-y-6">
            <div>
              <p className="label-xs">Access</p>
              <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-foreground">
                Sign in to continue your conversations and settings.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                This page is presentational only. The buttons below are wired as UI affordances and
                do not implement authentication yet.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button onClick={() => navigate({ to: "/chat" })} className="h-11 justify-start rounded-md bg-card px-4 text-sm text-foreground shadow-none" variant="outline">
                <Chrome className="h-4 w-4" />
                Continue with Google
              </Button>
              <Button onClick={() => navigate({ to: "/chat" })} className="h-11 justify-start rounded-md bg-card px-4 text-sm text-foreground shadow-none" variant="outline">
                <Microscope className="h-4 w-4" />
                Continue with Microsoft
              </Button>
            </div>

            <Card className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Email login link</CardTitle>
                <CardDescription>
                  Send a sign-in link to your email address. Functionality is not implemented yet.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground" htmlFor="login-email">
                    Email address
                  </label>
                  <Input id="login-email" type="email" placeholder="you@example.com" />
                </div>
                <Button onClick={() => navigate({ to: "/chat" })} className="w-full rounded-md" type="button">
                  Send magic link
                  <Mail className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </section>

          <aside className="rounded-lg border border-border bg-surface p-6">
            <p className="label-xs">New here?</p>
            <h3 className="mt-3 text-lg font-medium text-foreground">Create a Plight account</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Registration is a separate page so the user flow stays clear and easy to extend later.
            </p>
            <Link
              to="/register"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
            >
              Go to registration
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
