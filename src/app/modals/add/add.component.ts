import { Component,Input,OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input() tipo!: string
  name: string;

  constructor(private modalCtrl: ModalController) {
    this.name='';
  }
ngOnInit(): void {
  
}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}