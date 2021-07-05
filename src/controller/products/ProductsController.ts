import { Request, Response} from 'express';

import AppError from "../../errors/AppError";

import { CreateProductsService } from '../../service/products/CreateProductsService';
import { ProductsRepository } from '../../repositories/Products/Implements/ProductsRepository';


class ProductsController {

    public async create(request: Request, response:Response): Promise<Response>{
        
        const { titulo, descricao, preco, category_id } = request.body;

        const productsRepository = new ProductsRepository();
        const createProduct = new CreateProductsService(productsRepository);


        const product = await createProduct.create({
            titulo,
            descricao,
            preco,
            category_id
        });

        return response.status(200).json(product);

    }

    

}
export { ProductsController}