import { getCustomRepository } from "typeorm";
import IProductsRepository from "../../repositories/Products/IProductsRepository";
import { ProductsRepository} from "../../repositories/Products/Implements/ProductsRepository";

class ListProductsService {
    private productsRepository : IProductsRepository;

    constructor(productsRepository: IProductsRepository){
        this.productsRepository = productsRepository;
    }

    async execute(){
        const products = await this.productsRepository.all();

        return products;
    }

}
export { ListProductsService}