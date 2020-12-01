import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { usuario } from 'src/app/models/usuarios';

@Component({
  selector: 'app-elemento-usuario',
  templateUrl: './elemento-usuario.component.html',
  styleUrls: ['./elemento-usuario.component.css']
})
export class ElementoUsuarioComponent implements OnInit {
  @Input() usuario: usuario;
  @Output() selectEvent = new EventEmitter<usuario>();

  constructor() { }

  ngOnInit(): void {
  }

  UsuarioSeleccionado(event){

      this.selectEvent.emit(this.usuario);

  }
}
