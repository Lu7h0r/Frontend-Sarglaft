export class Empleado {
  constructor(
    public primerApellido: string,
    public tipoDeEmpleado: string,
    public segundoApellido: string,
    public telefono: string,
    public nombres: string,
    public correo: string,
    public tipoDeDocumento: string,
    public numeroDocumento: string,
    public direccion: string,
    public usuarioSolicitud: string,
    public stakeholder: string,
    public _id?: string
  ) {}
}
