import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import {
  enrollCourse,
  enrollCourseFailure,
  enrollCourseSuccess,
  loadEnrollment,
  loadEnrollmentFailure,
  loadEnrollmentSuccess,
  unenrollCourse,
  unenrollCourseFailure,
  unenrollCourseSuccess
} from './enrollment.actions';

@Injectable()
export class EnrollmentEffects {
  loadEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEnrollment),
      mergeMap(() =>
        of([]).pipe(
          delay(300),
          map((enrolledCourseIds: number[]) => loadEnrollmentSuccess({ enrolledCourseIds })),
          catchError((error) => of(loadEnrollmentFailure({ error: error instanceof Error ? error.message : 'Failed to load enrollment' })))
        )
      )
    )
  );

  enrollCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enrollCourse),
      mergeMap(({ courseId }) =>
        of(courseId).pipe(
          delay(200),
          map((id) => enrollCourseSuccess({ courseId: id })),
          catchError((error) => of(enrollCourseFailure({ error: error instanceof Error ? error.message : 'Failed to enroll course' })))
        )
      )
    )
  );

  unenrollCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unenrollCourse),
      mergeMap(({ courseId }) =>
        of(courseId).pipe(
          delay(200),
          map((id) => unenrollCourseSuccess({ courseId: id })),
          catchError((error) => of(unenrollCourseFailure({ error: error instanceof Error ? error.message : 'Failed to unenroll course' })))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
