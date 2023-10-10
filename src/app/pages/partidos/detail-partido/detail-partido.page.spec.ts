import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPartidoPage } from './detail-partido.page';

describe('DetailPartidoPage', () => {
  let component: DetailPartidoPage;
  let fixture: ComponentFixture<DetailPartidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailPartidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
