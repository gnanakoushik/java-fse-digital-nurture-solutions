import { createReducer, on } from '@ngrx/store';
import { enrollCourse, enrollCourseFailure, enrollCourseSuccess, loadEnrollment, loadEnrollmentFailure, loadEnrollmentSuccess, unenrollCourse, unenrollCourseFailure, unenrollCourseSuccess } from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
  loading: boolean;
  error: string | null;
}

export const initialState: EnrollmentState = {
  enrolledCourseIds: [],
  loading: false,
  error: null
};

export const enrollmentReducer = createReducer(
  initialState,
  on(loadEnrollment, (state) => ({ ...state, loading: true, error: null })),
  on(loadEnrollmentSuccess, (state, { enrolledCourseIds }) => ({ ...state, loading: false, enrolledCourseIds })),
  on(loadEnrollmentFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(enrollCourse, (state) => ({ ...state, loading: true, error: null })),
  on(enrollCourseSuccess, (state, { courseId }) => ({ ...state, loading: false, enrolledCourseIds: [...state.enrolledCourseIds, courseId] })),
  on(enrollCourseFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(unenrollCourse, (state) => ({ ...state, loading: true, error: null })),
  on(unenrollCourseSuccess, (state, { courseId }) => ({ ...state, loading: false, enrolledCourseIds: state.enrolledCourseIds.filter((id) => id !== courseId) })),
  on(unenrollCourseFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
