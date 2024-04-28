const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
const route=require("./app/route")
app.use(route)
app.listen(port, () => console.log(`Example app listening on port ${port}!`)

           
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// const path = require("path");
// const http = require("http");
// const cron = require("node-cron");
// const dotenv = require("dotenv");
// dotenv.config();
// const fileUpload = require('express-fileupload');
// const server = http.createServer(app);
// const PORT = process.env.PORT || 3002;
// const web=process.env.PROJECT_NAME
// app.use(bodyParser.json());
// const io = require("socket.io")(server, { cors: { origin: "*" } });
// app.use(cors());

// app.use(bodyParser.json({ limit: "100mb" }));
// app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
// app.use(express.json());

// app.use(function (req, res, next) {
//   // CORS headers
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

// app.set("view engine", "ejs");

// app.set("trust proxy", true);

// app.use("/public",express.static(path.join(__dirname, "public")));

// require("./app/routes/v0")(app);
// app.use(express.static(path.join(__dirname, "public/frontend")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/frontend/index.html'));
//  });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
//   });
