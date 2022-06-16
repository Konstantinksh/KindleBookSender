const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");
const sendMail = require("../../sendBook");
const getLinkToFile = require("../../getLinkToFile");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  console.log("Received an update from Telegram!", message);

  const textToMatch = message.text || message.caption || 'not a text message';  
  const { command, botName, extra } = messageParts(textToMatch);

  if (message.document) {
    let fileToSend = message.document;
    fileToSend.name_ru = message.caption || message.text;
    const linkToFile = await getLinkToFile(fileToSend);
    await sendMessage(message.chat.id, `${linkToFile} , ${fileToSend.name_ru}`);
  }

  if (botName === "Alfred_thehelper_bot" || botName === null) {
    switch (command) {
      case "echo":
        await sendMessage(message.chat.id, extra);
        break;
      case "sendMail":
        sendMail();
        await sendMessage(message.chat.id, "Trying to send Mail");
        break;
      default:
        await sendMessage(message.chat.id, "I don't understand that command.");
    }
  }

  return { statusCode: 200 };
}

// if (JSON.parse(event.body).message) {
//   await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
//     chat_id: JSON.parse(event.body).message.chat.id,
//     text: "I got your message!",
//   });


//     if (JSON.parse(event.body).message.document) {

//       const fileID = JSON.parse(event.body).message.document.file_id

//       if (fileID) {
//         const fileToDownload = await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile`, {
//           file_id: fileID
//         });

//         console.log(fileToDownload.data.result)

//         await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
//           chat_id: JSON.parse(event.body).message.chat.id,
//           text: `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${fileToDownload.data.result.file_path}`,
//         });
//       }
//     }
// }