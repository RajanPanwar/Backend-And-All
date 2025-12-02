import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser()); // used so that our server can access and as well as set cookies in user's browser
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //extended means you can give object inside objects
app.use(express.static("Public "));

export default express;
