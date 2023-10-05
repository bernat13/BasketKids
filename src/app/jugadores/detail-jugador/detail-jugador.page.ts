import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { SJugadoresService } from 'src/app/services/sjugadores.service';

@Component({
  selector: 'app-detail-jugador',
  templateUrl: './detail-jugador.page.html',
  styleUrls: ['./detail-jugador.page.scss'],
})
export class DetailJugadorPage  {
  nombre: string;
  jugador: any;
  id: string;
  titulo ='';
  constructor(private _route: ActivatedRoute, private sjug: SJugadoresService) {
    this.id = _route.snapshot.paramMap.get("id")!;
    this.nombre = this.id;
  }

  ionViewWillEnter() {
    this.cargardatos();
  }
  async cargardatos() {

this.sjug.get(this.id).subscribe(
  (resp) => {
   
    let e = JSON.stringify(resp);
    this.jugador = JSON.parse(e);
    this.titulo=this.jugador.nombre;
    console.log(this.jugador);
   
  },
  (err) => {
    console.log(err.message);

  });
}

}
