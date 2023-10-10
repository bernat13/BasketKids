import { Component, OnInit } from '@angular/core';
import { SEquiposService } from 'src/app/services/sequipos.service';

@Component({
  selector: 'app-list-equipos',
  templateUrl: './list-equipos.page.html',
  styleUrls: ['./list-equipos.page.scss'],
})
export class ListEquiposPage implements OnInit {
  equipos: any;
  constructor(private sequipos: SEquiposService) { }

  ngOnInit() {
    this.sequipos.getAll().subscribe(s => {
      let cadena = JSON.stringify(s);
      this.equipos = JSON.parse(cadena);

    });
  }

}
