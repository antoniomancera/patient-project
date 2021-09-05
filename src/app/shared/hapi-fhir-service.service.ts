import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './padientDto/patient';

@Injectable({
  providedIn: 'root',
})
export class HapiFhirServiceService {
  constructor(public http: HttpClient) {}

  public getPatientsById(patientId: string): Observable<Patient[]> {
    return this.http
      .get<any>('http://hapi.fhir.org/baseR4/Patient?_id=' + patientId)
      .pipe(map((data) => data.entry));
  }

  public getRandomPatients(): Observable<Patient[]> {
    return this.http
      .get<any>('http://hapi.fhir.org/baseR4/Patient?')
      .pipe(map((data) => data.entry));
  }
}
