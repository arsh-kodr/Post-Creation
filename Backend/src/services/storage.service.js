var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadfile(file, fileName) {
  try {
    const result = await imagekit.upload({
      file,
      fileName,
    });
    return result;
  } catch (error) {
    console.log("Upload Failed ", error);
  }
}

async function deletefile(fileId) {
  try {
    const result = await imagekit.deleteFile(fileId);
    return result;
  } catch (error) {
    console.log("Delete Failed ", error);
    return null;
  }
}

module.exports = { uploadfile, deletefile };
