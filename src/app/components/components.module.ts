import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';
import { ItemcircleComponent } from './itemcircle/itemcircle.component';
import { AddComponent } from './add/add.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
//import { AddComponent } from './add/add.component';
//import { AddComponent } from './add/add.component';




@NgModule({
  declarations: [SaludaComponent,ItemcircleComponent,AddComponent,HeaderComponent,CustomInputComponent],
  imports: [
    CommonModule,IonicModule,FormsModule,ReactiveFormsModule
  ],
  exports:[SaludaComponent,ItemcircleComponent,AddComponent,HeaderComponent,CustomInputComponent,ReactiveFormsModule]
})
export class ComponentsModule { }
