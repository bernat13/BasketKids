import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';
import { ItemcircleComponent } from './itemcircle/itemcircle.component';
import { AddComponent } from './add/add.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AddComponent } from './add/add.component';
//import { AddComponent } from './add/add.component';




@NgModule({
  declarations: [SaludaComponent,ItemcircleComponent,AddComponent],
  imports: [
    CommonModule,IonicModule,FormsModule,ReactiveFormsModule
  ],
  exports:[SaludaComponent,ItemcircleComponent,AddComponent]
})
export class ComponentsModule { }
