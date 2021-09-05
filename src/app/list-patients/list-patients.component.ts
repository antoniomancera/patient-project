import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HapiFhirServiceService } from '../shared/hapi-fhir-service.service';
import { Patient } from '../shared/padientDto/patient';
import { StorageService } from '../shared/storageService/storage.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css'],
})
export class ListPatientsComponent implements OnInit {
  patientListWithMedicationRequest: Patient[] = [];
  patientListRandom: Patient[] = [];
  idWithMedicationRequest: string = '1293520';
  p: Patient[] = [];

  constructor(
    private hapiService: HapiFhirServiceService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getPatientsById(this.idWithMedicationRequest);
    this.getPatients();
    // this.getPatientsDefined();
    // // console.log('123' + this.patientListWithMedicationRequest);
    // // this.patientListWithMedicationRequest.concat(this.patientListRandom);
  }
  getPatientsById(patientId: string) {
    this.hapiService.getPatientsById(patientId).subscribe((data) => {
      this.patientListWithMedicationRequest = data;
      console.log(data);
    });
  }

  getPatients() {
    this.hapiService
      .getRandomPatients()
      .pipe(
        map((items) => items.filter((data) => data.resource.name != undefined))
      )
      .subscribe((data) => {
        this.patientListRandom =
          this.patientListWithMedicationRequest.concat(data);
        this.storageService.patientListRandom = this.patientListRandom;

        console.log(data);
      });
  }

  // getPatientsDefined() {
  //   this.p = this.patientListRandom.filter((data) => {
  //     data.resource.name != undefined;
  //   });
  //   console.log(this.p + 'sdassdasdad2313123123');
  // }
}
