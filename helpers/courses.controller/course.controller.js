import { addNewCourse, getAllCourses, updateCourse } from '../../models/courses.model';

export async function httpAddNewCourse(req, res) {
  const course = req.body;

  if (!course.name || !course.description) {
    return res.status(400).json({ error: 'Missing required property. Please check' });
  }
  await addNewCourse(course)
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function httpGetAllCourses(req, res) {
  await getAllCourses()
    .then((result) => {
      return res.status(200).json([...result]);
    })
    .catch((e) => {
      return res.status(500).json({ success: false, error: e });
    });
}

export async function httpUpdateCourse(req, res) {
  const newInfo = req.body;

  await updateCourse(newInfo)
    .then((result) => {
      return res.status(200).json([...result]);
    })
    .catch((e) => {
      return res.status(500).json({ success: false, error: e });
    });
}
