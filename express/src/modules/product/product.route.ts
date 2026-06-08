import { Router, type NextFunction } from "express";
import productController from "./product.controller.js";
const router = Router();

router.post(
  "/",

  productController.createProduct,
);
router.get("/", productController.getProducts);
router.patch("/:id", productController.updateProduct);

export default router;
