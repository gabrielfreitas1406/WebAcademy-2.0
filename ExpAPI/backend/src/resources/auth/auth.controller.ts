import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateUsuario } from "../usuario/usuario.service";
import { Request, Response } from "express";
import { checkCredentials } from "./auth.service";
import session from "express-session";

const signup = async (req: Request, res: Response)=>{
    const usuario = req.body;
    try{
        const novoUsuario = await CreateUsuario(usuario, "client")
        res.status(StatusCodes.OK).json(novoUsuario);
    }
    catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const login = async (req: Request, res: Response)=>{
    const credentials = req.body;
    try{
        const usuario = await checkCredentials(credentials);
        if (!usuario) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
        req.session.uid = usuario.id;
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;
        res.status(StatusCodes.OK).json(usuario);
    }
    catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const logout = async (req: Request, res: Response)=>{
    req.session.destroy((err)=>{
        if(err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
        res.status(StatusCodes.OK).json(ReasonPhrases.OK);
    });
}

export default {signup, login, logout}