import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMatCardComponent } from './patient-mat-card.component';

describe('PatientMatCardComponent', () => {
  let component: PatientMatCardComponent;
  let fixture: ComponentFixture<PatientMatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
