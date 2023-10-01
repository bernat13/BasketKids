import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaPartidoPageRoutingModule } from './vista-partido-routing.module';

import { VistaPartidoPage } from './vista-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaPartidoPageRoutingModule
  ],
  declarations: [VistaPartidoPage]
})
export class VistaPartidoPageModule {}
