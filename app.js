const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/user.routes");
const connectToDB = require("./config/db");
connectToDB();
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.routes");

const app = express();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", userRouter);

// process.on("uncaughtException", (err) => {
//   console.log("Uncaught Exception");
//   console.log(err);
// });

app.listen(3000, () => {
  console.log("Server in running");
});
