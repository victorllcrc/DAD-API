const Registration = require('../model/registration');
const User = require('../model/user')
const Course = require('../model/course')

// Obtener todos las matriculas
exports.getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
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

    const newRegistration = new Registration({
        user_id: user.id,
        course_id: course.id
    })
    const registrationSave = await newRegistration.save();
    res.json(registrationSave);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};