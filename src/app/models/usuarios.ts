export class usuario{

//CONSTRUCTOR DE LOS USUARIOS PARA EL FORMULARIO
  constructor(
    public nombre: string,
    public apellido: string,
    public password: string,
    public email: string,
    public edad: number,
    public sexo: string,
    public localidad: string,
    public descripcion: string,
    public imagen:string
  ) { }

}

