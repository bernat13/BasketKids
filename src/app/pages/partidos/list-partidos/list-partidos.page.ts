import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-partidos',
  templateUrl: './list-partidos.page.html',
  styleUrls: ['./list-partidos.page.scss'],
})
export class ListPartidosPage implements OnInit {
   list =[{
    "fecha":"29/09/2023",
    "equipo_v":"PreMini Salesianos Betis",
    "equipo_l":"CB Fresas",
    "marcador_v":"123",
    "marcador_l":"110",
    "logo_l":"../../assets/logos/fresas.jpg",
    "logo_v":"../../assets/logos/betis.jpg",
  },
  {
    "fecha":"29/09/2023",
    "equipo_l":"PreMini Salesianos Betis",
    "equipo_v":"CB Fresas",
    "marcador_l":"-",
    "marcador_v":"-",
    "logo_l":"../../assets/logos/betis.jpg",
    "logo_v":"../../assets/logos/fresas.jpg",
  }]
  constructor() { }

  ngOnInit() {
  }

}
