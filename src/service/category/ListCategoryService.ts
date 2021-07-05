import ICategoryRepositories from "../../repositories/Categories/ICategoryRepositories"



class ListCategoryService {
    private categoryRepository: ICategoryRepositories;

    constructor(categoryRepository: ICategoryRepositories){
        this.categoryRepository = categoryRepository;
    }

    async execute(){
        const category = await this.categoryRepository.all()

        return category;
    }

}
export { ListCategoryService}