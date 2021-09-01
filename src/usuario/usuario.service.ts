import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeDeUsuario: 'lucas',
      nomeCompleto: 'Lucas Lima',
      email: 'lucasplpx@gmail.com',
      senha: '****',
      dataDeEntrada: new Date(),
    },
  ];

  cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }

  buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario === nomeDeUsuario,
    );
  }
}
