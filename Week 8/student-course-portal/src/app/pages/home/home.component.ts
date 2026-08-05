import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.totalCourses = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
