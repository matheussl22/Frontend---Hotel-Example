import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCheckinComponent } from './lista-checkin.component';

describe('ListaCheckinComponent', () => {
  let component: ListaCheckinComponent;
  let fixture: ComponentFixture<ListaCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
