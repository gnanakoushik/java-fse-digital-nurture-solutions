import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  submitted = false;

  onSubmit(form: NgForm): void {
    this.submitted = true;
    console.log('Form value:', form.value);
    console.log('Form valid:', form.valid);
  }
}
