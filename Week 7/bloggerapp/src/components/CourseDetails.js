import React from 'react';

const courses = [
  { id: 1, name: 'React Basics', duration: '4 weeks' },
  { id: 2, name: 'Advanced React', duration: '6 weeks' }
];

export default function CourseDetails({ showExtras }) {
  return (
    <div className="card">
      <h2>Course Details</h2>
      {courses.length > 0 ? (
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No course details available.</p>
      )}
      {!showExtras && <p>Course details display only when extra content is enabled.</p>}
    </div>
  );
}
