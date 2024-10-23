const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dcjz3we14",
  api_key: "632432717258654",
  api_secret: "xmTxJ5TzMFDuxvQP2GLZhvAT7ho",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}



const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
