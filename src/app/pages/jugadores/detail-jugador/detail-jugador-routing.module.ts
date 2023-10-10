import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailJugadorPage } from './detail-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: DetailJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailJugadorPageRoutingModule {}
