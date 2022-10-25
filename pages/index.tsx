import type { Course } from 'types';
import { CourseProvider } from 'contexts';
import Courses from '../components/Courses/Courses';
import Head from 'next/head';
import { Courses as MockCourses } from 'pages/api/mocks';
import styles from 'styles/Home.module.css';

interface HomeProps {
  courses: Course[];
}

const Home = (props: HomeProps) => {
  const { courses } = props;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <CourseProvider courses={courses}>
            <Courses />
          </CourseProvider>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Magic
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      courses: MockCourses,
    },
  };
}

export default Home
