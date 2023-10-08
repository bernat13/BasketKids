import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartidos } from '../interfaces/ipartidos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpartidosService {

  
  constructor(private http:HttpClient) { }

  getAll(): Observable<IPartidos>
  {
    return this.http.get<IPartidos>(`${environment.apiURL}/partidos`);
  }

  get(id:string): Observable<IPartidos>
  {
    return this.http.get<IPartidos>(`${environment.apiURL}/partidos/` + id);
  }

  add(data:any){

    return this.http.post(`${environment.apiURL}/partidos/`,data);
  }
}
