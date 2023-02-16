import { Category } from "../../Domain/Entity/Category";


export class OutputCategory {
    private category: Category;

    constructor(category: Category) {
        this.category = category
    }

    public getOutput() : Object {
        return {
            'category': this.category.jsonSerialize,
        }
    }
}