
import ICreateProductDTO from "../../../dtos/ICreateProductDTO";
import { Product } from "../../../entities/Product";
import IProductsRepository from "../IProductsRepository";
import { getCustomRepository, getRepository, Repository} from 'typeorm';



class ProductsRepository implements IProductsRepository{
    private ormRepository: Repository<Product>;

    constructor(){
        this.ormRepository = getRepository(Product);
    }


    public async findById(id: string): Promise<Product | undefined> {
        return this.ormRepository.findOne(id);
    }

   

    public async create({
        titulo,
        descricao,
        preco,
        category_id
    }: ICreateProductDTO): Promise<Product> {

        const product = this.ormRepository.create({
            titulo,
            descricao,
            preco,
            category_id
        });

        await this.ormRepository.save(product);


        return product;
        
    }


    public async all(): Promise<Product[]> {
        return this.ormRepository.find();

    
    }
    public async save(product: Product): Promise<Product> {
       return this.ormRepository.save(product);
    }

    public async remove(product: Product): Promise<Product> {
        return this.ormRepository.remove(product);
    }

    public async FindByTitulo(titulo: string): Promise<Product | undefined>{
        return this.ormRepository.findOne({
            where: { titulo },
        });
    }

    
    
    



    
}
export { ProductsRepository};