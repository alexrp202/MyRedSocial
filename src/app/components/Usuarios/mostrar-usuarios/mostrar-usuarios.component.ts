import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuarios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  ArrayUsuarios: usuario[] = [];
  UsuarioSeleccionado: usuario = null;
  CreandoUsuario: boolean = false;
  Informacion:boolean=false;
  // Se llama al inicializar el componente
  ngOnInit(): void {
    this.ArrayUsuarios.push(new usuario( 'Ousmane', 'Dembele', '********','OusmaneDembo@mail.com','23','Hombre','Vernon,Francia','Delantero en el Fútbol Club Barcelona.','https://tmssl.akamaized.net/images/portrait/header/288230-1561038993.jpg'))
    // Cargamos el personaje que tengamos guardado previamente en memoria del navegador
    let usuarios = localStorage.getItem('usuario');
    this.UsuarioSeleccionado = JSON.parse(usuarios);


  }

  // Función que se ejecuta al hacer click en un personaje de la lista
  SeleccionarUsuario(character: usuario): void {

    // Quitamos la interfaz de crear un personaje
    this.CreandoUsuario = false;
    this.Informacion = true;
    // Guardamos en una variable de la clase el personaje seleccionado
    this.UsuarioSeleccionado = character;

    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('usuario', JSON.stringify(character));
  }

  // Funcion para añadir un nuevo personaje en el array
  addUsuario(NuevoUsuario: usuario): void {
    this.ArrayUsuarios.push(NuevoUsuario);
    this.CreandoUsuario=false

  }

  botonAdd(){
    this.CreandoUsuario = true
    this.Informacion=false
  }

}
