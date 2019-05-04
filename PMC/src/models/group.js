const mongoose = require('mongoose');
const { Schema } = mongoose;

const group = new Schema({
    
    name : {type:String, required:true},
    numberMembers: {type: Number, required:true},
    members : [{ 
        member :{type:String }
    }]
});
module.exports = mongoose.model('Group', group);
