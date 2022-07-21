import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SporteventsComponent } from './sportevents.component';

describe('SporteventsComponent', () => {
  let component: SporteventsComponent;
  let fixture: ComponentFixture<SporteventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SporteventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SporteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
