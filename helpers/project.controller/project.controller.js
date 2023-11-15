import {
  addNewProject,
  getAllProjects,
  updateProject,
} from '../../models/project.model';

export function checkData(data, res) {
  if (
    !data.name ||
    !data.description.en.language ||
    !data.description.en.descr ||
    !data.description.ua.language ||
    !data.description.ua.descr ||
    !data.course ||
    !data.githubLink ||
    !data.gDiskLink
  ) {
    return res.status(400).json({
      error: 'Missing required property. Please check',
    });
  }
}

export async function httpAddNewProject(req, res) {
  const project = req.body;

  checkData(project, res);

  await addNewProject(project)
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function httpGetAllProjects(req, res) {
  await getAllProjects()
    .then((result) => {
      return res.status(200).json([...result]);
    })
    .catch((e) => {
      return res.status(500).json({ success: false, error: e });
    });
}

export async function httpUpdateProject(req, res) {
  const updatedInfo = req.body;

  checkData(updatedInfo, res);

  await updateProject(updatedInfo)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
    });
}
