import { Category } from "../../entities/Category";
import AppError from "../../errors/AppError";
import ICategoryRepositories from "../../repositories/Categories/ICategoryRepositories";

interface ICategory {
    id?: string;
    name: string;
    description: string;
}

class UpdateCategoryService {

    private categoryRepository: ICategoryRepositories;

    constructor(categoryRepository: ICategoryRepositories){
        this.categoryRepository = categoryRepository;
    }

    public async execute({
        id,
        name,
        description
    }:ICategory): Promise<Category>{

        const category = await this.categoryRepository.findById(id);

        if(!category){
            throw new AppError("Category not found!", 400)
        }

        const verifyCategory = await  this.categoryRepository.findByCategoryName(name);

        if(verifyCategory){
            throw new AppError('Category already exists', 400);
        }

        category.name = name;
        category.description = description;

        await this.categoryRepository.save(category);

        return category;



    }

}
export { UpdateCategoryService};