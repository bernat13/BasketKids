import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SpartidosService } from 'src/app/services/spartidos.service';

@Component({
  selector: 'app-list-partidos',
  templateUrl: './list-partidos.page.html',
  styleUrls: ['./list-partidos.page.scss'],
})
export class ListPartidosPage {
  list: any
  constructor(private _route: ActivatedRoute, private spartido: SpartidosService) {

  }



  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cargardatos();
  }

  async cargardatos() {

    this.spartido.getAll().subscribe(
      (resp) => {
        let e = JSON.stringify(resp);
        this.list = JSON.parse(e);
        console.log(this.list);
      },
      (err) => {
        console.log(err.message);
      }
    );


  }
}
