import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaPartidoPage } from './vista-partido.page';

const routes: Routes = [
  {
    path: '',
    component: VistaPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaPartidoPageRoutingModule {}
