import { Bot } from "grammy";
import dotenv from "dotenv";
import { getSystemPrompt } from "../src/lib/prompts";

// Load environment variables from .env file
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token || token === "your_token_here_replace_me") {
  console.error("Error: TELEGRAM_BOT_TOKEN is missing or not set in the .env file.");
  console.error("Please get a token from @BotFather on Telegram and update your .env file.");
  process.exit(1);
}

// In-memory state for Telegram users (resets on bot restart)
type ChatState = {
  mode: "mind" | "health";
  history: { role: "user" | "assistant"; content: string }[];
};

const userStates = new Map<number, ChatState>();

function getUserState(chatId: number): ChatState {
  if (!userStates.has(chatId)) {
    userStates.set(chatId, { mode: "mind", history: [] });
  }
  return userStates.get(chatId)!;
}

// Create an instance of the bot
const bot = new Bot(token);

// Handle the /start command
bot.command("start", (ctx) => {
  const state = getUserState(ctx.chat.id);
  state.history = []; // Clear history on start
  
  ctx.reply(
    "Welcome to Mind Body Compass!\n\nI am currently in 🧠 *Mind Support* mode. I'm here to listen and provide emotional support.\n\nType /mode to switch to ⚕️ *Health Guide* mode.",
    { parse_mode: "Markdown" }
  );
});

// Handle the /mode command
bot.command("mode", (ctx) => {
  const state = getUserState(ctx.chat.id);
  
  if (state.mode === "mind") {
    state.mode = "health";
    state.history = []; // Clear history when switching modes
    ctx.reply("Switched to ⚕️ *Health Guide* mode.\n\nTell me what you're noticing physically, and I'll help evaluate your symptoms.", { parse_mode: "Markdown" });
  } else {
    state.mode = "mind";
    state.history = []; // Clear history when switching modes
    ctx.reply("Switched to 🧠 *Mind Support* mode.\n\nI'm here to listen, at whatever pace suits you. What's been sitting with you today?", { parse_mode: "Markdown" });
  }
});

// Handle incoming text messages
bot.on("message:text", async (ctx) => {
  const userMessage = ctx.message.text;
  const state = getUserState(ctx.chat.id);
  
  console.log(`Received message from ${ctx.from.first_name} (${state.mode} mode)`);

  // Send a temporary "thinking" message or chat action (typing indicator)
  await ctx.replyWithChatAction("typing");

  try {
    // Add user message to history
    state.history.push({ role: "user", content: userMessage });
    
    // Keep history from getting too long (e.g. last 10 messages)
    if (state.history.length > 10) {
      state.history = state.history.slice(state.history.length - 10);
    }

    const systemPrompt = getSystemPrompt(state.mode);

    // Call AIMLAPI to get the AI response
    const response = await fetch(`${process.env.VITE_AIMLAPI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VITE_AIMLAPI_KEY}`
      },
      body: JSON.stringify({
        model: process.env.VITE_AIMLAPI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "developer", content: systemPrompt },
          ...state.history
        ],
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API Response Error Body:", errorBody);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Save AI response to history
    state.history.push({ role: "assistant", content: aiResponse });

    // Format standard markdown (like **bold**) to Telegram's expected markdown (*bold*)
    const telegramFormattedResponse = aiResponse
      .replace(/\*\*(.*?)\*\*/g, '*$1*') 
      .replace(/__(.*?)__/g, '_$1_');

    // Reply to the user with Markdown enabled
    try {
      await ctx.reply(telegramFormattedResponse, { parse_mode: "Markdown" });
    } catch (parseError) {
      // Fallback to plain text if the AI output contains invalid markdown that crashes Telegram
      console.warn("Failed to parse markdown, falling back to plain text:", parseError);
      await ctx.reply(aiResponse);
    }

  } catch (error) {
    console.error("Error processing message:", error);
    // Remove the user message from history if the API call failed so it doesn't get stuck
    state.history.pop();
    await ctx.reply("Sorry, I encountered an error while processing your request. Please try again.");
  }
});

// Start the bot using long-polling
console.log("Starting Telegram Bot in long-polling mode...");
bot.start();

// Enable graceful stop
process.once("SIGINT", () => bot.stop());
process.once("SIGTERM", () => bot.stop());
