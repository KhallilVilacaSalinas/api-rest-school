import { CategoryRepository } from "../../Infrastructure/Repository/CategoryRepository";
import { Category } from "../Entity/Category";

export class CategoryService {

    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    public async save(category: Category) : Promise<Category> {
        return await this.categoryRepository.save(category);
    }
}