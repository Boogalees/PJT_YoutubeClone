import express from "express";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { localsMiddleware } from "./middlewares";
import dotenv from "dotenv";
dotenv.config();

import "./models/Video"
import "./models/Comment"
const PORT = process.env.PORT || 4000;

const app = express();
const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

//app.use("/", globalRouter);

app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.listen(PORT, handleListening);

export default app;