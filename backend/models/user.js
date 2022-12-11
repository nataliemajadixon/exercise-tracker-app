const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required:true}
})

const Exercise = mongoose.model('Exercise', workoutSchema);
module.exports = Exercise;
