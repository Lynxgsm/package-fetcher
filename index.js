const bootbot = require("better-bootbot");
const dotenv = require("dotenv");
const env = require("env-var");
const { createDirectory, fetchPackage } = require("./src/modules/os");

dotenv.config({
  path: ".env",
});

const config = {
  FB_ACCESS_TOKEN: env.get("FB_ACCESS_TOKEN").required().asString(),
  FB_VERIFY_TOKEN: env.get("FB_VERIFY_TOKEN").required().asString(),
  FB_APP_SECRET: env.get("FB_APP_SECRET").required().asString(),
  PORT: env.get("PORT").required().asInt(),
};

const bot = new bootbot({
  accessToken: config.FB_ACCESS_TOKEN,
  verifyToken: config.FB_VERIFY_TOKEN,
  appSecret: config.FB_APP_SECRET,
});

bot.on("message", (payload, chat) => {
  const text = payload.message.text;

  chat.say(
    text
      .split(",")
      .map((item) => {
        item = item.trim();
        createDirectory(item);
        fetchPackage(item);
        return `fetched package ${item.trim()}`;
      })
      .join("\n")
  );
});

const sendFileAttachmentToMessenger = (chat) => {
  // exemple
  try {
    chat.say({
      attachment: "file",
      url: "https://c161-197-159-158-11.ngrok.io/object",
    });
  } catch (error) {
    chay.say(error);
  }
};

bot.app.get("/object", (req, res) => {
  res.sendFile(__dirname + "/node_modules.zip");
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

bot.start(config.PORT);
