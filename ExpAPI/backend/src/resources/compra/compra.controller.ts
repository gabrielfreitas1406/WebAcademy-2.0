import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const addProdutoCarrinho = async (req: Request, res: Response)=>{
    const {id} = req.params;
    if (!req.session.carrinhoCompras) req.session.carrinhoCompras = [];
    req.session.carrinhoCompras.push(id);
    res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
}

const finalizarCompra = async (req: Request, res: Response)=>{
    
}

export default {addProdutoCarrinho, finalizarCompra}