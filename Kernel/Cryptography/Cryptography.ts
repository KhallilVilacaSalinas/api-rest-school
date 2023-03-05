import { hash } from "bcryptjs";

export abstract class name {
    
    public static hash(value: string, salt?: number): Promise<string> {
        return hash(value, salt !== undefined ? salt : 8);
    }
}