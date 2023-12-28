import express from 'express';
import cors from 'cors';
import router from './src/routes';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);
