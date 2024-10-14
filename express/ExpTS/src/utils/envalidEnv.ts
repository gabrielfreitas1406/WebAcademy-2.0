import { cleanEnv, port, str, url } from "envalid";

export default function envalidEnv (){
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str(),
        URL_DB: url(),
    });
}
