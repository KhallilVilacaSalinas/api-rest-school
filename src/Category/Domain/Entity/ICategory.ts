import { Category } from "./Category";

export interface ICategory {
    save(category: Category): Promise<Category>
}