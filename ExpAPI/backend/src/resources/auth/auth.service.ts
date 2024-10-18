import { PrismaClient, Usuario } from "@prisma/client";
import { UsuarioDto } from "../usuario/usuario.types";
import {LoginDto, SignupDto} from "./auth.types";
import { genSalt, hash, compare } from "bcryptjs";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";
import { findUsuarioByEmail } from "../usuario/usuario.service";

const prisma = new PrismaClient();

export const checkCredentials = async (credentials: LoginDto): Promise<UsuarioDto | null>=> {
    const foundUsuario = await findUsuarioByEmail(credentials.email);
    if(!foundUsuario) return null;
    const ok = await compare(credentials.senha, foundUsuario.senha);
    if (!ok) return null;
    return foundUsuario
    /*const usuario = prisma.usuario.findUnique({
        where:{ email:credentials.email},
    });
    if (!usuario) return null;
    const ok = await compare(credentials.senha, usuario.senha);
    if (!ok) return null;
    


    return{
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipoUsuarioId: usuario.tipoUsuarioId
    }*/
}