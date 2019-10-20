const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:  {type: String, required: true},
	username:   {type: String, required: true},
	lastname:   {type: String, required: true},
	gender:     String,
	token:      String,
	mail:       {type: String, required: true},
	city:       String,
	phone:      String,
	birthDay:   String,
	password:   {type: String, required: true},
	history:    {
        trigCreation:           String,    
	    trigModification:       String,    
	    dhCreation:             Date, 
	    dhModification:         Date, 
	    dhLastAuthentification: Date 

    },
	isActif:    Boolean,
	dsBlocked:  Boolean,
    accesGrant: [String],
    properties: [{
        type: Schema.Types.ObjectId,
        ref: 'property'
    }]
  });

module.exports = mongoose.model('user',userSchema);