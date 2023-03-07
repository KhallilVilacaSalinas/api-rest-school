import { Router } from "express";

import { categoryRouter } from "../../src/Category/Route/routes";
import { productRouter } from "../../src/Product/Route/routes";
import { systemRouter } from "../../src/SystemUser/Route/routes";

export class RouteOrchestrator {

    public generate(): Router[] {
        return [
            categoryRouter,
            productRouter,
            systemRouter
        ];
    }
}