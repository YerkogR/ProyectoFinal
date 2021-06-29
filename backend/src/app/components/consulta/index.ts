import express, { Express } from "express";
import consultaRouter from "./consulta.network";

const consulta: Express = express();
consulta.use("/consulta", consultaRouter);

export default consulta;