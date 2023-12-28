import express from 'express';
import cors from 'cors';
import router from './src/routes';
import config from './src/config';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

app.listen(config.port, () => {
    console.log(`Server is live @ ${config.hostUrl}`)
});
