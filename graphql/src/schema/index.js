// Import External Dependancies
const graphql = require('graphql')

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
	GraphQLNonNull
} = graphql

// Import Controllers
const matchController = require('../controllers/matchController')

// Define Object Types

const matchType = new GraphQLObjectType({
	name: 'Match',
	fields: () => ({
		_id: { type: GraphQLID },
		div: { type: GraphQLString },
		date: { type: GraphQLString },
		homeTeam: { type: GraphQLString },
		awayTeam: { type: GraphQLString },
		homeGoals: { type: GraphQLInt },
		awayGoals: { type: GraphQLInt },
		owner_id: { type: GraphQLID },
		ftr: { type: GraphQLString },
		hst: { type: GraphQLInt },
		ast: { type: GraphQLInt },
	})
});


// Define Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		matches: {
			type: new GraphQLList(matchType),
			async resolve(parent, args) {
				return await matchController.getMatches()
			}
		},
	}
})

// Export the schema
module.exports = new GraphQLSchema({
	query: RootQuery
})
