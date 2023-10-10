import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpartidosService } from 'src/app/services/spartidos.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-detail-partido',
  templateUrl: './detail-partido.page.html',
  styleUrls: ['./detail-partido.page.scss'],
})
export class DetailPartidoPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;


  swiperactive(id: any) {
         while (id !=  this.swiperRef?.nativeElement.swiper.activeIndex) {
      
      if (id < this.swiperRef?.nativeElement.swiper.activeIndex) {
        this.swiperRef?.nativeElement.swiper.slidePrev();
      } else {
        this.swiperRef?.nativeElement.swiper.slideNext();
      }
       }
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
  nombre: string;
  partido: any;
  id: string;
  titulo = '';
  constructor(
    private _route: ActivatedRoute,
    private spartidos: SpartidosService
  ) {
    this.id = _route.snapshot.paramMap.get("id")!;
    this.nombre = this.id;

  }


  ngOnInit() {
  }
  ionViewWillEnter() {
    this.cargardatos();
  }
  async cargardatos() {

    this.spartidos.get(this.id).subscribe(
      (resp) => {
        let e = JSON.stringify(resp);
        this.partido = JSON.parse(e);
        console.log(this.partido);
      },
      (err) => {
        console.log(err.message);
      }
    );


  }
}
