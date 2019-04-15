const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
    name: {type: String, required:true},
    age: {type: Number, required: true, min:18},
    sex: {type: String,required:true},
    document: {type: Number,required:true},
    personality:{type: JSON ,required:false},
    group: {type: Number,required:false},
    projects: {type: JSON,required:false}  
});


module.exports = mongoose.model('Group', GroupSchema);
