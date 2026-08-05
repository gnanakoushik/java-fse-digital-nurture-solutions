import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CreditLabelPipe } from './pipes/credit-label.pipe';
import { FooterComponent } from './footer.component';
import { CourseSummaryWidgetComponent } from './components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from './components/notification/notification.component';
import { courseReducer } from './store/course/course.reducer';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';
import { CourseEffects } from './store/course/course.effects';
import { EnrollmentEffects } from './store/enrollment/enrollment.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CourseListComponent,
    StudentProfileComponent,
    CourseDetailComponent,
    CoursesLayoutComponent,
    NotFoundComponent,
    CourseCardComponent,
    HighlightDirective,
    CreditLabelPipe,
    FooterComponent,
    CourseSummaryWidgetComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ courses: courseReducer, enrollment: enrollmentReducer }),
    EffectsModule.forRoot([CourseEffects, EnrollmentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
