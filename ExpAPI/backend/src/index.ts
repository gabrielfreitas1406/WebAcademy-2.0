import express, {Request, Response} from "express";
import validateEnv from "./utils/ValidateEnv";
import dotenv from "dotenv";
import router from "./router";
import cookieParser from 'cookie-parser';
import setLangCookie from "./middlewares/setLangCookie";
import {v4 as uuidv4} from "uuid"
import  session  from "express-session";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

declare module "express-session" {
    interface SessionData {
        uid: string;
        tipoUsuarioId: string;
        carrinhoCompras: string[];
    }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4444;

app.use(cookieParser());
app.use(session({
    genid: () => uuidv4(),
    secret: "Hi9Cf#mK98",
    resave: true,
    saveUninitialized: true
}))
app.use(setLangCookie);
app.use(express.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server run ${PORT}`)
}); 