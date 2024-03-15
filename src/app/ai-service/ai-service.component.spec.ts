import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiServiceComponent } from './ai-service.component';

describe('AiServiceComponent', () => {
  let component: AiServiceComponent;
  let fixture: ComponentFixture<AiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
