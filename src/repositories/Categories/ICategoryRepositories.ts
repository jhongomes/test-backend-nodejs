import ICreateCategoryDTO from '../../dtos/ICreateCategory';
import { Category } from '../../entities/Category';


export default interface ICategoryRepositories {

    create(createCategoryDTO: ICreateCategoryDTO): Promise<Category>
    all():Promise<Category[]>
    save(category: Category): Promise<Category>
    remove(category: Category): Promise<Category>
    findByCategoryName(name: string): Promise<Category | undefined>
    findById(id: string): Promise<Category | undefined>

}