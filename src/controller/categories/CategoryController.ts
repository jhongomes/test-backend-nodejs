import { Request, Response} from 'express';
import { CategoryRepositories } from '../../repositories/Categories/Implements/CategoryRepositories';
import { CreateCategoryService } from '../../service/category/CreateCategoryService';

class CategoryController {
    public async create(request:Request, response:Response): Promise<Response>{

        const { name, description } = request.body;

        const categoryRepository = new CategoryRepositories();
        const createCategory = new CreateCategoryService(categoryRepository);

        const category = await createCategory.execute({
            name,
            description
        })

        return response.status(200).json(category);

    }
}
export { CategoryController}