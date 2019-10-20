const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:  {type: String, required: true},
	username:   {type: String, required: true},
	lastname:   {type: String, required: true},
	mail:       {type: String, required: true},
	password:   {type: String, required: true},
    properties: [{
        type: Schema.Types.ObjectId,
        ref: 'property'
    }]
  });

module.exports = mongoose.model('user',userSchema);