import {Router} from 'express'
import { CategoryController } from '../controller/categories/CategoryController';
import { ListCategoryController } from '../controller/categories/ListCategoryContoller';
import { UpdateCategoryController } from '../controller/categories/UpdateCategoryController';



const categoriesRouter = Router();

const categoryController = new CategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();



categoriesRouter.post("/", categoryController.create);
categoriesRouter.get("/", listCategoryController.handle);
categoriesRouter.put("/:id", updateCategoryController.update);


export { categoriesRouter }