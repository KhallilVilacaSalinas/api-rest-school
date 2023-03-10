import { Category } from "../Domain/Entity/Category";
import { CategoryService } from "../Domain/Service/CategoryService";
import { InputCategoryStore } from "./Input/InputCategoryStore";
import { OutputCategory } from "./output/OutputCategory";

export class CategoryApplication {

    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    public async save(inputCategoryStore: InputCategoryStore) : Promise<OutputCategory> {
        return new OutputCategory(
            await this.categoryService.save(new Category(inputCategoryStore.name))
        );
    }
}