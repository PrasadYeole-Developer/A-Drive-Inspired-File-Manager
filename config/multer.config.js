const multer = require("multer");
const firebaseStorage = require("multer-firebase-storage");
const firebase = require("./firebase.config");
const serviceAccount = require("../drive-92fdc-firebase-adminsdk-dysn6-94e3724b40.json");

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  bucketName: "drive-92fdc.appspot.com",
  unique: true,
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
