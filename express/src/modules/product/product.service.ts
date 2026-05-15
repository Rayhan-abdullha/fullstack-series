import { pool } from "../../db/index.js";

class ProductService {
  async createProduct(payload: { name: string; price: number }) {
    const { name, price } = payload;

    const result = await pool.query(
      `INSERT INTO products (name, price)
                       VALUES ($1, $2)
                       RETURNING *`,
      [name, price],
    );
    return result.rows[0];
  }
  async getProducts() {
    const result = await pool.query(`SELECT * FROM products`);
    return result;
  }
  async updateProduct(id: string, payload: { name: string; price: number }) {
    const { name, price } = payload;
    const result = await pool.query(
      `UPDATE products
           SET name = $1, price = $2
           WHERE id = $3
           RETURNING *`,
      [name, price, id],
    );

    if (result.rows.length === 0) {
      throw new Error("Product not found");
    }
    return result.rows[0];
  }
}
const productService = new ProductService();
export default productService;
