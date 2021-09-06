import {
  Body,
  Controller,
  Get,
  Header,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioSevice: UsuarioService) {}

  @Get('/:nomeDeUsuario')
  buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    const usuarioEncontrado =
      this.usuarioSevice.buscaPorNomeDeUsuario(nomeDeUsuario);
    return usuarioEncontrado;
  }

  @Post()
  @Header('Location', '/users/${usuarioCriado.nomeDeUsuario}')
  cria(@Body() usuario: Usuario): NestResponse {
    // throw new Error('Erro no cadastro de usuário');
    const usuarioCriado = this.usuarioSevice.cria(usuario);

    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        Location: `/users/${usuarioCriado.nomeDeUsuario}`,
      })
      .comBody(usuarioCriado)
      .build();
    // res
    //   .status(HttpStatus.CREATED)
    //   .location(`/users/${usuario.nomeDeUsuario}`)
    //   .json(usuarioCriado);
    // return usuarioCriado;
  }
}
