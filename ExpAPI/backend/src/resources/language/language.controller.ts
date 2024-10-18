import { Request, Response } from "express"
import { changeLanguageDto } from "./language.types";
import { StatusCodes } from "http-status-codes";

const changeLanguage = (req: Request, res: Response) =>{
    const {lang} = req.body as changeLanguageDto;
    res.cookie('lang', lang);
    res.status(StatusCodes.NO_CONTENT).json();
}

export default {changeLanguage}