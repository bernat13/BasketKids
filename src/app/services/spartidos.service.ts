import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPartido } from '../interfaces/ipartido';

@Injectable({
  providedIn: 'root'
})
export class SpartidosService {

  
  constructor(private http:HttpClient) { }

  getAll(): Observable<IPartido[]>
  {
    return this.http.get<IPartido[]>(`${environment.apiURL}/partidos`);
  }

  get(id:string): Observable<IPartido>
  {
    return this.http.get<IPartido>(`${environment.apiURL}/partidos/` + id);
  }

  add(data:IPartido){

    return this.http.post(`${environment.apiURL}/partidos/`,data);
  }
}
