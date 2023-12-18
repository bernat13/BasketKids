import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IJugador } from '../interfaces/ijugador';

@Injectable({
  providedIn: 'root'
})
export class SJugadoresService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<IJugador[]>
  {
    return this.http.get<IJugador[]>(`${environment.apiURL}/jugadores`);
  }
  get(id:string): Observable<IJugador>
  {
    return this.http.get<IJugador>(`${environment.apiURL}/jugadores/` + id);
  }
  delete (id:string){
    console.log("vamos a borrar a ", id);
    return this.http.delete<IJugador>(`${environment.apiURL}/jugadores/` + id);

  }

  update (id:string,data:IJugador){
    return this.http.put<IJugador>(`${environment.apiURL}/jugadores/` + id,data);

  }
  add(data:any){
    console.log("añadir a jugador: ",data);
    if(data.email==undefined){
      data.email='';
    }
    if(data.categoria==undefined){
     
      let anyo_actual = (new Date()).getFullYear();
      let edad= anyo_actual-data.anyoNacimiento;
      if(edad>4 && edad <8){
        data.categoria='Baby'
      }
      if(edad>7 && edad <10){
        data.categoria='PreMini'
      }
      if(edad>9 && edad <12){
        data.categoria='Mini'
      }
      if(edad>11 && edad <14){
        data.categoria='Infantil'
      }
      if(edad>13 && edad <16){
        data.categoria='Cadete'
      }
      if(edad>15 && edad <18){
        data.categoria='Junior'
      }
      if(edad>18 ){
        data.categoria='Senior'
      }

      
    }
    if(data.imagen==undefined)
    {
      data.imagen=''
    }
    console.log("post",data);
    return this.http.post(`${environment.apiURL}/jugadores`,data);
  }
}
