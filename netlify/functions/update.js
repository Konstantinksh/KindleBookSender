// exports.handler = async (event) => {
//   console.log("Received an update from Telegram!", event.body);
//   return { statusCode: 200 };
// };

const TelegramApi = require('node-telegram-bot-api')

const token = process.env.BOT_TOKEN;

const bot  = new TelegramApi(token, {polling: true})

bot.on('message', msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, text)
})