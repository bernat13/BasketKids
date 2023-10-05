import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SEquiposService } from 'src/app/services/sequipos.service';

@Component({
  selector: 'app-detail-equipo',
  templateUrl: './detail-equipo.page.html',
  styleUrls: ['./detail-equipo.page.scss'],
})
export class DetailEquipoPage {
  nombre: string;
  equipo: any;
  id: string;
  titulo ='';
  constructor(private _route: ActivatedRoute, private sequi: SEquiposService) {
    this.id = _route.snapshot.paramMap.get("id")!;
    this.nombre = this.id;
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.cargardatos();
  }
  async cargardatos(event?: InfiniteScrollCustomEvent) {

    // const load = await this.loadctrl.create({
    //   message: "Cargando.......",
    //   spinner: "bubbles"
    // });
  // await load.present();
this.sequi.get(this.id).subscribe(
  (resp) => {
   // load.dismiss;
    let e = JSON.stringify(resp);
    this.equipo = JSON.parse(e);
    this.titulo=this.equipo.nombre;
    console.log(this.equipo);
    event?.target.complete();
   // console.log("dismis");
  //  load.dismiss;
  //  console.log("dismis2");
  },
  (err) => {
    console.log(err.message);
 //   load.dismiss;
  }
);
//load.dismiss;


  }
}
