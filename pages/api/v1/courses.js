import mongoConnect from '@/services/mongo';
import {
  httpAddNewCourse,
  httpGetAllCourses,
  httpUpdateCourse,
} from '../../../helpers/courses.controller/course.controller';

await mongoConnect(); 

async function handler(req, res) {
  if (req.method === 'POST') {
    httpAddNewCourse(req, res);
  }

  if (req.method === 'GET') {
    httpGetAllCourses(req, res);
  }

  if (req.method === 'PUT') {
    httpUpdateCourse(req, res);
  }
}

export default handler;
