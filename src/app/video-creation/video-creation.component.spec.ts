import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCreationComponent } from './video-creation.component';

describe('VideoCreationComponent', () => {
  let component: VideoCreationComponent;
  let fixture: ComponentFixture<VideoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
