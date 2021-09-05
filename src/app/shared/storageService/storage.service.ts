import { Injectable } from '@angular/core';

import { Patient } from '../padientDto/patient';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  patientListRandom: Patient[] = [];
  constructor() {}
}
