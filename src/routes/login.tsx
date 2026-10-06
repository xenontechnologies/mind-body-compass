import { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Chrome, Mail, Loader2 } from "lucide-react";
import { AppPageNav } from "../components/app-page-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";

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
  const [email, setEmail] = useState("");
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingMagicLink, setIsLoadingMagicLink] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate({ to: "/chat" });
      }
    });

    // Listen for login events (like when returning from Google OAuth or Magic Link)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate({ to: "/chat" });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    setIsLoadingGoogle(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/chat`,
      },
    });
    if (error) {
      toast.error(error.message);
      setIsLoadingGoogle(false);
    }
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setIsLoadingMagicLink(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/chat`,
      },
    });
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Magic link sent! Check your email.");
    }
    setIsLoadingMagicLink(false);
  };

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
                Log in securely using Google or receive a magic link directly to your email.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-1">
              <Button onClick={handleGoogleLogin} disabled={isLoadingGoogle || isLoadingMagicLink} className="h-11 justify-start rounded-md bg-card px-4 text-sm text-foreground shadow-none" variant="outline">
                {isLoadingGoogle ? <Loader2 className="h-4 w-4 animate-spin" /> : <Chrome className="h-4 w-4" />}
                Continue with Google
              </Button>
            </div>

            <Card className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Email login link</CardTitle>
                <CardDescription>
                  Send a secure, passwordless sign-in link to your email address.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMagicLink} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground" htmlFor="login-email">
                      Email address
                    </label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="you@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoadingMagicLink || isLoadingGoogle}
                      required
                    />
                  </div>
                  <Button disabled={isLoadingMagicLink || isLoadingGoogle} className="w-full rounded-md" type="submit">
                    {isLoadingMagicLink ? "Sending link..." : "Send magic link"}
                    {!isLoadingMagicLink && <Mail className="h-4 w-4 ml-2" />}
                  </Button>
                </form>
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
