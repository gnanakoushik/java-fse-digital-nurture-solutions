import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-summary-widget',
  template: '<div class="card"><h3>Course Summary</h3><p>Total courses: {{ courseCount$ | async }}</p></div>',
  styles: ['.card { padding: 12px; margin-bottom: 16px; }']
})
export class CourseSummaryWidgetComponent {
  courseCount$ = this.store.select('courses').pipe(map((state: any) => state.courses.length));

  constructor(private store: Store) {}
}
