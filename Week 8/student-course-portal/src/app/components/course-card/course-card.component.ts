import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  constructor(public enrollmentService: EnrollmentService) {}

  toggleEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4
    };
  }
}
