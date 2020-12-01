import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { usuario } from 'src/app/models/usuarios';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  @Output() informarEvent = new EventEmitter<usuario>();
  constructor() { }

  ngOnInit(): void {
  }

  informarUsuario(event) {
    this.informarEvent.emit(event);
  }
}
