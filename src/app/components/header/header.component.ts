import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
@Input() titulo!: string;
@Input() menu!: string;
@Input() subtitulo!: string;

  constructor() { }

  ngOnInit() {}

}
