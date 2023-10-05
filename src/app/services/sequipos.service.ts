import { Injectable } from '@angular/core';
import { IEquipos } from '../interfaces/iequipos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SEquiposService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<IEquipos>
  {
    return this.http.get<IEquipos>(`${environment.apiURL}/equipos`);
  }

  get(id:string): Observable<IEquipos>
  {
    return this.http.get<IEquipos>(`${environment.apiURL}/equipos/` + id);
  }
}
