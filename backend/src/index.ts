import dotenv from 'dotenv';
import path from 'path';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import GenericException from './shared/domain/exceptions/GenericException';
import asyncErrorsHandler from './shared/infrastructure/asyncErrorsHandler';
import clientRoutes from './Client/infrastructure/routes';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/client', clientRoutes);

app.get('/api/', asyncErrorsHandler(
  async (req, res) => {
    res.status(200).send({ ok: 'Ok'});
  }
));

app.use((err: GenericException, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    error: {
      name: err.name,
      message: err.message,
      statusCode: err.statusCode,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
