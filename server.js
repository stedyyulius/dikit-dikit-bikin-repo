var { graphql, buildSchema } = require('graphql');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var app = express();

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
    hello: () => {
        return 'Hello world!';
    },
};


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);

