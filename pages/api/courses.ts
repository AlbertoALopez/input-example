import type { NextApiRequest, NextApiResponse } from 'next';

import type { Course } from '../../types';
import { Courses } from './mocks';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Course[]>
) {
  res.status(200).json(Courses);
}
