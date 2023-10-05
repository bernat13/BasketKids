import { IJugada } from "./ijugada";

export interface IPartidos {
    id:Number,
    fecha:Date,
    equipo_v:String,
    equipo_l:String,
    marcador_v:Number,
    marcador_l:Number,
    logo_l:String,
    logo_v:String,
    jugadas: IJugada[]
}
