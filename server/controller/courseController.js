const Course = require('../model/course');
const ModuleCourse = require('../model/module');
const Video = require('../model/video');

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
    const arrayModules = req.body.modules
    const module_courses_ids=[]
    for (const module of arrayModules) {
      const video_ids=[]
      for (const video of module.videos) {
        const newVideo = new Video(video)
        const dataVideo = await newVideo.save()
        video_ids.push(dataVideo._id)
      }
      const newModuleCourse = new ModuleCourse({title: module.title})
      for (const video_id of video_ids) {
        newModuleCourse.videos.push(video_id)
      }
      const dataModuleCourse = await newModuleCourse.save()
      module_courses_ids.push(dataModuleCourse._id)
      console.log(dataModuleCourse)
    }
    
    const newCourse = new Course(req.body.course);
    for (const module_courses_id of module_courses_ids) {
      
      newCourse.module_courses.push(module_courses_id)
    }
    const course = await newCourse.save();
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error });
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

exports.getCoursesByIdDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate({
      path: 'module_courses',
      populate: {
          path: 'videos',
          model: 'Video'
      }
  }).populate('module_courses.videos').exec();
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el curso' });
  }
};