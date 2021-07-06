import { Category } from "../../entities/Category";
import ICategoryRepositories from "../../repositories/Categories/ICategoryRepositories";



class ListFindNameCategoryService {
    private categoryRepository: ICategoryRepositories;

    constructor(categoryRepository: ICategoryRepositories){
        this.categoryRepository = categoryRepository;
    }

    async execute(name:string){
        

        const category = await this.categoryRepository.findByCategoryName(name);

        return category;
    
    }
}

export {ListFindNameCategoryService}