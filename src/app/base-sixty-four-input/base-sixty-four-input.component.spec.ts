import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBaseSixtyFourInputComponent } from './app-base-sixty-four-input.component';

describe('AppBaseSixtyFourInputComponent', () => {
  let component: AppBaseSixtyFourInputComponent;
  let fixture: ComponentFixture<AppBaseSixtyFourInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBaseSixtyFourInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBaseSixtyFourInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
