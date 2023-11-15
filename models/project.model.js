import projectDB from './project.mongo';

export async function addNewProject(project) {
  const existingProject = await projectDB.findOne({
    name: project.name,
  });

  if (!existingProject) {
    const newProject = projectDB({ ...project });
    const savedProject = await newProject.save();
    return savedProject;
  } else {
    return 'The project is existing. Please rename';
  }
}

export async function getAllProjects() {
  const listProjects = await projectDB.find().populate('course');
  return listProjects;
}

export async function updateProject(data) {
  await projectDB.findOneAndUpdate({ name: data.name }, data, { upsert: true });
  const updatedProject = await projectDB.find({ name: data.name });
  return updatedProject;
}
