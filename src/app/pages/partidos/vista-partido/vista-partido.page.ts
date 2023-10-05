import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpartidosService } from 'src/app/services/spartidos.service';

@Component({
  selector: 'app-vista-partido',
  templateUrl: './vista-partido.page.html',
  styleUrls: ['./vista-partido.page.scss'],
})
export class VistaPartidoPage {
  nombre: string;
  partido: any;
  id: string;
  titulo ='';
  constructor(private _route: ActivatedRoute, private spartidos: SpartidosService) {
    this.id = _route.snapshot.paramMap.get("id")!;
    this.nombre = this.id;
  }


  ngOnInit() {
  }
  ionViewWillEnter() {
    this.cargardatos();
  }
  async cargardatos() {

this.spartidos.get(this.id).subscribe(
  (resp) => {
      let e = JSON.stringify(resp);
    this.partido = JSON.parse(e);
    console.log(this.partido);
    },
  (err) => {
    console.log(err.message);
  }
);


  }
}
