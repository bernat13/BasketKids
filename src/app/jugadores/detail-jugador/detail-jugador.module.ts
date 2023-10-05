import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailJugadorPageRoutingModule } from './detail-jugador-routing.module';

import { DetailJugadorPage } from './detail-jugador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailJugadorPageRoutingModule,ComponentsModule
  ],
  declarations: [DetailJugadorPage]
})
export class DetailJugadorPageModule {}
