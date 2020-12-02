import { Component, OnInit, Input } from '@angular/core';
import { usuario } from 'src/app/models/usuarios'
@Component({
  selector: 'app-perfiles-usuarios',
  templateUrl: './perfiles-usuarios.component.html',
  styleUrls: ['./perfiles-usuarios.component.css']
})
export class PerfilesUsuariosComponent implements OnInit {

  @Input() usuario: usuario;
  constructor() { }

  ngOnInit(): void {

  }

}
