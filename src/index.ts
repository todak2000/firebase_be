import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(config.port, () => {
    console.log(`Server is live @ ${config.hostUrl}`)
});
