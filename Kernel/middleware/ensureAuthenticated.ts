import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken: string|null = req.headers.authorization ?? null;

    if (!authToken) {
        return res.status(401).json({
            error: true,
            message: "Token is missing"
        });
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, process.env.APP_SECRET as string);
        
        return next();
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: "Token is invalid"
        });
    }
}
