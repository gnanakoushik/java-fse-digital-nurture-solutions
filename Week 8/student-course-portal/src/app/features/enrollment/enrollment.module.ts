import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentFormComponent } from '../../pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from '../../pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { UnsavedChangesGuard } from '../../guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: EnrollmentFormComponent },
  { path: 'reactive', component: ReactiveEnrollmentFormComponent, canDeactivate: [UnsavedChangesGuard] }
];

@NgModule({
  declarations: [EnrollmentFormComponent, ReactiveEnrollmentFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class EnrollmentModule {}
