import { Router } from "express";

import { categoryRouter } from "../../src/Category/Route/routes";
import { productRouter } from "../../src/Product/Route/routes";

export class RouteOrchestrator {

    public generate(): Router[] {
        return [
            categoryRouter,
            productRouter
        ];
    }
}