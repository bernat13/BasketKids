import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaPartidoPageRoutingModule } from './vista-partido-routing.module';

import { VistaPartidoPage } from './vista-partido.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaPartidoPageRoutingModule,ComponentsModule
  ],
  declarations: [VistaPartidoPage]
})
export class VistaPartidoPageModule {}
