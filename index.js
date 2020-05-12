const Telegraf = require("telegraf");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const bot = new Telegraf("1240633700:AAFMcBpugVrQUiXVQY-jlm6iwcDwrOIl0u0");
bot.use(Telegraf.log());
bot.start((ctx) => ctx.reply("Welcome!"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.command("echo", (ctx) => ctx.reply("Echo"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.command("simple", (ctx) => {
  return ctx.replyWithHTML("<b>Coke</b> or <i>Pepsi?</i>", Extra.markup(Markup.keyboard(["Coke", "Pepsi"])));
});

bot.launch();
