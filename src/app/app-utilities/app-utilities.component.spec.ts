import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUtilitiesComponent } from './app-utilities.component';

describe('AppUtilitiesComponent', () => {
  let component: AppUtilitiesComponent;
  let fixture: ComponentFixture<AppUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
