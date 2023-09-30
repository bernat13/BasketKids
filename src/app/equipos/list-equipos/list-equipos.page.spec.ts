import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEquiposPage } from './list-equipos.page';

describe('ListEquiposPage', () => {
  let component: ListEquiposPage;
  let fixture: ComponentFixture<ListEquiposPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListEquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
