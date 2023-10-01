import { Component, Input, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/cjs/md5';

@Component({
  selector: 'itemcircle',
  templateUrl: './itemcircle.component.html',
  styleUrls: ['./itemcircle.component.scss'],
})
export class ItemcircleComponent  implements OnInit {
  @Input() email!: string
   @Input() text!: string
   @Input() nombre!: string
   @Input() ruta!: string
  //email!: string
   constructor() { 
     this.ruta='';
   this.email=''
 }

ngOnInit() {
   if (this.email != '') {
    this.ruta = 'https://www.gravatar.com/avatar/' + Md5.hashStr(this.email);;
   }
}

}
