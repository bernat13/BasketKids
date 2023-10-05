import { Component } from '@angular/core';
import { SJugadoresService } from '../../services/sjugadores.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SEquiposService } from 'src/app/services/sequipos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jugadores: any;
  equipos: any;

  constructor(private sjug: SJugadoresService, private loadctrl: LoadingController, private sequi: SEquiposService) {

  }
  ionViewWillEnter() {
    this.loaddatos();
  }
  async loaddatos(event?: InfiniteScrollCustomEvent) {

    const loading = await this.loadctrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present();
    
    this.sjug.getAll().subscribe(
      (resp) => {
        let liststring = JSON.stringify(resp);
        this.jugadores = JSON.parse(liststring);
        console.log(this.jugadores);
        this.sequi.getAll().subscribe(
          (r) => {
            loading.dismiss();
            let listequi = JSON.stringify(r);
            this.equipos = JSON.parse(listequi);
            console.log(this.equipos);
            event?.target.complete();
          }, (e) => {
            console.log(e.message);
            loading.dismiss;
          });
      },
      (err) => {
        console.log(err.message);
        loading.dismiss;
      }
    )


  }
}
