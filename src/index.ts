import express from 'express';
import { Kernel } from '../Kernel/Kernel';

const app = express();
const kernel = new Kernel();

kernel.run();

app.use(express.json());
app.use(kernel.getRoutes());


app.listen(process.env.APP_PORT, () => console.log('Server is running'));
