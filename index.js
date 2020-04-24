const Telegraf = require("telegraf");

const bot = new Telegraf("1240633700:AAFMcBpugVrQUiXVQY-jlm6iwcDwrOIl0u0");
bot.use(Telegraf.log());
bot.start((ctx) => ctx.reply("Welcome!"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.command("echo", (ctx) => ctx.reply("Echo"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
console.log(bot);
bot.launch();
