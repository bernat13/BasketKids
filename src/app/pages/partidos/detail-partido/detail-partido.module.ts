import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPartidoPageRoutingModule } from './detail-partido-routing.module';

import { DetailPartidoPage } from './detail-partido.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPartidoPageRoutingModule,ComponentsModule
  ],
  declarations: [DetailPartidoPage,],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class DetailPartidoPageModule {}
