import { prismaClient } from "../../../../Kernel/database/prismaClient";
import { Category } from "../../Domain/Entity/Category";
import { ICategory } from "../../Domain/Entity/ICategory";

export class CategoryRepository implements ICategory{

    async save(category: Category): Promise<Category> {
        const row = await prismaClient.category.create({
            data: {
                "name": category.getName,
            },
        });

        return Promise.resolve(
            new Category(row.name)
        );
    }
}