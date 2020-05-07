const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLID
} = require("graphql");

const _ = require("lodash")

//Custom types
const { BookType } = require("./types.js")

// Dummy data
let books = [
	{ name: 'Book1', genre: 'action', id: 1 },
	{ name: 'Book2', genre: 'drama', id: 2 },
	{ name: 'Book3', genre: 'self-help', id: 3 },
]

//Define the root queries
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		someBookEndpoint: {
			type: BookType,
			args: {
				id: { type: GraphQLInt }
			},
			resolve(parent, args) {
				return _.find(books, {id: args.id})
			}
		}

	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
