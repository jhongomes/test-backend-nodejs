import AppError from '../../errors/AppError';
import { Product} from "../../entities/Product";
import IProductsRepository from "../../repositories/Products/IProductsRepository"

interface IRequest{
    id: string;
    
}

class DeleteProductsService {

    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository){
        this.productsRepository = productsRepository;
    }


    public async execute({
        id
    }: IRequest): Promise<Product>{

        const product = await this.productsRepository.findById(id)

        if(!product){
            throw new AppError('product not found!', 400);
        }

        await this.productsRepository.remove(product);


        return product;

    }


}

export { DeleteProductsService}