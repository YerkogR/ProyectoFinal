import express, { Express } from "express";
import adminRouter from "./admin.network";

const admin: Express = express();
admin.use("/admin", adminRouter);

export default admin;