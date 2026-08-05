import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Angular Basics', code: 'ANG101', credits: 3, gradeStatus: 'passed' },
    { id: 2, name: 'TypeScript Fundamentals', code: 'TS102', credits: 2, gradeStatus: 'pending' },
    { id: 3, name: 'Web Development', code: 'WEB103', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Reactive Programming', code: 'RX104', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'UI/UX Design', code: 'UX105', credits: 2, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return [...this.courses];
  }

  fetchCourses(): Observable<Course[]> {
    return of([...this.courses]).pipe(delay(300));
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
