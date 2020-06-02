export class Cliente {
  constructor(
    public razonSocial: string,
    public nit: string,
    public direccion: string,
    public telefono: string,
    public ciudad: string,
    public personaDeContacto: string,
    public cargo: string,
    public comercial: string,
    public correo: string,
    public stakeholder: string,
    public _id?: string
  ) {}
}
