import { Request, Response } from "express";
import { CategoryRepositories } from "../../repositories/Categories/Implements/CategoryRepositories";
import { ListCategoryService } from "../../service/category/ListCategoryService";

class ListCategoryController {
    public async handle(request: Request, response:Response) {

        const categoryRepository = new CategoryRepositories();
        const listCategory = new ListCategoryService(categoryRepository);

        const category = await listCategory.execute();

        return response.json(category)
    }

}
export { ListCategoryController}