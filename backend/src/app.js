import express from 'express';
import morgan from 'morgan';

import logger from './logger.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(morgan('combined', { stream: logger.stream }));

app.use(/*route*/);

app.use(errorHandler);

export default app;