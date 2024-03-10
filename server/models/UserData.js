const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
   email:{
         type:String,
         require:true,
   },
  Password:{
     type:String,
     required:true
  },

      description: {
        type: String,
        required: true,
        trim: true,
    },
});

// About Schema
const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    titleDescription: {
        type: String,
        required: true,
    },
    aboutDescription: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    degree: {
        type: String,
        required: true,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    available: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
});

// Skills Schema
const skillsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
});

// Project Schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologiesUsed: {
        type: [String],
        required: true,
    },
    githubRepoLink: {
        type: String,
        required: true,
    },
    liveDemoLink: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    tag:{
       type:String,
       require:true,
       maxlength:20,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



// Create models based on the schemas
const Contact = mongoose.model('Contact', contactSchema);
const User = mongoose.model('User', userSchema);
const About = mongoose.model('About', aboutSchema);
const Skills = mongoose.model('Skills', skillsSchema);
const Project = mongoose.model('Project', projectSchema);

// Export the models
module.exports = { User, About, Skills, Project , Contact};
