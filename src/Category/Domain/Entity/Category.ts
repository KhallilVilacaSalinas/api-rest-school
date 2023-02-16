export class Category{
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public get getName(): string {
        return this.name
    }

    public jsonSerialize(): Object  {
        return {
            'name': this.getName
        };
    }
}