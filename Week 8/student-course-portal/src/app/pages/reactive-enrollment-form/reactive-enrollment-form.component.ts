import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  return value?.startsWith('XX') ? { noCourseCode: true } : null;
}

function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const value = control.value as string;
      resolve(value.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    console.log('Form value:', this.enrollForm.value);
    console.log('Form raw value:', this.enrollForm.getRawValue());
  }
}
