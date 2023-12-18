import { IJugador } from "./ijugador";

export interface IEquipo {

    id: number,
    nombre: string,
    categoria: string,
    logo: string,
    jugadores:IJugador[]
}
