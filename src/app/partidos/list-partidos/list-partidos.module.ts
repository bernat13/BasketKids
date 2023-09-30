import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPartidosPageRoutingModule } from './list-partidos-routing.module';

import { ListPartidosPage } from './list-partidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPartidosPageRoutingModule
  ],
  declarations: [ListPartidosPage]
})
export class ListPartidosPageModule {}
