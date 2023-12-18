import { Component } from '@angular/core';
import { SJugadoresService } from '../../services/sjugadores.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SEquiposService } from 'src/app/services/sequipos.service';
import { environment } from 'src/environments/environment';
import { SrandmService } from 'src/app/services/srandm.service';
import { IJugador } from 'src/app/interfaces/ijugador';
import { IEquipo } from 'src/app/interfaces/iequipo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string
  jugadores!: IJugador[];
  equipos!: IEquipo[];
  constructor(private sjug: SJugadoresService, private srick: SrandmService, //private loadctrl: LoadingController,
    private sequi: SEquiposService) {
    this.url = `${environment.apiURL}/equipos`;
  }

  ionViewWillEnter() {
    // this.getcaracthers();
    this.loaddatos();
  }

  // getcaracthers(event?: any) {

  //   this.srick.getAll().subscribe((res: any) => {
  //     this.personajes = res;
  //   }

  //   );
  // }

  loaddatos(event?: InfiniteScrollCustomEvent) {

    this.sjug.getAll().subscribe(
      (resp) => {
        this.jugadores = resp;
        console.log(this.jugadores);
        this.sequi.getAll().subscribe(
          (r) => {
            this.equipos=r;
            console.log(this.equipos);
            event?.target.complete();
          });
      }
    )
  }
}
