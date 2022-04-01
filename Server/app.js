const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://graphql-tutorial:adaparola@cluster0.qc8gz.mongodb.net/GraphQLDB?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log("Connected to database");
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});