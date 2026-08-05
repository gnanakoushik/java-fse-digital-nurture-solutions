import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form.component';

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<ReactiveEnrollmentFormComponent> {
  canDeactivate(component: ReactiveEnrollmentFormComponent): boolean {
    if (component.enrollForm?.dirty) {
      return window.confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
}
