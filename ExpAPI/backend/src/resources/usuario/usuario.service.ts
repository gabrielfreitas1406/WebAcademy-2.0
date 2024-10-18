import { PrismaClient, Usuario } from "@prisma/client";
import { CreateUsuarioDto, TipoUsuario, UsuarioDto } from "./usuario.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";
import { genSalt, hash } from "bcryptjs"; 

const prisma = new PrismaClient();


export const CreateUsuario = async (
    usuario: CreateUsuarioDto, tipoUsuario: TipoUsuario
    ): Promise <UsuarioDto> =>{
        const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
        const salt = await genSalt(rounds)
        const senha = await hash(usuario.senha, salt);
        usuario.senha = senha
        return await prisma.usuario.create({
            select:{ id: true, nome: true, email: true, tipoUsuarioId: true, createdAt: true, updatedAt: true},
            data: {
                ...usuario,
                tipoUsuarioId: tipoUsuario === "admin" ? TiposUsuarios.ADMIN: TiposUsuarios.CLIENTE
            } 
        });
}

export const findUsuarioByEmail = async (email: string): Promise<Usuario | null>  =>{
    return await prisma.usuario.findUnique({where: {email}})
}

export const findUsuarioById = async (id: string): Promise<Usuario | null>  =>{
    return await prisma.usuario.findUnique({where: {id}})
}

export const getUsuarios =  async (tipo: TiposUsuarios): Promise<Usuario[]> =>{
    if (!tipo) return prisma.usuario.findMany();
    return prisma.usuario.findMany( {where: {tipoUsuarioId: tipo}})
}