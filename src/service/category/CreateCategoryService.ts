import { Category } from "../../entities/Category";
import AppError from "../../errors/AppError";
import ICategoryRepositories from "../../repositories/Categories/ICategoryRepositories"


interface ICategory {
    name: string;
    description: string;
}

class CreateCategoryService {

    private categoryRepositories: ICategoryRepositories;

    constructor(categoryRepositories : ICategoryRepositories){
        this.categoryRepositories = categoryRepositories;
    }

    public async execute({name, description}: ICategory): Promise<Category>{

        const verifyCategory = await  this.categoryRepositories.findByCategoryName(name);

        if(verifyCategory){
            throw new AppError('Category already exists', 400);
        }

        const category = await this.categoryRepositories.create({
            name,
            description
        });


        return category;
    }


}

export { CreateCategoryService}