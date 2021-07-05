
import { Request, Response} from 'express';
import { CategoryRepositories } from '../../repositories/Categories/Implements/CategoryRepositories';
import { UpdateCategoryService } from '../../service/category/UpdateCategoryServie';


class UpdateCategoryController {
    public async update(request:Request, response:Response): Promise<Response>{
        const { id } = request.params;
        const { name, description } = request.body;

        const categoryRepository = new CategoryRepositories();
        const updateCategory = new  UpdateCategoryService(categoryRepository);

        const category = await updateCategory.execute({
            name,
            description
        });

        return response.status(201).json(category)
    }    

}
export { UpdateCategoryController}