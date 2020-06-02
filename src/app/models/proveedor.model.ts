export class Proveedor {
  constructor(
    public razonSocial: string,
    public nit: string,
    public direccion: string,
    public ciudad: string,
    public telefono: string,
    public personaDeContacto: string,
    public cargo: string,
    public correo: string,
    public adjunto: string,
    public usuarioSolicitud: string,
    public stakeholder: string,
    public _id?: string
  ) {}
}
