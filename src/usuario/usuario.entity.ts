import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório',
  })
  @IsString()
  nomeDeUsuario: string;

  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  dataDeEntrada: Date;
}
