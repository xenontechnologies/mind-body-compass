import { Bot } from "grammy";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token || token === "your_token_here_replace_me") {
  console.error(
    "Error: TELEGRAM_BOT_TOKEN is missing or not set in the .env file.",
  );
  console.error(
    "Please get a token from @BotFather on Telegram and update your .env file.",
  );
  process.exit(1);
}

// Create an instance of the bot
const bot = new Bot(token);

// Handle the /start command
bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome to Mind Body Compass! I am your AI assistant. How can I help you today?",
  );
});

// Handle incoming text messages
bot.on("message:text", async (ctx) => {
  const userMessage = ctx.message.text;
  console.log(`Received message from ${ctx.from.first_name}: ${userMessage}`);

  // Send a temporary "thinking" message or chat action (typing indicator)
  await ctx.replyWithChatAction("typing");

  try {
    // TODO: Connect this to your AI Model (AIMLAPI, OpenAI, etc.)
    // For now, it simply echoes back to prove it works.
    // Example of calling your model:
    // const aiResponse = await myModel.generate(userMessage);
    const aiResponse = `You said: "${userMessage}". (This is where the AI model response will go!)`;

    // Reply to the user
    await ctx.reply(aiResponse);
  } catch (error) {
    console.error("Error processing message:", error);
    await ctx.reply(
      "Sorry, I encountered an error while processing your request.",
    );
  }
});

// Start the bot using long-polling
console.log("Starting Telegram Bot in long-polling mode...");
bot.start();

// Enable graceful stop
process.once("SIGINT", () => bot.stop());
process.once("SIGTERM", () => bot.stop());
