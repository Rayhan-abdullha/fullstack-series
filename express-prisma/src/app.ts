import cookieParser from "cookie-parser";
import express, { Application } from "express";
import config from "./config";
import cors from "cors";
import userRoutes from "./modules/users/user.routes";

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
app.use("/api/v1/users", userRoutes);

export default app;
