const Course = require('../model/course');

// Obtener todos los cursos
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los cursos' });
  }
};

// Crear un nuevo curso
exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const course = await newCourse.save();
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear un nuevo curso' });
  }
};
exports.getCoursesById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el curso' });
  }
};