import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { Kernel } from '../Kernel/Kernel';

const app = express();
const kernel = new Kernel();

kernel.run();

app.use(express.json());
app.use(kernel.getRoutes());

app.use((error: any, req: Request, res: Response, next: NextFunction) => kernel.managerError(error, req, res));

app.listen(process.env.APP_PORT, () => console.log('Server is running'));
