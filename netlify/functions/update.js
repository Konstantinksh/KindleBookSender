const axios = require("axios").default;

exports.handler = async (event) => {
  
  if (JSON.parse(event.body).message) {
    console.log("Received an update from Telegram!", JSON.parse(event.body));

    const fileID = JSON.parse(event.body).message.document.file_id

    await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      chat_id: JSON.parse(event.body).message.chat.id,
      text: "I got your message!",
    });

    if (fileID) {
      const fileToDownload = await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile`, {
        file_id: fileID
      });

      console.log(fileToDownload.data.result)

      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id: JSON.parse(event.body).message.chat.id,
        text: `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${fileToDownload.data.result.file_path}`,
      });
    } else {
      console.log('no file for download')
    }
  }

  return { statusCode: 200 };
}