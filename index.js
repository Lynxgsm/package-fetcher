const bootbot = require("better-bootbot");
const dotenv = require("dotenv");
const env = require("env-var");

dotenv.config({
  path: ".env",
});

const config = {
  FB_ACCESS_TOKEN: env.get("FB_ACCESS_TOKEN").required().asString(),
  FB_VERIFY_TOKEN: env.get("FB_VERIFY_TOKEN").required().asString(),
  FB_APP_SECRET: env.get("FB_APP_SECRET").required().asString(),
};

const bot = new bootbot({
  accessToken: config.FB_ACCESS_TOKEN,
  verifyToken: config.FB_VERIFY_TOKEN,
  appSecret: config.FB_APP_SECRET,
});

bot.setPersistentMenu([], false);

bot.on("message", (payload, chat) => {
  const text = payload.message.text;
  chat.say({
    attachment: "image",
    url: "http://example.com/image.png",
  });
});

bot.on("postback", (event, chat) => {
  console.log(event, chat);
});
bot.on("data", (event, chat) => {
  console.log(event, chat);
});

bot.app.get("/", (req, res) => {
  res.send({
    hello: "world",
  });
});

bot.start();
