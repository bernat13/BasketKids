import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEquiposPageRoutingModule } from './list-equipos-routing.module';

import { ListEquiposPage } from './list-equipos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEquiposPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListEquiposPage]
})
export class ListEquiposPageModule {}
