import ICreateProductDTO from "../../dtos/ICreateProductDTO";
import { Product } from "../../entities/Product";



export default interface IProductsRepository {
    create(createProductDTO: ICreateProductDTO): Promise<Product>;
    all(): Promise<Product[]>
    save(product: Product): Promise<Product>
    remove(product: Product): Promise<Product>
    FindByTitulo(titulo: string): Promise<Product | undefined>;
    findById(id: string): Promise<Product | undefined>
    
}



