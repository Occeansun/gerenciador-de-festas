import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';

const app = express();

app.listen(3333, () => {
    console.log('Servidor online..');
});