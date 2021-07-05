import { Product } from "../../entities/Product";
import AppError from "../../errors/AppError";
import IProductsRepository from "../../repositories/Products/IProductsRepository"


interface IRequest{
    id?: string;
    titulo: string;
    descricao: string;
    preco: number;
}

class UpdateProuctsService {

    private productsRepository : IProductsRepository;

    constructor(productsRepository: IProductsRepository){
        this.productsRepository = productsRepository;
    }

    public async execute({
        id,
        titulo,
        descricao,
        preco
    }: IRequest): Promise<Product>{

        const product = await this.productsRepository.findById(id);

        if(!product){
            throw new AppError("User not found!", 400);
        }

        const verifyTitulo = await this.productsRepository.FindByTitulo(titulo);

        if(verifyTitulo){
            throw new AppError("Title already exists!", 400);
        }

        product.titulo = titulo;
        product.descricao = descricao;
        product.preco = preco;

        await this.productsRepository.save(product);

        return product;

    }

}
export { UpdateProuctsService}