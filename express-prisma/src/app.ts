import cookieParser from "cookie-parser";
import express, { Application } from "express";
import config from "./config";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: config.appUrl,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, World!");
});
export default app;
