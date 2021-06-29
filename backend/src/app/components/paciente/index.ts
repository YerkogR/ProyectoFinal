import express, { Express } from "express";
import pacienteRouter from "./paciente.network";

const paciente: Express = express();
paciente.use("/paciente", pacienteRouter);

export default paciente;