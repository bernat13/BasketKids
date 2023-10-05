import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IJugadores } from '../interfaces/ijugadores';

@Injectable({
  providedIn: 'root'
})
export class SJugadoresService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<IJugadores>
  {
    return this.http.get<IJugadores>(`${environment.apiURL}/jugadores`);
  }
  get(id:string): Observable<IJugadores>
  {
    return this.http.get<IJugadores>(`${environment.apiURL}/jugadores/` + id);
  }
}
