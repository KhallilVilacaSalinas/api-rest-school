import express, { Express, Router } from "express";
import { RouteOrchestrator } from "./Route/RouteOrchestrator";

export class Kernel {

    public routeOrchestrator: RouteOrchestrator;

    private app: Express;

    private routes: Router[];

    constructor() {
        this.routeOrchestrator = new RouteOrchestrator();
        this.app = express();
    }

    public run(): void {
        this.routes = this.routeOrchestrator.generate()
    }

    public getRoutes(): Router[] {
        return this.routes;
    }
}