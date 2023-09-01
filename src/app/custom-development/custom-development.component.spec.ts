import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDevelopmentComponent } from './custom-development.component';

describe('CustomDevelopmentComponent', () => {
  let component: CustomDevelopmentComponent;
  let fixture: ComponentFixture<CustomDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
