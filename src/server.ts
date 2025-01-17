import 'express-async-errors';
import 'reflect-metadata';

import swaggerFile from "./swagger.json"

import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from "swagger-ui-express";

import AppError from './errors/AppError';
import path from 'path';
import './database'
import routes from './routes'



const app = express();
app.use(express.json())

app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use((err: Error, resquest: Request, response: Response, _:NextFunction)=>{

    if(err instanceof AppError){
        return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message});

    }

    return response.status(500)
    .json({ status: 'error', message: err.message});
})


app.listen(3333, () => console.log("start backend"));