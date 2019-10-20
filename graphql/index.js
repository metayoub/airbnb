const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphqlSchema = require('./graphql/schema/index');
const graphqlRoot = require('./graphql/resolvers/index');
const app = express();

app.use(bodyParser.json());

app.use('/airbnb', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlRoot
}));

const option = {
    socketTimeoutMS: 3000,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@jawaz-hhtgm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
,option)
.then( () => {
    app.listen(3000);
    console.log("server on :3000");
})
.catch(err => {
    console.log(err.name);
});