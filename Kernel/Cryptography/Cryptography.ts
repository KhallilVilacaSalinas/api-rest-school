import { hash } from "bcryptjs";

export abstract class Cryptography {
    
    public static hash(value: string, salt?: number): Promise<string> {
        return hash(value, salt !== undefined ? salt : 8);
    }
}