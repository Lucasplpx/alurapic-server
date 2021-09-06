import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico';

export class Usuario {
  id: number;

  @Expose({
    name: 'username',
  })
  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único.',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório',
  })
  @IsString()
  nomeDeUsuario: string;

  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @Expose({
    name: 'email',
  })
  @IsEmail()
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty()
  senha: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
