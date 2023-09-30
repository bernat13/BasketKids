import { Component, Input, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/cjs/md5';

@Component({
  selector: 'itemcirculo',
  templateUrl: './itemcirculo.component.html',
  styleUrls: ['./itemcirculo.component.scss'],
})
export class ItemcirculoComponent implements OnInit {
  @Input() email!: string
  @Input() text!: string
  @Input() nombre!: string
  @Input() ruta!: string

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
