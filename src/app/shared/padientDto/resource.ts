import { Meta } from '@angular/platform-browser';
import { Address } from './address';
import { MedicationCOdeableConcept } from './medication-codeable-concept';
import { Name } from './name';

export interface Resource {
  address: Address[];
  birthDate: string;
  id: string;
  medicationCodeableConcept: MedicationCOdeableConcept;
  meta: Meta;
  name: Name[];
}
