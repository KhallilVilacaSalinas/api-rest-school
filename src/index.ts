import "express-async-errors";
import { parse } from 'stack-trace';
import express, { NextFunction, Request, Response } from 'express';
import { Kernel } from '../Kernel/Kernel';

const app = express();
const kernel = new Kernel();

kernel.run();

app.use(express.json());
app.use(kernel.getRoutes());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    const trace = parse(error);

    return res.json({
        error: true,
        lineNumber: trace[0].getLineNumber(),
        typeName: trace[0].getTypeName(),
        functionNumber: trace[0].getFunctionName(),
        methodName: trace[0].getMethodName(),
        fileName: trace[0].getFileName(),
    })
});


app.listen(process.env.APP_PORT, () => console.log('Server is running'));
