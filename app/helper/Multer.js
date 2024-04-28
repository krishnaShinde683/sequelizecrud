const multer = require("multer");
const fs = require("fs");
const uuid = require("uuid");

var userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./public/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true,
      });
    }
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    let fileExt = file.originalname.split(".");
    cb(null, uuid.v1() + "." + fileExt[1]);
  },
});
const userUpload = multer({ storage: userStorage });


module.exports = { userUpload };
