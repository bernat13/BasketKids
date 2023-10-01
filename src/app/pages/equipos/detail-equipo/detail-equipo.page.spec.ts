import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailEquipoPage } from './detail-equipo.page';

describe('DetailEquipoPage', () => {
  let component: DetailEquipoPage;
  let fixture: ComponentFixture<DetailEquipoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
