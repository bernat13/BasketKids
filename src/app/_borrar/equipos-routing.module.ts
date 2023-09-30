import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposPage } from './equipos.page';

const routes: Routes = [
  {
    path: '',
    component: EquiposPage
  },
  {
    path: 'list-equipos',
    loadChildren: () => import('./list-equipos/list-equipos.module').then( m => m.ListEquiposPageModule)
  },
  {
    path: 'detail-equipo',
    loadChildren: () => import('./detail-equipo/detail-equipo.module').then( m => m.DetailEquipoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposPageRoutingModule {}
