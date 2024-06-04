const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    status:{
        type: String,
        required: true,
        default: 'not-started'
    },
})

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;