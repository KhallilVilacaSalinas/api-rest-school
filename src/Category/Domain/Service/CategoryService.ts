import { CategoryRepository } from "../../Infrastructure/Repository/CategoryRepository";
import { Category } from "../Entity/Category";

export class CategoryService {

    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    public save(name: string): Category {
        const category: Promise<Category> = this.categoryRepository.save(
            new Category(name)
        );

        try {
            category
            .then((result: Category) => {
                return result
            })
            .catch((error) => {
                throw new Error(error);
            }) 
        } catch (e) {
            throw new Error("asd");
        }
        
        return new Category('ascxcvxcv');
    }
}