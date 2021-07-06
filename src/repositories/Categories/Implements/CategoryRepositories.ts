import { getRepository, Repository } from "typeorm";
import ICreateCategory from "../../../dtos/ICreateCategory";
import { Category } from "../../../entities/Category";
import ICategoryRepositories from "../ICategoryRepositories";


class CategoryRepositories implements ICategoryRepositories{

    private ormRepository : Repository<Category>

    constructor(){
        this.ormRepository = getRepository(Category);
    }


    public async create({
        name, 
        description
    }: ICreateCategory): Promise<Category> {

        const category = this.ormRepository.create({
            name,
            description
        })

        await this.ormRepository.save(category);

        return category;
        
        
    }

    public async all(): Promise<Category[]> {
        return this.ormRepository.find();
    }

    public async save(category: Category): Promise<Category> {
        return this.ormRepository.save(category)
    }


    public async remove(category: Category): Promise<Category> {
        return this.ormRepository.remove(category)
    }


    public async findByCategoryName(name: string): Promise<Category | undefined> {
        const category = await this.ormRepository.findOne({
            where: { name}
        })

        return category;
    }

    public async findById(id: string): Promise<Category>{
        return this.ormRepository.findOne(id);
    }

}

export {CategoryRepositories}