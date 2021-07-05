import express from 'express';
import path from 'path'
import { Router } from 'express'
import {productsRouter} from "./products";
import { categoriesRouter } from './category';


const routes = Router();


routes.use("/products", productsRouter)
routes.use("/categories", categoriesRouter)



export default routes;
