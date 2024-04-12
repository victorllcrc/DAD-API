const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
})

const Registration = mongoose.model('Registratio', registrationSchema);

module.exports = Registration;