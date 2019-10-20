const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Property {
    _id: ID!
    name: String!
    description: String!
    accommodates: Float!
    price: Float!
    minimum_nights: Int!
    maximum_nights: Int!
    property_type: String!
    creator: User!
}
input PropertyInput {
    name: String!
    description: String!
    accommodates: Float!
    price: Float!
    minimum_nights: Int!
    maximum_nights: Int!
    property_type: String!
}
type User {
    _id: ID!
    firstname: String!
    username: String!
    lastname: String!
    mail: String!
    password: String
    properties: [Property!]
}
input UserInput {
    firstname: String!
    username: String!
    lastname: String!
    mail: String!
    password: String!
}

type RootQuery {
    properties: [Property!]!
    users: [User!]!
}

type RootMutation {
    createProperty(propertyInput: PropertyInput): Property
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)