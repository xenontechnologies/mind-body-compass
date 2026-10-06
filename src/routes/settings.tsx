import { useState, useEffect } from "react";
import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";
import { AppPageNav } from "../components/app-page-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { useTheme } from "../components/theme-provider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../components/ui/select";
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
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: SettingsPage,
});

function SettingsPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState({ full_name: "", display_name: "" });
  const [settings, setSettings] = useState({
    email_reminders: true,
    check_in_cadence: "weekly",
    marketing_emails: false,
    conversation_history: true,
    theme: "system",
    text_size: "default",
    reduced_motion: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      if (session?.user?.id) {
        // Load profile
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
        if (profileData) setProfile({ full_name: profileData.full_name || "", display_name: profileData.display_name || "" });

        // Load settings
        const { data: settingsData } = await supabase
          .from("user_settings")
          .select("*")
          .eq("id", session.user.id)
          .single();
        if (settingsData) {
          setSettings(settingsData);
          // Apply initial text size
          applyTextSize(settingsData.text_size);
        }
      }
    }
    loadData();
  }, []);

  const applyTextSize = (size: string) => {
    document.documentElement.classList.remove("text-sm", "text-base", "text-lg");
    if (size === "small") document.documentElement.style.fontSize = "14px";
    else if (size === "large") document.documentElement.style.fontSize = "18px";
    else document.documentElement.style.fontSize = "16px";
  };

  const handleThemeChange = (newTheme: string) => {
    setSettings({ ...settings, theme: newTheme });
    if (newTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    } else {
      setTheme(newTheme as "light" | "dark");
    }
  };

  const handleTextSizeChange = (newSize: string) => {
    setSettings({ ...settings, text_size: newSize });
    applyTextSize(newSize);
  };

  const handleSave = async () => {
    if (!session?.user?.id) return;
    setIsSaving(true);
    
    // Update profile
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: session.user.id,
      full_name: profile.full_name,
      display_name: profile.display_name,
      updated_at: new Date().toISOString()
    });

    if (profileError) {
      toast.error(`Profile Error: ${profileError.message}`);
      setIsSaving(false);
      return;
    }

    // Update settings
    const { error: settingsError } = await supabase.from("user_settings").upsert({
      id: session.user.id,
      ...settings,
      updated_at: new Date().toISOString()
    });

    if (settingsError) {
      toast.error(`Settings Error: ${settingsError.message}`);
      setIsSaving(false);
      return;
    }

    setIsSaving(false);
    toast.success("Settings saved successfully!");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

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
                <Input 
                  placeholder="Full name" 
                  value={profile.full_name} 
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })} 
                />
                <Input 
                  placeholder="Email address" 
                  type="email" 
                  value={session?.user?.email || ""} 
                  disabled 
                />
                <Input 
                  placeholder="Display name" 
                  value={profile.display_name} 
                  onChange={(e) => setProfile({ ...profile, display_name: e.target.value })} 
                />
                <div className="rounded-md border border-border bg-card px-3 py-2.5 text-xs text-muted-foreground flex items-center h-10">
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
                <SettingRow label="Two-factor authentication" value="Setup available in Supabase dashboard" />
                <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5">
                  <div>
                    <p className="font-medium text-foreground">Sign Out</p>
                    <p className="text-muted-foreground">Log out of your current session on this device.</p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={handleSignOut}>Log out</Button>
                </div>
              </CardContent>
            </Card>

            <Card id="notifications" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Notifications</CardTitle>
                <CardDescription>Choose what reminders and updates you receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <ToggleRow 
                  label="Email reminders" 
                  checked={settings.email_reminders} 
                  onCheckedChange={(c) => setSettings({ ...settings, email_reminders: c })} 
                />
                <ToggleRow 
                  label="Marketing emails" 
                  checked={settings.marketing_emails} 
                  onCheckedChange={(c) => setSettings({ ...settings, marketing_emails: c })} 
                />
              </CardContent>
            </Card>

            <Card id="privacy" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Privacy</CardTitle>
                <CardDescription>Control your data and conversation footprint.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <ToggleRow 
                  label="Conversation history" 
                  checked={settings.conversation_history} 
                  onCheckedChange={(c) => setSettings({ ...settings, conversation_history: c })} 
                />
                <SettingRow label="Download data" value="Export available later" />
              </CardContent>
            </Card>

            <Card id="accessibility-and-appearance" className="border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">Accessibility and appearance</CardTitle>
                <CardDescription>Interface comfort settings and theme controls.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-secondary-foreground">
                <SelectRow 
                  label="Theme" 
                  value={settings.theme} 
                  options={[
                    { value: "system", label: "System aware" },
                    { value: "light", label: "Light" },
                    { value: "dark", label: "Dark" }
                  ]}
                  onValueChange={handleThemeChange} 
                />
                <SelectRow 
                  label="Text size" 
                  value={settings.text_size} 
                  options={[
                    { value: "small", label: "Small" },
                    { value: "default", label: "Default" },
                    { value: "large", label: "Large" }
                  ]}
                  onValueChange={handleTextSizeChange} 
                />
                <ToggleRow 
                  label="Reduced motion" 
                  checked={settings.reduced_motion} 
                  onCheckedChange={(c) => setSettings({ ...settings, reduced_motion: c })} 
                />
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleSave} disabled={isSaving} className="rounded-md">
                {isSaving ? "Saving..." : "Save changes"}
              </Button>
              <Button className="rounded-md" variant="outline" onClick={() => window.location.reload()}>
                Reset
              </Button>
              <Link
                to="/chat"
                className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
              >
                Back to chat
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

function ToggleRow({ label, checked, onCheckedChange }: { label: string; checked: boolean; onCheckedChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5">
      <div>
        <p className="font-medium text-foreground">{label}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

function SelectRow({ 
  label, 
  value, 
  options, 
  onValueChange 
}: { 
  label: string; 
  value: string; 
  options: { value: string; label: string }[]; 
  onValueChange: (value: string) => void 
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-3 py-2.5">
      <div>
        <p className="font-medium text-foreground">{label}</p>
      </div>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[140px] h-8 text-xs">
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value} className="text-xs">
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
