import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { SEquiposService } from 'src/app/services/sequipos.service';
import { SJugadoresService } from 'src/app/services/sjugadores.service';

@Component({
  selector: 'bk-add',
  templateUrl: 'add.component.html',
})
export class AddComponent {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() tipo!: string

  jugadorForm = this.fb.group({
    nombre: ['', Validators.compose([Validators.required])],
    idEquipo: [],
    dorsal: ['', Validators.max(100)],
    anyonacimiento: ['', [Validators.required, Validators.max(2100)]]
  });
  listaequipos: any;
  constructor(private sjugador: SJugadoresService, private fb: FormBuilder, private sequipos: SEquiposService,private router:Router) {
    this.listaequipos=[];
    this.sequipos.getAll().subscribe((r) =>{
      let liststring = JSON.stringify(r);
      this.listaequipos = JSON.parse(liststring);

    console.log('viewwillenter', this.listaequipos);
   } );
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.jugadorForm.value, 'confirm');
  }

 

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      //  this.message = `Hello, ${ev.detail.data}!`;
      console.log("onwilldismiss:", ev.detail.data);
      
      this.sjugador.add(ev.detail.data).subscribe((s)=>{
        this.router.navigate(['/jugadores/']);
        this.modal.dismiss(null,'cancel');
            });
    }
  }
}
