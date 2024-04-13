import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeinProductComponent } from './forein-product.component';

describe('ForeinProductComponent', () => {
  let component: ForeinProductComponent;
  let fixture: ComponentFixture<ForeinProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeinProductComponent]
    });
    fixture = TestBed.createComponent(ForeinProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
