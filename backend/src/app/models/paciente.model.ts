import { Consulta } from "./consulta.model";

export interface Paciente{
    nombre: string;
    apellidos: string;
    rut: string;
    direccion: string;
    comuna: string;
    region: string;
    email: string;
    password: string;
    consultas: Consulta[];
}