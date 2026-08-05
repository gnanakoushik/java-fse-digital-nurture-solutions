import { createReducer, on } from '@ngrx/store';
import { loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.actions';
import { Course } from '../../models/course.model';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialState,
  on(loadCourses, (state) => ({ ...state, loading: true, error: null })),
  on(loadCoursesSuccess, (state, { courses }) => ({ ...state, loading: false, courses })),
  on(loadCoursesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
