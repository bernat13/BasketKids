import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListJugadoresPageRoutingModule } from './list-jugadores-routing.module';

import { ListJugadoresPage } from './list-jugadores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListJugadoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListJugadoresPage]
})
export class ListJugadoresPageModule {}
