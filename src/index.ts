import express from 'express';
import cors from 'cors';
import router from './routes';
import config from './config';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

app.listen(config.port, () => {
    console.log(`Server is live @ ${config.hostUrl}`)
});
