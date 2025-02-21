const Firebase = require("firebase-admin");
const serviceAccount = require("../drive-92fdc-firebase-adminsdk-dysn6-94e3724b40.json");

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: "drive-92fdc.appspot.com",
});

module.exports = Firebase;
