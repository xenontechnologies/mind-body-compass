import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Chrome, Mail } from "lucide-react";
import { AppPageNav } from "../components/app-page-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register | Plight" },
      { name: "description", content: "Registration page for Plight." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppPageNav title="Create account" backLabel="Back" homeLabel="Landing" />
      <main className="mx-auto w-full max-w-6xl px-6 py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <section className="space-y-6">
            <div>
              <p className="label-xs">Registration</p>
              <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-foreground">
                Set up your account and preferences.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                This page is intentionally static for now. It shows the intended layout and the auth
                entry points without wiring backend logic.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-1">
              <Button className="h-11 justify-start rounded-md bg-card px-4 text-sm text-foreground shadow-none" variant="outline">
                <Chrome className="h-4 w-4" />
                Sign up with Google
              </Button>
            </div>

            <Card className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Email registration link</CardTitle>
                <CardDescription>
                  Enter your email and we’ll send a registration link later.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground" htmlFor="register-email">
                    Email address
                  </label>
                  <Input id="register-email" type="email" placeholder="you@example.com" />
                </div>
                <Button className="w-full rounded-md" type="button">
                  Send registration link
                  <Mail className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </section>

          <aside className="rounded-lg border border-border bg-surface p-6">
            <p className="label-xs">Already have an account?</p>
            <h3 className="mt-3 text-lg font-medium text-foreground">Go back to login</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Keep the auth paths separate so the later implementation can attach the right logic to
              each flow.
            </p>
            <Link
              to="/login"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
            >
              Go to login
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
