import type { Request, Response } from "express";
import { sendData } from "../../utils/utils.js";
import productService from "./product.service.js";
class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const result = await productService.createProduct(req.body);
      sendData(
        res,
        {
          success: true,
          message: "Product created successfully",
          data: result,
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
  }
  async getProducts(req: Request, res: Response) {
    try {
      const result = await productService.getProducts();
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
  }
  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      const { name, price } = req.body;
      const result = await productService.updateProduct(id, { name, price });

      sendData(
        res,
        {
          success: true,
          message: "Product updated successfully",
          data: result,
        },
        200,
      );
    } catch (error) {
      console.log(error);
      sendData(
        res,
        {
          success: false,
          message: "Failed to update product",
          data: null,
        },
        500,
      );
    }
  }
}
const productController = new ProductController();
export default productController;
