import type { Course } from 'types';
import styles from './CourseInfo.module.css';

interface CourseInfoProps {
  course: Course;
};

const headingMap = {
  courseDepartment: 'Department',
  courseNumber: 'Number',
  courseYear: 'Year',
  courseSemester: 'Semester',
};

const CourseInfo = (props: CourseInfoProps) => {
  const { course } = props;
  const courseTitle = `${course.courseDepartment} ${course.courseNumber}`;

  return (
    <div className={styles.container} data-testid="courseInfo">
      <div
        data-testid="courseTitle"
        className={styles.courseTitle}
      >
        {courseTitle
      }</div>
      {course && Object.keys(course).map((key) => {
        return (
          <div key={key} className={styles.infoRow}>
            <span>{headingMap[key as keyof typeof headingMap]}:</span>
            <span>{course[key as keyof typeof course]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CourseInfo;
