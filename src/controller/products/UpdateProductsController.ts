import { Request, Response} from "express";
import { ProductsRepository } from "../../repositories/Products/Implements/ProductsRepository";
import { UpdateProuctsService } from "../../service/products/UpdateProductsService";


class UpdateProductsController {
    public async update(request:Request, response:Response): Promise<Response>{
        const { id } = request.params;
        const { titulo, descricao, preco } = request.body;


        const productsRepository = new ProductsRepository();
        const updateProduct = new UpdateProuctsService(productsRepository);


        const product = await updateProduct.execute({
            titulo,
            descricao,
            preco
        });

        return response.json(product)
    }
}
export { UpdateProductsController}