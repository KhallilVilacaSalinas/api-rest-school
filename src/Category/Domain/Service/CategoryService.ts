import { CategoryRepository } from "../../Infrastructure/Repository/CategoryRepository";
import { Category } from "../Entity/Category";

export class CategoryService {

    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    public async save(name: string): Promise<Category> {
        const category = await this.categoryRepository.save(
            new Category(name)
        );

        return new Category(category.getName);
    }
}