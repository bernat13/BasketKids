import { Component, OnInit } from '@angular/core';
import { SJugadoresService } from 'src/app/services/sjugadores.service';

@Component({
  selector: 'app-list-jugadores',
  templateUrl: './list-jugadores.page.html',
  styleUrls: ['./list-jugadores.page.scss'],
})
export class ListJugadoresPage implements OnInit {
  jugadores: any;
  constructor(private sjugadores: SJugadoresService) { }

  ngOnInit() {
    this.sjugadores.getAll().subscribe(s => {
      let cadena = JSON.stringify(s);
      this.jugadores = JSON.parse(cadena);

    });
  }

}
