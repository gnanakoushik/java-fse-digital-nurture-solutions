import { createAction, props } from '@ngrx/store';

export const enrollCourse = createAction('[Enrollment] Enroll Course', props<{ courseId: number }>());
export const unenrollCourse = createAction('[Enrollment] Unenroll Course', props<{ courseId: number }>());
export const loadEnrollment = createAction('[Enrollment] Load Enrollment');
export const loadEnrollmentSuccess = createAction('[Enrollment] Load Enrollment Success', props<{ enrolledCourseIds: number[] }>());
export const loadEnrollmentFailure = createAction('[Enrollment] Load Enrollment Failure', props<{ error: string }>());
export const enrollCourseSuccess = createAction('[Enrollment] Enroll Course Success', props<{ courseId: number }>());
export const enrollCourseFailure = createAction('[Enrollment] Enroll Course Failure', props<{ error: string }>());
export const unenrollCourseSuccess = createAction('[Enrollment] Unenroll Course Success', props<{ courseId: number }>());
export const unenrollCourseFailure = createAction('[Enrollment] Unenroll Course Failure', props<{ error: string }>());
