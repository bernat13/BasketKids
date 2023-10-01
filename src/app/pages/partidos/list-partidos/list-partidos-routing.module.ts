import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPartidosPage } from './list-partidos.page';

const routes: Routes = [
  {
    path: '',
    component: ListPartidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPartidosPageRoutingModule {}
