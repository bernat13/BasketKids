import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquiposPageRoutingModule } from './equipos-routing.module';

import { EquiposPage } from './equipos.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EquiposPageRoutingModule
  ],
  declarations: [EquiposPage]
})
export class EquiposPageModule {}
