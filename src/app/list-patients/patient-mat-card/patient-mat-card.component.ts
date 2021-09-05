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
  p3: Patient[] = [];
  p1: Patient = this.patientListRandom[0];
  p: Patient[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    console.log(this.storageService.patientListRandom);

    console.log('asdasdasd' + this.p);
  }

  ngOnChanges() {
    console.log('3');
    this.getPatientsDefined();
  }

  getPatientsDefined() {
    console.log('antes' + this.patientListRandom.length);
    this.patientListRandom.filter((data) => {
      data.resource.id == '1293520';
    });
    console.log('despues' + this.patientListRandom.length);
    this.p3 = this.patientListRandom;
  }
}
