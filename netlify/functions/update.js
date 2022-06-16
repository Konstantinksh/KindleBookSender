const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  console.log("Received an update from Telegram!", message);

  await sendMessage(message.chat.id, "I got your message!");

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