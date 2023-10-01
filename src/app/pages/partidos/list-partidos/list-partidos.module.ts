import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPartidosPageRoutingModule } from './list-partidos-routing.module';

import { ListPartidosPage } from './list-partidos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    ListPartidosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListPartidosPage] 
})
export class ListPartidosPageModule {}
