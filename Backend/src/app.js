const express = require("express");
const cors = require("cors")
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL (Vite)
    credentials: true,               // VERY IMPORTANT for cookies
  })
);
const cokkieParser = require("cookie-parser");

const authRouter = require("./routes/auth.routes")

app.use(express.json())
app.use(cokkieParser())


app.use("/api/auth",authRouter);

module.exports = app;