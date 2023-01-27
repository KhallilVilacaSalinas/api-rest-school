import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.APP_PORT, () => console.log('Server is running'));


// import database from './database'

// database.initialize().then(() => {
//     console.log('Connected successfully')

//     const app = express()

//     app.use(express.json())
    
//     app.get('/', (req, res) => {
//         return res.json('hello word')
//     })

//     return app.listen(process.env.APP_PORT)
// })