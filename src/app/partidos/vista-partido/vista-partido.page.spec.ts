import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaPartidoPage } from './vista-partido.page';

describe('VistaPartidoPage', () => {
  let component: VistaPartidoPage;
  let fixture: ComponentFixture<VistaPartidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaPartidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
