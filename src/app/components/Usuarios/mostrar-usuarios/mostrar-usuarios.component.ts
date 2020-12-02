import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuarios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  listausuario: usuario[] = []
  NuevoUsuario: boolean = false;
  Informacion: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  UsuarioSeleccionado: usuario;
  cambiarUsuario(trabajador) {
    this.Informacion=true
    this.UsuarioSeleccionado = trabajador;

  }

  addUsuario(nEvent){
    this.NuevoUsuario=true
    Swal.fire(
      'Felicidades!',
      'Usuario creado!',
      'success'
    )
    this.listausuario.push(nEvent)

  }

}
