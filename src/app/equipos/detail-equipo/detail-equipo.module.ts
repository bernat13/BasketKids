import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEquipoPageRoutingModule } from './detail-equipo-routing.module';

import { DetailEquipoPage } from './detail-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEquipoPageRoutingModule
  ],
  declarations: [DetailEquipoPage]
})
export class DetailEquipoPageModule {}
