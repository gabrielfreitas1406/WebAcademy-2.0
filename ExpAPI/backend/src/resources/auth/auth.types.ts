import { Usuario } from "@prisma/client";

export type LoginDto = Pick<Usuario,  "email" | "senha">;
export type SignupDto = Pick<Usuario, "nome" | "email" | "senha">;