import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListJugadoresPage } from './list-jugadores.page';

describe('ListJugadoresPage', () => {
  let component: ListJugadoresPage;
  let fixture: ComponentFixture<ListJugadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListJugadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
