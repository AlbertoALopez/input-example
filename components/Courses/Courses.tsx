import Button from '../SearchButton/SearchButton';
import CourseInfo from '../CourseInfo/CourseInfo';
import Input from '../SearchInput/SearchInput';
import styles from './Courses.module.css';
import useSearch from 'hooks';

const Courses = () => {
  const { value, course, error, onChange, onSubmit } = useSearch();

  return (
    <div className={styles.container}>
      <span
        className={styles.inputTitle}
        data-testid="inputTitle"
      >
        Course
      </span>
      <form
        onSubmit={onSubmit}
      >
        <div className={styles.inputContainer}>
          <Input value={value} onChange={onChange} hasError={error} />
          <Button disabled={!value} />
        </div>
        {error && (
          <label
            className={styles.errorLabel}
            htmlFor="course"
            data-testid="errorLabel"
          >
            Error: Could not parse course
          </label>
        )}
      </form>
      {!error && Object.keys(course).length !== 0 && (
        <CourseInfo course={course} />
      )}
    </div>
  );
};

export default Courses;
