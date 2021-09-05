import { Component, OnInit } from '@angular/core';
import { HapiFhirServiceService } from '../shared/hapi-fhir-service.service';
import { Patient } from '../shared/padientDto/patient';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css'],
})
export class ListPatientsComponent implements OnInit {
  patientListWithMedicationRequest: Patient[] = [];
  patientListRandom: Patient[] = [];
  idWithMedicationRequest: string = '1293520';
  p: string = 'prueba';

  constructor(private hapiService: HapiFhirServiceService) {}

  ngOnInit(): void {
    this.getPatientsById(this.idWithMedicationRequest);
    this.getPatients();
    this.patientListWithMedicationRequest.concat(this.patientListRandom);
  }
  getPatientsById(patientId: string) {
    this.hapiService.getPatientsById(patientId).subscribe((data) => {
      this.patientListWithMedicationRequest = data;
      console.log(data);
    });
  }

  getPatients() {
    this.hapiService.getRandomPatients().subscribe((data) => {
      this.patientListRandom =
        this.patientListWithMedicationRequest.concat(data);
      console.log(data);
    });
  }
}
