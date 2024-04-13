import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdComponent } from './crear-prod.component';

describe('ListarProdComponent', () => {
  let component: ListarProdComponent;
  let fixture: ComponentFixture<ListarProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProdComponent]
    });
    fixture = TestBed.createComponent(ListarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
