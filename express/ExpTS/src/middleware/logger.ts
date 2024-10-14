import {Request, Response, NextFunction } from "express";
import fs from "fs/promises";

async function createLogsFile(filename: string, logs: string){
    const logsPath = process.env.FOLDER_LOGS!;
    try{
        await fs.access(logsPath);
    }
    catch(err){
        await fs.mkdir(logsPath);
    }
}

async function  salveLogs(filename: string, logs: string){
    const logsPath = process.env.FOLDER_LOGS!;
    try{
        await fs.appendFile(`${logsPath}/${filename}`, logs);
    }
    catch(err){
        if(err) throw new Error(err.toString());
    }
}
function logger(formato: "simples" | "completo"){
    if(formato == "simples"){
        return async(req:Request, res: Response, next: NextFunction)=>{
            const log = `${new Date().toISOString()} - ${req.url} - ${req.method}\n`;
            await salveLogs(`${formato}.log`,log);
            next();
        };
    }
    else if (formato == "completo"){
        return async (req: Request, res: Response, next: NextFunction)=>{
            const logs = `${new Date().toISOString()} - ${req.url} - ${req.method} - ${req.httpVersion} - ${req.get("User-Agent")}}`;
            next();
        }
    }
    else{
        return (req: Request, res: Response,next:  NextFunction)=>{
            console.log("Formato invalido!");
        }
    }
}

export default logger;