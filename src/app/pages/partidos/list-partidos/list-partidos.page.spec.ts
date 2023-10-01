import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPartidosPage } from './list-partidos.page';

describe('ListPartidosPage', () => {
  let component: ListPartidosPage;
  let fixture: ComponentFixture<ListPartidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListPartidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
