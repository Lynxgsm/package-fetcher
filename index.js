const bootbot = require("better-bootbot");

const bot = new bootbot({
  accessToken: "FB_ACCESS_TOKEN",
  verifyToken: "FB_VERIFY_TOKEN",
  appSecret: "FB_APP_SECRET",
});

bot.on("message", (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();
