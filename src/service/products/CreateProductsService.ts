import { getCustomRepository, Repository } from "typeorm";
import { string } from "yargs";
import { Product } from "../../entities/Product";

 
import AppError from "../../errors/AppError";
import IProductsRepository from "../../repositories/Products/IProductsRepository";

interface IProduct{
    titulo: string;
    descricao: string;
    preco: number;
    category_id: string;

}

class CreateProductsService {
    private productsRepository : IProductsRepository;

    constructor(productsRepository: IProductsRepository){
        this.productsRepository = productsRepository;
        

    }

    public async create({titulo, descricao, preco, category_id}: IProduct): Promise<Product>{
        
        const verifyProduct = await this.productsRepository.FindByTitulo(titulo);

        if(verifyProduct){
            throw new AppError('Product already exists', 400); 
        }


        const product = await this.productsRepository.create({
            titulo,
            descricao,
            preco,
            category_id,
        });


        return product;
    }

    

}

    
export { CreateProductsService};