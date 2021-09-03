import { Module } from '@nestjs/common';
import { IsNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, IsNomeDeUsuarioUnicoConstraint],
})
export class UsuarioModule {}
