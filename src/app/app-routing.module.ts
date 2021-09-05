import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPatientsComponent } from './list-patients/list-patients.component';

const routes: Routes = [
  {
    path: '',
    component: ListPatientsComponent,
  },
  {
    path: 'patients',
    component: ListPatientsComponent,
  },
  {
    path: '**',
    component: ListPatientsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
