import { createContext, useContext, useMemo, useState } from 'react';

import type { Course } from 'types';
import type { ReactElement } from 'react';

interface CourseProviderProps {
  courses: Course[];
  children: ReactElement;
};

export const CourseContext = createContext([] as Course[]);

export const CourseProvider = (props: CourseProviderProps) => {
  const { children, courses } = props;
  const [value, setValue] = useState(courses);

  return (
    <CourseContext.Provider
      value={value}
    >
      {children}
    </CourseContext.Provider>
  );
};
