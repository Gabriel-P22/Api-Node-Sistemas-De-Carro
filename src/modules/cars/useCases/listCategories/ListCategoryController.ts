import { Response, Request } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoryUseCase) { }

    handle(request: Request, response: Response) {
        const all = this.listCategoriesUseCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController }