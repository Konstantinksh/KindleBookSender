const TelegramApi = require('node-telegram-bot-api')

const token = '5487247194:AAGeuqNhSqFFCnZnJbPM8CZOC-B1GZgspBo';

const bot  = new TelegramApi(token, {polling: true})

bot.on('message', msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, text)
})