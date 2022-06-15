const axios = require("axios").default;

exports.handler = async (event) => {
  
  console.log("Received an update from Telegram!", JSON.parse(event.body));

  const fileID = JSON.parse(event.body).message.document.file_id

  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    chat_id: JSON.parse(event.body).message.chat.id,
    text: "I got your message!"+`${fileID}`,
  });

  const fileToDownload = await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile`, {
    file_id: fileID
  });

  console.log(fileToDownload)

  return { statusCode: 200 };
}