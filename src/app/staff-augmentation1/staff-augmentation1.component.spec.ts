import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAugmentation1Component } from './staff-augmentation1.component';

describe('StaffAugmentation1Component', () => {
  let component: StaffAugmentation1Component;
  let fixture: ComponentFixture<StaffAugmentation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAugmentation1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffAugmentation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
