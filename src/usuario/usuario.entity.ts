import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico';

export class Usuario {
  id: number;

  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único.',
  })
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
