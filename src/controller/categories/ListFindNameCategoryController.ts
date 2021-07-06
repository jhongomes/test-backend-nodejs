
import { Request, Response } from "express";
import { CategoryRepositories } from "../../repositories/Categories/Implements/CategoryRepositories";
import { ListFindNameCategoryService } from "../../service/category/ListFindNameCategortService";

class ListFindNameCategoryController {
    public async handle(request: Request, response:Response) {
        const { name } = request.body;

        const categoryRepository = new CategoryRepositories();
        const listFindNameCategory = new ListFindNameCategoryService(categoryRepository)

        const category = await listFindNameCategory.execute(name)

        return response.json(category)
    }

}
export { ListFindNameCategoryController}