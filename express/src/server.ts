import type { Request, Response } from "express";
import express from "express";
import type { Application } from "express-serve-static-core";
import { sendData } from "./utils/utils.js";
import { Pool } from "pg";
import config from "./config/index.js";
console.log(config);

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: config.connectionString,
});

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL
      )
    `);
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

app.get("/", (req: Request, res: Response) => {
  sendData(
    res,
    {
      success: true,
      message: "Hello, World!",
      data: null,
    },
    200,
  );
});
app.post("/products", async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    const result = await pool.query(
      `INSERT INTO products (name, price)
       VALUES ($1, $2)
       RETURNING *`,
      [name, price],
    );

    sendData(
      res,
      {
        success: true,
        message: "Product created successfully",
        data: result.rows[0],
      },
      201,
    );
  } catch (error) {
    console.error(error);

    sendData(
      res,
      {
        success: false,
        message: "Failed to create product",
        data: null,
      },
      500,
    );
  }
});
app.get("/products", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM products`);
    sendData(
      res,
      {
        success: true,
        message: "Products retrieved successfully",
        data: result.rows,
      },
      200,
    );
  } catch (error) {
    console.error(error);
    sendData(
      res,
      {
        success: false,
        message: "Failed to retrieve products",
        data: null,
      },
      500,
    );
  }
});

app.listen(config.port, () => {
  initDB();
  console.log(`Example app listening on port ${config.port}`);
});
