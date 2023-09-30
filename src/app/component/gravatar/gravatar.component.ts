import { Component,Input, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/cjs/md5';
@Component({
  selector: 'gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.scss'],
})
export class GravatarComponent  implements OnInit {
  @Input() email!: string
  @Input() text!:string
  ruta:string;
  constructor() {
    this.email ='';
    this.ruta=''
   }

  ngOnInit() {
    console.log(this.email);
    this.ruta= 'https://www.gravatar.com/avatar/'+Md5.hashStr(this.email);;
 
  }

}
