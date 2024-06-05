const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    syllabus: {
        type: String,
        required: true,
    },
    description_target_audience: {
        type: String,
        required: true
    },
    description_working_market: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    module_courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ModuleCourse' }]
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
