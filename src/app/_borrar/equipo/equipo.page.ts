import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {
  id: any;
  constructor(
    private activateroute: ActivatedRoute
  ) {


  }

  ngOnInit() {
    this.id = this.activateroute.snapshot.paramMap.get("id");
    console.log(this.id);

  }

}
