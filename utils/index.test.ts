import { matchCourse } from './index';

describe('matchCourse', function() {
  const course = {
    courseDepartment: 'CS',
    courseNumber: '1110',
    courseYear: '2020',
    courseSemester: 'Fall',
  };

  it('should match course name', () => {
    const query = '1110';
    expect(matchCourse(course, query)).toBe(true);
  });

  it('should match course department', () => {
    const query = 'CS';
    expect(matchCourse(course, query)).toBe(true);
  });

  it('should match course year', () => {
    const query = '2020';
    expect(matchCourse(course, query)).toBe(true);
  });

  it('should match partial queries', () => {
    expect(matchCourse(course, '20')).toBe(true);
    expect(matchCourse(course, 'f')).toBe(true);
    expect(matchCourse(course, 'Fall 2020')).toBe(true);
    expect(matchCourse(course, 'Fall 20')).toBe(true);
  });
});
