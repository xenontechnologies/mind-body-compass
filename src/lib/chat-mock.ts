import type { ChatMessage, ChatMode, MessageCard } from "./chat-types";
import { createId } from "./chat-types";

/**
 * Placeholder response engine.
 *
 * Swap `generateReply` for a real model/backend call later — the message shape
 * (text + optional inline card) is all the UI depends on.
 */

const CRISIS_SIGNALS = [
  "kill myself",
  "end my life",
  "suicide",
  "suicidal",
  "self harm",
  "self-harm",
  "hurt myself",
  "no reason to live",
  "can't go on",
  "cant go on",
  "want to die",
  "give up completely",
  "hopeless",
  "worthless",
];

const EMERGENCY_SIGNALS = [
  "chest pain",
  "can't breathe",
  "cant breathe",
  "trouble breathing",
  "severe bleeding",
  "unconscious",
  "slurred speech",
  "numb on one side",
  "worst headache",
  "coughing blood",
];

const PROMPT_SIGNALS = ["fever", "vomit", "rash", "dizzy", "pain", "cough", "swelling", "headache"];

const MIND_REPLIES = [
  "Thank you for saying that out loud — it takes something to put it into words. What does it feel like in your body when it's at its strongest?",
  "That sounds genuinely heavy, and it makes sense that you're tired. Has anything made it even slightly easier this week, even briefly?",
  "I want to stay with that for a moment rather than rush to advice. When did you first notice this shift?",
  "Let's try something small and concrete: breathe in for 4, hold for 7, out for 8 — three rounds. I'll be here when you're done. How does your chest feel after?",
  "It sounds like part of you is being very hard on yourself. If a friend described exactly this to you, what would you want them to hear?",
  "Noticing it is real progress, even when it doesn't feel like it. Would it help to name one thing you can control today, however small?",
];

const HEALTH_FOLLOWUPS = [
  "Understood. How long has this been going on — hours, days, or longer?",
  "Thanks. On a scale of mild to severe, how intense does it feel right now, and is it constant or coming in waves?",
  "Helpful. Any other symptoms alongside it — fever, shortness of breath, nausea, or anything unusual?",
  "Last question: has anything made it noticeably better or worse, and are you managing to eat, drink, and sleep?",
];

function includesAny(text: string, list: string[]) {
  const lower = text.toLowerCase();
  return list.some((s) => lower.includes(s));
}

function severityFrom(text: string, turns: number): { level: number; explanation: string } {
  if (includesAny(text, EMERGENCY_SIGNALS)) {
    return {
      level: 5,
      explanation:
        "You've described symptoms that can indicate a time-critical condition. This is not something to assess at home.",
    };
  }
  if (includesAny(text, ["worse", "getting worse", "high fever", "severe", "days of"])) {
    return {
      level: 4,
      explanation:
        "The symptoms are escalating rather than settling, and that pattern usually means being seen today rather than waiting.",
    };
  }
  if (includesAny(text, PROMPT_SIGNALS) && turns >= 3) {
    return {
      level: 3,
      explanation:
        "The duration and combination of what you've described warrant a clinician's input, though nothing suggests urgency.",
    };
  }
  if (turns >= 4) {
    return {
      level: 2,
      explanation:
        "Nothing you've described is alarming, but the pattern is worth tracking for the next couple of days.",
    };
  }
  return {
    level: 1,
    explanation:
      "What you've described sounds mild and self-limiting, and is likely to settle with rest and basic self-care.",
  };
}

export function generateReply(mode: ChatMode, userText: string, history: ChatMessage[]): ChatMessage {
  const userTurns = history.filter((m) => m.role === "user").length;
  let text: string;
  let card: MessageCard | undefined;

  if (mode === "mind") {
    if (includesAny(userText, CRISIS_SIGNALS)) {
      text =
        "I'm really glad you told me. What you're describing sounds like more weight than anyone should carry alone, and I'd rather not be the only support in the room right now.";
      card = {
        kind: "escalation",
        reason:
          "Signals of severe distress were detected in this conversation. A licensed professional should be involved.",
      };
    } else {
      text = MIND_REPLIES[Math.min(userTurns, MIND_REPLIES.length - 1)] ?? MIND_REPLIES[0]!;
    }
  } else {
    const emergency = includesAny(userText, EMERGENCY_SIGNALS);
    if (emergency || userTurns >= HEALTH_FOLLOWUPS.length) {
      const { level, explanation } = severityFrom(userText, userTurns + 1);
      text = emergency
        ? "I'm going to stop the questions here — based on what you've described, this needs immediate attention."
        : "Thanks for working through those questions with me. Here's how I'd read what you've described.";
      card = { kind: "severity", level, explanation };
    } else {
      text = HEALTH_FOLLOWUPS[userTurns] ?? HEALTH_FOLLOWUPS[0]!;
    }
  }

  return { id: createId(), role: "assistant", text, createdAt: Date.now(), ...(card ? { card } : {}) };
}
