import { Component } from '@angular/core';
import { SJugadoresService } from '../../services/sjugadores.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jugadores:any;
  constructor(private sjug: SJugadoresService, private loadctrl: LoadingController) {

  }
  ionViewWillEnter() {
    this.loadJugadores();
  }
  async loadJugadores(event?: InfiniteScrollCustomEvent) {

    const loading = await this.loadctrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present(); 
    this.sjug.getAll().subscribe(
      (resp) => {
        loading.dismiss();
        let liststring = JSON.stringify(resp);
        console.log(liststring);
        this.jugadores = JSON.parse(liststring);
        console.log(this.jugadores);
        event?.target.complete();
      },
      (err) => {
        console.log("hooolaaaa")
        console.log(err.message);
        loading.dismiss;
      }
    )


  }
}
