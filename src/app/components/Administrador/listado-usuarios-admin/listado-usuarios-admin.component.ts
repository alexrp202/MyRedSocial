import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado-usuarios-admin',
  templateUrl: './listado-usuarios-admin.component.html',
  styleUrls: ['./listado-usuarios-admin.component.css']
})
export class ListadoUsuariosAdminComponent implements OnInit {

  constructor() { }




  arrayEvents: usuario[] = [{ nombre: 'Sergi', apellido: 'Bertran',password: '********',email:'@mail.com',edad:'21',sexo:'mucho',localidad:'Peru',descripcion:'ayyayayayay',imagen:'panamero.jpg' },
  { nombre: 'Niñato', apellido: 'Jr',password: '********',email:'@mail.com',edad:'21',sexo:'mucho',localidad:'Torrefarrera',descripcion:'Descripcion larga',imagen:'imayen.jpg'  }];

Swal
  eliminar(i) {





        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {

        this.arrayEvents.splice(i, 1);
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })





  }


  ngOnInit(): void {
  }


}
