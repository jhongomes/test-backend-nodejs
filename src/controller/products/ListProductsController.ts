import { Request, Response } from "express";
import { ProductsRepository } from "../../repositories/Products/Implements/ProductsRepository";
import { ListProductsService } from "../../service/products/ListProductsService";

class  ListProductsController {
    async handle(request: Request, response: Response){
        const productsRepository = new ProductsRepository()
        const listProductsService = new ListProductsService(productsRepository);

        const products = await listProductsService.execute();

        
        return response.json(products);
    }

}

export { ListProductsController}