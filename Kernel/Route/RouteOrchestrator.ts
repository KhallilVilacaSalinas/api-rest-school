import { Router } from "express";

import { categoryRouter } from "../../src/Category/Route/routes";

export class RouteOrchestrator {

    public generate(): [Router] {
        return [
            categoryRouter
        ];
    }
}