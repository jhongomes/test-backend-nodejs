import { Router } from "express";

import { DeleteProductsController } from "../controller/products/DeleteProductsController";
import { ListProductsController } from "../controller/products/ListProductsController";

import { ProductsController } from "../controller/products/ProductsController";
import { UpdateProductsController } from "../controller/products/UpdateProductsController";

const productsRouter = Router();
const productsController = new ProductsController();
const listProductsController = new ListProductsController();
const updateProductsControler = new UpdateProductsController();
const deleteProductsController = new DeleteProductsController();




productsRouter.post("/", productsController.create);
productsRouter.get("/", listProductsController.handle);
productsRouter.put("/:id", updateProductsControler.update);
productsRouter.delete("/:id", deleteProductsController.Delete)




export { productsRouter}