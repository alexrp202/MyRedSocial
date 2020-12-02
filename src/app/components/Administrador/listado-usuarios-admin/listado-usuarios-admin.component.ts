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




  arrayEvents: usuario[] = [{ nombre: 'Ousmane', apellido: 'Dembele',password: '********',email:'OusmaneDembo@mail.com',edad:'23',sexo:'Hombre',localidad:'Vernon,Francia',descripcion:'Delantero en el Fútbol Club Barcelona.',imagen:'https://tmssl.akamaized.net/images/portrait/header/288230-1561038993.jpg' },
  { nombre: 'Niñato', apellido: 'Jr',password: '********',email:'Ninato@mail.com',edad:'28',sexo:'Hombre',localidad:'Brasil',descripcion:'Delantero en el Paris Saint Germain.',imagen:'https://i.pinimg.com/564x/cb/84/90/cb8490e60a45b245907c1ca87c41e9d4.jpg'  },
  { nombre: 'Ansu', apellido: 'Fati',password: '********',email:'AnsuFati@mail.com',edad:'18',sexo:'Hombre',localidad:'España',descripcion:'Delantero en el Fútbol Club Barcelona.',imagen:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg'  }];

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
          title: 'Estas seguro?',
          text: "No vas a poder revertir los cambios",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, deseo borrar!',
          cancelButtonText: 'No, cancelar!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {

        this.arrayEvents.splice(i, 1);
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'Tu archivo ha sido eliminado.',
              'success'
            )
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'No has borrado el archivo:',
              'error'
            )
          }
        })





  }


  ngOnInit(): void {
  }


}
