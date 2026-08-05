import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  searchTerm = '';
  private subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.subscription.add(
      this.store.select(selectAllCourses).subscribe((courses) => {
        this.courses = courses;
        this.applySearch();
      })
    );

    const search = this.route.snapshot.queryParamMap.get('search');
    if (search) {
      this.searchTerm = search;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openCourse(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  updateSearch(): void {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
    this.applySearch();
  }

  private applySearch(): void {
    const search = this.searchTerm.trim().toLowerCase();
    if (!search) {
      return;
    }

    this.courses = this.courses.filter((course) => course.name.toLowerCase().includes(search));
  }
}
