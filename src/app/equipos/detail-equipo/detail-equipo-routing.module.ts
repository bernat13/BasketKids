import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEquipoPage } from './detail-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEquipoPageRoutingModule {}
