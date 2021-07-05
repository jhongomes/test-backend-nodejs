import { Request, Response }  from 'express';
import { Product } from "../../entities/Product";
import { ProductsRepository } from '../../repositories/Products/Implements/ProductsRepository';

import { DeleteProductsService} from '../../service/products/DeleteProductsService';



class DeleteProductsController {

    public async Delete( request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const productsRepository = new ProductsRepository()
        const deleteProduct = new DeleteProductsService(productsRepository);

        const product = await deleteProduct.execute({
            id,
        })

        return response.send()
    
        
    }

}
export { DeleteProductsController}