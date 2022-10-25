import { useContext, useState } from 'react';

import type { Course } from 'types';
import { CourseContext } from 'contexts/index';
import { matchCourse } from 'utils/index';

const useSearch = () => {
  const courses = useContext(CourseContext);
  const [value, setValue] = useState('');
  const [course, setCourse] = useState({} as Course);
  const [error, setError] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (!event.target.value) {
      setError(false);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let searchResults = [];
    event.preventDefault();

    if (value) {
      searchResults = courses?.filter((course) => {
        return matchCourse(course, value);
      });

      if (searchResults.length) {
        setCourse(searchResults[0]);
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return {
    value,
    course,
    error,
    onChange,
    onSubmit,
  };
};

export default useSearch;
