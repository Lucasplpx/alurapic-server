import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioSevice.cria(usuario);
    return usuarioCriado;
  }
}
