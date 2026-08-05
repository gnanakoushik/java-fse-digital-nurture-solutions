import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent }
    ]
  },
  { path: 'profile', component: StudentProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'enroll',
    loadChildren: () => import('./features/enrollment/enrollment.module').then((m) => m.EnrollmentModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
