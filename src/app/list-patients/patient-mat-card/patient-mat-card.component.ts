import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/padientDto/patient';
import { StorageService } from 'src/app/shared/storageService/storage.service';

@Component({
  selector: 'app-patient-mat-card',
  templateUrl: './patient-mat-card.component.html',
  styleUrls: ['./patient-mat-card.component.css'],
})
export class PatientMatCardComponent implements OnInit {
  @Input() patientListRandom: Patient[] = [];
  patientList: Patient[] = [];
  p1: Patient = this.patientListRandom[0];
  p: Patient[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.patientList = this.patientListRandom;
  }
}
