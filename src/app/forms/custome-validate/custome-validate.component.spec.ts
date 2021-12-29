import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeValidateComponent } from './custome-validate.component';

describe('CustomeValidateComponent', () => {
  let component: CustomeValidateComponent;
  let fixture: ComponentFixture<CustomeValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
