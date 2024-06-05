const User = require('../model/user')
const Course = require('../model/course')
const RegistrationDAO = require('../DAO/registrationDAO')

// Obtener todos las matriculas
exports.getRegistrations = async (req, res) => {
  try {
    const registrationDAO = new RegistrationDAO()
    const registrations = await registrationDAO.findAll()
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las matriculas' });
  }
};

// Crear una nueva matricula
exports.createRegistration = async (req, res) => {
  try {
    const registrationData = req.body
    const user = await User.findById(registrationData.user_id);
    const course = await Course.findById(registrationData.course_id);
    const data = {
      user_id: user.id,
      course_id: course.id
    }

    const registrationDAO = new RegistrationDAO()
    const registrationSave = await registrationDAO.create(data)
    res.json(registrationSave);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.searchCoursesRegistrations = async (req, res) => {
  try {
    const { user_id, status } = req.query;
    const filter = { user_id: user_id, status: status }
    const registrationDAO = new RegistrationDAO()
    const registrationData = await registrationDAO.searchCoursesRegistrations(filter)

    res.status(200).json(registrationData)

  } catch (error) {
    res.status(500).json( error );
  }
};