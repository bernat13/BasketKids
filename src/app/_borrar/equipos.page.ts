import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddComponent } from '../modals/add/add.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})


export class EquiposPage implements OnInit {
  listaEquipos: string[] ;

  formulario: FormGroup

guardar(){
  localStorage.setItem('lista',JSON.stringify(this.listaEquipos));
  console.log('persist');
  console.log(localStorage.getItem('lista'));

}
cargar(){
  this.listaEquipos= JSON.parse(localStorage.getItem("lista") || '[]');

}
  constructor(
    private modalController: ModalController
  ) {
   
    this.listaEquipos= [];
   // 
    this.formulario = new FormGroup({
      nombre: new FormControl()

    });

   // var lista = JSON.parse(localStorage.getItem('lista'));
  }

  ngOnInit(){
this.cargar();    
  }
//   onSubmit() {
//  this.listaEquipos.push(this.formulario.value.nombre)
//  this.guardar() ;
//   }
  onDelete(value: any) {
    this.listaEquipos = this.listaEquipos.filter(e => e != value);
    this.guardar() ;
  }
  async modalAddEquipo() {
    const modal = await this.modalController.create({
      component: AddComponent,
      componentProps: {tipo:'Equipo'}
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.listaEquipos.push(data);
      this.guardar();
    }
  }
}
