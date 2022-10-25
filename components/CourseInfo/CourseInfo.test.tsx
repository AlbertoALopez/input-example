import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import CourseInfo from './CourseInfo';

describe('CourseInfo', () => {
  it('renders a course title', () => {
    const course = {
      courseDepartment: 'CS',
      courseNumber: '111',
      courseYear: '2020',
      courseSemester: 'Fall',
    };

    render(<CourseInfo course={course} />);

    const courseTitle = screen.getByTestId('courseTitle');

    expect(courseTitle).toHaveTextContent('CS 111');
  });

  it('renders course info', () => {
    const course = {
      courseDepartment: 'CS',
      courseNumber: '111',
      courseYear: '2020',
      courseSemester: 'Fall',
    };

    render(<CourseInfo course={course} />);

    const courseInfo = screen.getByTestId('courseInfo');

    expect(courseInfo).toHaveTextContent('Department:CS');
    expect(courseInfo).toHaveTextContent('Number:111');
    expect(courseInfo).toHaveTextContent('Year:2020');
    expect(courseInfo).toHaveTextContent('Semester:Fall');
  });
});