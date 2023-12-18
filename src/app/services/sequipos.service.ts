import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEquipo } from '../interfaces/iequipo';

@Injectable({
  providedIn: 'root'
})
export class SEquiposService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<IEquipo[]>
  {
    return this.http.get<IEquipo[]>(`${environment.apiURL}/equipos`);
  }

  get(id:string): Observable<IEquipo>
  {
    return this.http.get<IEquipo>(`${environment.apiURL}/equipos/` + id);
  }
}
