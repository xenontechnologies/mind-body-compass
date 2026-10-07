import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { Mail, ArrowRight } from "lucide-react";
import { AppPageNav } from "../components/app-page-nav";
import { Card, CardContent } from "../components/ui/card";

export const Route = createFileRoute("/check-email")({
  head: () => ({
    meta: [
      { title: "Check your email | Plight" },
      { name: "description", content: "Check your email for the magic login link." },
    ],
  }),
  component: CheckEmailPage,
});

function CheckEmailPage() {
  const location = useLocation();
  // We can pass the email via search params, or just show a generic message
  const searchParams = location.search as { email?: string };
  const email = searchParams.email;

  return (
    <div className="min-h-screen bg-background">
      <AppPageNav title="Verification" backLabel="Back to login" homeLabel="Home" />
      <main className="mx-auto flex w-full max-w-md flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full bg-secondary p-4 text-primary">
          <Mail className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Check your email
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {email ? (
            <>
              We've sent a secure, passwordless magic link to <span className="font-medium text-foreground">{email}</span>. 
              Click the link in that email to instantly log in.
            </>
          ) : (
            "We've sent a secure, passwordless magic link to your email address. Click the link in that email to instantly log in."
          )}
        </p>
        
        <Card className="mt-8 w-full border-border bg-card shadow-none">
          <CardContent className="p-4 text-left text-xs leading-relaxed text-secondary-foreground">
            <p className="font-medium text-foreground mb-1">Didn't receive it?</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Check your spam or junk folder</li>
              <li>Ensure you entered the correct email address</li>
              <li>Wait a minute and try requesting another link</li>
            </ul>
          </CardContent>
        </Card>

        <Link
          to="/login"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Return to login
        </Link>
      </main>
    </div>
  );
}
