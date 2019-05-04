const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
    
    name : {type:String, required:true},
    numberMembers: {type: Number, required:true},
  
    
});

const MemberSchema = new Schema ({

        name: {type: String, required:false},
        age: {type: Number, required: false, min:18},
        sex: {type: String,required:false},
        document: {type: Number,required:false},
        personality:{type: JSON ,required:false},
        groupId : {type: String, required: true } 
});

module.exports = mongoose.model('Member', MemberSchema)
module.exports = mongoose.model('Group', GroupSchema);
