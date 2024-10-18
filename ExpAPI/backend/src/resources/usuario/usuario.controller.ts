import { Request, Response } from "express";
import { CreateUsuario, findUsuarioByEmail, getUsuarios, findUsuarioById } from "./usuario.service";
import { TipoUsuario } from "./usuario.types";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const index = async (req: Request, res: Response) =>{
    const tipo = req.query.tipo as TiposUsuarios;
    try{
        const usuario = await getUsuarios(tipo);
        res.status(StatusCodes.OK).json(usuario);
    }
    catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const create = async (req: Request, res: Response) =>{
    const usuario = req.body;
    const tipoUsuario = req.query.tipoUsuario as TipoUsuario;
    try{
        const novoUsuario = await CreateUsuario(usuario, tipoUsuario);
        res.status(StatusCodes.OK).json(novoUsuario);
    }
    catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const read = async (req: Request, res: Response) =>{
    const id = req.params.id;
    try{
        const usuario = await findUsuarioById(id);
        if (!usuario) res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST);
        res.status(StatusCodes.OK).json(usuario);
    }
    catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const update = async (req: Request, res: Response) =>{

}
const remove = async (req: Request, res: Response) =>{

}
export default {index, create, read, update, remove}