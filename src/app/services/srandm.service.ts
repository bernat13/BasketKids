import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrandmService {

  private BASEURL = 'https://rickandmortyapi.com/api/character';
  
  constructor(private http:HttpClient) { }

  getAll(): Observable<any>
  {
    return this.http.get(this.BASEURL);
  }

}
