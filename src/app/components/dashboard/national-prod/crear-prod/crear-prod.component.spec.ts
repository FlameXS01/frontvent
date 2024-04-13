import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalProductComponent } from './crear-prod.component';

describe('CrearProdComponent', () => {
  let component: NationalProductComponent;
  let fixture: ComponentFixture<NationalProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalProductComponent]
    });
    fixture = TestBed.createComponent(NationalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
