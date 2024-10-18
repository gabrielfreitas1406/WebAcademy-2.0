import { Usuario } from "@prisma/client"

export type  CreateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;
export type UsuarioDto = Omit<Usuario, "senha">;
export type TipoUsuario = "client" | "admin"
export type UpadateUsuarioDto = CreateUsuarioDto;