import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPartidoPage } from './detail-partido.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPartidoPageRoutingModule {}
