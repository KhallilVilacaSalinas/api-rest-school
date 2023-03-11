import { Request, Response, Router } from "express";
import { RouteOrchestrator } from "./Route/RouteOrchestrator";
import { parse } from 'stack-trace';


export class Kernel {

    private routeOrchestrator: RouteOrchestrator;

    private routes: Router[];

    constructor() {
        this.routeOrchestrator = new RouteOrchestrator();
    }

    public run(): void {
        this.routes = this.routeOrchestrator.generate()
    }

    public getRoutes(): Router[] {
        return this.routes;
    }

    public managerError(error: Error, req: Request, res: Response): Response {
        const trace = parse(error);
        
        return res.json({
            error: true,
            message: error.message,
            errors: trace 
        })
    };
}