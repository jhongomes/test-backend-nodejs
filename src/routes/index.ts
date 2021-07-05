import express from 'express';
import path from 'path'
import { Router } from 'express'

import { categoriesRouter } from './category';


const routes = Router();



routes.get('/', (request, response ) => 
response.json({ message: 'BACKEND 🚀🚀'  }));


routes.use("/categories", categoriesRouter)



export default routes;
