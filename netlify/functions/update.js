const axios = require("axios").default;

exports.handler = async (event) => {
  
  console.log("Received an update from Telegram!", event.body);

  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    chat_id: JSON.parse(event.body).message.chat.id,
    text: "I got your message!" + `${JSON.parse(event.body).message.chat.id}`,
  });

  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile`, {
    file_id: AgACAgIAAxkBAAMVYqn86eifM0LAmiW4jfwFzIo-R1wAAqC9MRtZylBJmnucL_3_8gcBAAMCAANtAAMkBA
  });

  return { statusCode: 200 };
}


