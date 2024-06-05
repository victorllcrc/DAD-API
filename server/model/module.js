const mongoose = require('mongoose');

const moduleCourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
})

const ModuleCourse = mongoose.model('ModuleCourse', moduleCourseSchema);

module.exports = ModuleCourse;