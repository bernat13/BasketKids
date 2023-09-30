import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './modals/add/add.component';
import {HttpClientModule} from '@angular/common/http'
import { ItemcirculoComponent } from './component/itemcirculo/itemcirculo.component';
import { GravatarComponent } from './component/gravatar/gravatar.component';

@NgModule({
  declarations: [AppComponent,AddComponent],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
