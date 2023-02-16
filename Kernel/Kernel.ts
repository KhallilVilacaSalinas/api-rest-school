import { Router } from "express";
import { RouteOrchestrator } from "./Route/RouteOrchestrator";

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
}