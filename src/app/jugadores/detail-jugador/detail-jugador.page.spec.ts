import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailJugadorPage } from './detail-jugador.page';

describe('DetailJugadorPage', () => {
  let component: DetailJugadorPage;
  let fixture: ComponentFixture<DetailJugadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailJugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
