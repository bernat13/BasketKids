import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GravatarComponent } from '../component/gravatar/gravatar.component';
import { ItemcirculoComponent } from '../component/itemcirculo/itemcirculo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ItemcirculoComponent]
})
export class HomePageModule {}
