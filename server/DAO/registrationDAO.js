const Registration = require('../model/registration');

class RegistrationDAO {
    constructor(){
        this.model= Registration
    }

    async create(registration) {
        const newRegistration = new this.model(registration);
        return await newRegistration.save();
    }

    async findAll() {
        return await this.model.find().exec();
    }

    async searchCoursesRegistrations(filter){
        return await this.model.find(filter).populate('course_id').exec();
    }
}

module.exports = RegistrationDAO;