import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, CheckboxRequiredValidator } from '@angular/forms';
import { usuario } from 'src/app/models/usuarios';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  @Output() altaUsuario: EventEmitter<usuario> = new EventEmitter<usuario>();

  myForm: FormGroup;
  ModeloFormulario = new usuario('', '', '', '', '','','','','');

  // CONSTRUCTOR DEL FORMULARIO

  constructor(private _builder: FormBuilder) {
    this.myForm = this._builder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      password: ['', [Validators.minLength(8), Validators.maxLength(15), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      edad: ['', [Validators.min(1), Validators.max(150), Validators.required]],
      sexo: ['', [Validators.required]],
      localidad: ['',[Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      descripcion: ['', [Validators.minLength(20), Validators.maxLength(50), Validators.required]],
      imagen: ['',  [Validators.required,Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?") ]],
      checkbox:[CheckboxRequiredValidator]
    });
  }


  ngOnInit(): void {
  }

  EnviarDatos(){
    this.altaUsuario.emit(this.ModeloFormulario);
    this.ModeloFormulario = new usuario('', '', '', '','','','','','');
    this.myForm.reset();
  }





  }

