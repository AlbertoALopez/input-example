import type { Course } from 'types';

export const matchCourse = (course: Course, query: string) => {
  const { courseDepartment, courseNumber, courseSemester, courseYear } = course;
  const courseName = `${courseDepartment} ${courseNumber} ${courseSemester} ${courseYear}`;
  const queryLower = query.toLowerCase();
  
  if (courseName.toLowerCase().includes(queryLower) ||
      courseName.toLowerCase().includes(queryLower)) {
    return true;
  }
};
