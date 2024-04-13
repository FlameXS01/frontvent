import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalProdComponent } from './national-prod.component';

describe('NationalProdComponent', () => {
  let component: NationalProdComponent;
  let fixture: ComponentFixture<NationalProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalProdComponent]
    });
    fixture = TestBed.createComponent(NationalProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
