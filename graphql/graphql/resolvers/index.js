const bcrypt = require('bcryptjs');
const Property = require('../../models/property');
const User = require('../../models/user.js');

const user = userId => {
    return User.findById(userId).populate('properties')
        .then( user => {
            return {...user._doc,
                properties: properties.bind(this, user._doc.properties)};
        }).catch(err => {
            throw err;
        })
};
const properties = eventIds => {
    return Property.find({_id: {$in: eventIds}})
    .then(properties => {
        return properties.map(property => {
            return {...property._doc,
            creator: user.bind(this, property._doc.creator)};
        })
    })
    .catch(err => {
        throw err;
    })
};

module.exports = {
    properties: () => {
        return Property.find().then(result => {
            return result.map(property => {
                return {...property._doc,
                    creator: user.bind(this, property._doc.creator),
                };
            });
        }).catch(err => {
            throw err;
        });
    },
    users : () => {
        return User.find().then(result => {
            return result.map(user => {
                return {...user._doc,
                        password: null,
                        properties: properties.bind(this, user._doc.properties)};
            });
        }).catch(err => {
            throw err;
        });
    },
    createProperty: args => {
        const property = new Property({
            name: args.propertyInput.name,
            description: args.propertyInput.description,
            accommodates: args.propertyInput.accommodates,
            price: args.propertyInput.price,
            minimum_nights: args.propertyInput.minimum_nights,
            maximum_nights: args.propertyInput.maximum_nights,
            property_type: args.propertyInput.property_type,
            creator: '5da1c7bd394eee1170178366',
        });
        let propertie;
        return property
        .save()
        .then(result => {
            propertie = {...result._doc,
            creator: user.bind(this, result._doc.creator)};
            return User.findById('5da1c7bd394eee1170178366');
        })
        .then(user => {
            if(!user){
                throw new Error('User not Found');
            }
            user.properties.push(property);
            return user.save();
        })
        .then(result => {
            return propertie;
        })
        .catch(err => {
            throw err;
        });
    },
    createUser : args => {
        return User.findOne({mail : args.userInput.mail}).then(user => {
            if (user) {
                throw new Error('user Exist!')
            }
            return bcrypt.hash(args.userInput.password, 12).then(hashedPassword => {
                const user = new User( {
                    firstname: args.userInput.firstname,
                    username: args.userInput.username,
                    lastname: args.userInput.lastname,
                    mail: args.userInput.mail,
                    password: hashedPassword
                });
                return user.save().then(result => {
                    return {...result._doc, password: null};
                }).catch(err => {
                    throw err;
                });
            }).catch(err => {
                throw err;
            });

        }).catch(err => {
            throw err;
        });
        
    }
}