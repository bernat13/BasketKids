import { Component } from '@angular/core';
import { SJugadoresService } from '../../services/sjugadores.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SEquiposService } from 'src/app/services/sequipos.service';
import { environment } from 'src/environments/environment';
import { SrandmService } from 'src/app/services/srandm.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string
  jugadores: any;
  equipos: any;
  personajes: any;
  constructor(private sjug: SJugadoresService, private srick: SrandmService, //private loadctrl: LoadingController,
    private sequi: SEquiposService) {
    this.url = `${environment.apiURL}/equipos`;
  }

  ionViewWillEnter() {
    this.getcaracthers();
    this.loaddatos();
  }

  getcaracthers(event?: any) {

    this.srick.getAll().subscribe((res: any) => {
      this.personajes = res;
    }

    );
  }

  loaddatos(event?: InfiniteScrollCustomEvent) {

    this.sjug.getAll().subscribe(
      (resp) => {
        let liststring = JSON.stringify(resp);
        this.jugadores = JSON.parse(liststring);
        console.log(this.jugadores);
        this.sequi.getAll().subscribe(
          (r) => {
            let listequi = JSON.stringify(r);
            this.equipos = JSON.parse(listequi);
            console.log(this.equipos);
            event?.target.complete();
          });

      }
    )
  }
}
