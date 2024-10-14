import express/*, {Request, Response} */from "express";
import dotenv from "dotenv";
import envalidEnv from "./utils/envalidEnv";
import logger from "./middleware/logger"
import router from "./router/router"
import  {engine}  from 'express-handlebars';
import sass from "node-sass-middleware";

dotenv.config();
envalidEnv(); 

const app = express();
const PORT = process.env.PORT || 3333;

app.use(logger("completo"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.engine("handlebars", engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    layoutsDir: `${__dirname}/views/layouts`,
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));

app.use("/html", express.static(`${__dirname}/../public/html`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", [express.static(`${__dirname}/../public/js`),
                express.static(`${__dirname}/../node_modules/bootstrap/dist/js`)]);
app.use("/img", express.static(`${__dirname}/../public/img`));
app.use(router);


app.use((req, res) => {
    res.statusCode = 404;
    res.send("404!");
});

app.listen(PORT, () => {
 console.log(`Aplicação rodando na porta ${PORT}!`);
});