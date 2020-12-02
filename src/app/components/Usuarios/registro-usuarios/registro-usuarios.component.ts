import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, CheckboxRequiredValidator } from '@angular/forms';
import { usuario } from 'src/app/models/usuarios';
import Swal from 'sweetalert2';
import { CustomValidators } from './custom-validators';
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  @Output() altaUsuario: EventEmitter<usuario> = new EventEmitter<usuario>();

  myForm: FormGroup;
  ModeloFormulario = new usuario('', '', '','', '', '','','','');

  // CONSTRUCTOR DEL FORMULARIO

  constructor(private _builder: FormBuilder) {
    this.myForm = this._builder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      password: ['', [Validators.minLength(8), Validators.maxLength(15), Validators.required]],
      confirmPassword : [null, [Validators.minLength(8), Validators.maxLength(15), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      edad: ['', [Validators.min(1), Validators.max(150), Validators.required]],
      sexo: ['', [Validators.required]],
      localidad: ['',[Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      descripcion: ['', [Validators.minLength(4), Validators.maxLength(50), Validators.required]],
      imagen: ['',  [Validators.required,Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?") ]],
      checkbox:[CheckboxRequiredValidator]
    }, {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
    }

    );
  }


  ngOnInit(): void {
  }

  EnviarDatos(){
    this.altaUsuario.emit(this.ModeloFormulario);
    this.ModeloFormulario = new usuario('', '','', '', '','','','','');
    this.myForm.reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Usuario creado',
      showConfirmButton: false,
      timer: 1500
    })
  }





  }

