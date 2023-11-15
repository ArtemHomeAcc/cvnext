import mongoConnect from '@/services/mongo';
import {
  httpAddNewProject,
  httpGetAllProjects,
  httpUpdateProject,
} from '../../../helpers/project.controller/project.controller';

await mongoConnect();

async function handler(req, res) {
  if (req.method === 'POST') {
    httpAddNewProject(req, res);
  }

  if (req.method === 'GET') {
    httpGetAllProjects(req, res);
  }

  if (req.method === 'PUT') {
    httpUpdateProject(req, res);
  }
}

export default handler;
