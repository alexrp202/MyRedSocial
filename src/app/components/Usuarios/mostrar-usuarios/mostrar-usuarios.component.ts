import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuarios';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  listausuario: usuario[] = []
  constructor() { }

  ngOnInit(): void {
  }

  UsuarioSeleccionado: usuario;
  cambiarUsuario(trabajador) {
    this.UsuarioSeleccionado = trabajador;
  }

  addEvento(nEvent){
    this.listausuario.push(nEvent)
  }
}
