import express, { Express } from "express";
import cors from "cors";
import components from "./components";
import mongooseModule from "./modules/mongoose.module";

async function main(){
    const server: Express = express();
    const port: number = 4000;

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cors());
    server.use('/api', ...components);

    try {
        await mongooseModule.connect();
        console.log('Database connection successful');

        server.listen(port, () => {
        console.log('Server listening on: http://localhost:' + port)
        });
    } catch (error) {
        console.log('Failed database connection');
    }
}

export default {main};