import express from "express";
import type { Application, NextFunction } from "express-serve-static-core";
import productRoute from "../modules/product/product.route.js";
import type { Request, Response } from "express-serve-static-core";
import { sendData } from "../utils/utils.js";
const app: Application = express();
app.get(
  "/health",
  function () {
    return function (req: Request, res: Response, next: NextFunction) {
      console.log("Middleware for POST /api/v1/products");
      next();
    };
  },
  (req: Request, res: Response) => {
    sendData(
      res,
      {
        success: true,
        message: "Hello, World!",
        data: null,
      },
      200,
    );
  },
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRoute);

export default app;
