import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCourseById } from '../../store/course/course.selectors';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course$?: Observable<Course | undefined>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course$ = this.store.select(selectCourseById, { id });
  }
}
