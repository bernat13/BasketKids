import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';
import { ItemcircleComponent } from './itemcircle/itemcircle.component';




@NgModule({
  declarations: [SaludaComponent,ItemcircleComponent],
  imports: [
    CommonModule
  ],
  exports:[SaludaComponent,ItemcircleComponent]
})
export class ComponentsModule { }
