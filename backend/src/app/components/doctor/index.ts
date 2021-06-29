import express, { Express } from "express";
import doctorRouter from "./doctor.network";

const doctor: Express = express();
doctor.use("/doctor", doctorRouter);

export default doctor;