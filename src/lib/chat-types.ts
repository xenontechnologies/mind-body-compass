export type ChatMode = "mind" | "health";

export type MessageCard =
  | { kind: "escalation"; reason: string }
  | { kind: "severity"; level: number; explanation: string };

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
  card?: MessageCard | undefined;
};

export type Conversation = {
  id: string;
  mode: ChatMode;
  title: string;
  messages: ChatMessage[];
  updatedAt: number;
};

export const MODES: Record<
  ChatMode,
  { name: string; description: string; disclaimer: string; greeting: string }
> = {
  mind: {
    name: "Mind Support",
    description: "Supportive conversation, coping tools, and a route to a real professional.",
    disclaimer: "This assistant offers support, not therapy or a diagnosis.",
    greeting:
      "Hi — I'm here to listen, at whatever pace suits you. What's been sitting with you today?",
  },
  health: {
    name: "Health Guide",
    description: "Structured symptom questions and a clear 1–5 severity read with next steps.",
    disclaimer:
      "This assistant provides guidance, not diagnosis or treatment. For emergencies, contact emergency services.",
    greeting:
      "Tell me what you're noticing physically — I'll ask a few questions about duration and severity, then give you a clear next step.",
  },
};

export function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
