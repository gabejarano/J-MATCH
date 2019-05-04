const mongoose = require('mongoose');
const { Schema } = mongoose;

const member = new Schema ({
        name: {type: String, required:true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        repassword: {type: String, required: true},
        age: {type: Number, required: false, min:18},
        sex: {type: String,required:false},
        document: {type: Number,required:false},
        personality:{type: JSON ,required:false},
        groups : [{
            group : { type: Schema.Types.ObjectId , ref : 'Group'}
        }]
});
module.exports = mongoose.model('Member', member)