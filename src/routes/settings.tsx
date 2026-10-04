import { createFileRoute, Link } from "@tanstack/react-router";
import { AppPageNav } from "../components/app-page-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";

const settingsSections = [
  {
    title: "Profile",
    description: "Edit your name, email, and display preferences.",
    fields: ["Full name", "Email address", "Display name"],
  },
  {
    title: "Security",
    description: "Manage passwords, active sessions, and account protection.",
    fields: ["Password", "Two-factor authentication", "Active devices"],
  },
  {
    title: "Notifications",
    description: "Choose reminders, check-ins, and product updates.",
    fields: ["Email reminders", "Check-in cadence", "Marketing emails"],
  },
  {
    title: "Privacy",
    description: "Control history, downloads, and data visibility.",
    fields: ["Conversation history", "Download data", "Delete account"],
  },
  {
    title: "Accessibility and appearance",
    description: "Adjust comfort settings for the interface.",
    fields: ["Theme", "Text size", "Reduced motion"],
  },
];

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings | Plight" },
      { name: "description", content: "User settings page for Plight." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppPageNav title="Settings" backLabel="Back" homeLabel="Landing" />
      <main className="mx-auto w-full max-w-6xl px-6 py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-lg border border-border bg-surface p-5 lg:sticky lg:top-24 self-start">
            <p className="label-xs">Account</p>
            <nav className="mt-4 space-y-2 text-xs text-secondary-foreground">
              {settingsSections.map((section) => (
                <a
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-hover hover:text-foreground"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            <Card id="profile" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Profile</CardTitle>
                <CardDescription>Basic information tied to your account.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Input placeholder="Full name" />
                <Input placeholder="Email address" type="email" />
                <Input placeholder="Display name" />
                <div className="rounded-md border border-border bg-card px-3 py-2.5 text-xs text-muted-foreground">
                  Account status: active
                </div>
              </CardContent>
            </Card>

            <Card id="security" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Security</CardTitle>
                <CardDescription>Account protection and session control.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <SettingRow label="Password" value="Change password" />
                <SettingRow label="Two-factor authentication" value="Enabled after setup" />
                <SettingRow label="Active devices" value="Manage signed-in sessions" />
              </CardContent>
            </Card>

            <Card id="notifications" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Notifications</CardTitle>
                <CardDescription>Choose what reminders and updates you receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <ToggleRow label="Email reminders" defaultChecked />
                <ToggleRow label="Check-in cadence" defaultChecked />
                <ToggleRow label="Marketing emails" defaultChecked={false} />
              </CardContent>
            </Card>

            <Card id="privacy" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Privacy</CardTitle>
                <CardDescription>Control your data and conversation footprint.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <SettingRow label="Conversation history" value="Keep history until deleted" />
                <SettingRow label="Download data" value="Export available later" />
                <SettingRow label="Delete account" value="Permanent removal flow placeholder" />
              </CardContent>
            </Card>

            <Card id="accessibility-and-appearance" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Accessibility and appearance</CardTitle>
                <CardDescription>Interface comfort settings and theme controls.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <div className="flex items-center justify-between gap-4 rounded-md border border-border px-3 py-2.5">
                  <div>
                    <p className="font-medium text-foreground">Theme</p>
                    <p className="text-muted-foreground">Use the app-wide toggle in the top bar.</p>
                  </div>
                  <span className="rounded-md border border-border bg-card px-2 py-1 text-[11px] text-muted-foreground">
                    System aware
                  </span>
                </div>
                <SettingRow label="Text size" value="Default" />
                <SettingRow label="Reduced motion" value="Available in a later update" />
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button className="rounded-md">Save changes</Button>
              <Button className="rounded-md" variant="outline">
                Reset
              </Button>
              <Link
                to="/login"
                className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5">
      <div>
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

function ToggleRow({ label, defaultChecked }: { label: string; defaultChecked: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5">
      <div>
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-muted-foreground">Placeholder switch control</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
