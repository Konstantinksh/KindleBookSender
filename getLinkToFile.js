const axios = require("axios").default;

module.exports = async (file) => {
  const fileToDownload = await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile`, {
    file_id: file.file_id
  });

  return `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${fileToDownload.data.result.file_path}`;
}