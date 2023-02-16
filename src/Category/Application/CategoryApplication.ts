import { CategoryService } from "../Domain/Service/CategoryService";
import { InputCategoryStore } from "./Input/InputCategoryStore";
import { OutputCategory } from "./output/OutputCategory";

export class CategoryApplication {

    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    public save(inputCategoryStore: InputCategoryStore): OutputCategory {
        const a = this.categoryService.save(inputCategoryStore.name);
        console.log(a);
        
        return new OutputCategory();
    }
}