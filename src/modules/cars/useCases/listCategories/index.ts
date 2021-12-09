import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


const  categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoryUseCase);

export { listCategoriesController }