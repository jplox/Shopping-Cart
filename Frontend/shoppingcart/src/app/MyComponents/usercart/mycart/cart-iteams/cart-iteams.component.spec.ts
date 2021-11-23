import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIteamsComponent } from './cart-iteams.component';

describe('CartIteamsComponent', () => {
  let component: CartIteamsComponent;
  let fixture: ComponentFixture<CartIteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartIteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
