const { makeExecutableSchema } = require('graphql-tools');
const { getRecipes } = require('../controllers/recipeController');
const Recipe = require('./recipe');

const resolvers = {
  RootQuery: {
    recipes: async (_, { page, limit }) => {
      const { entities, pages, count } = await getRecipes({ page, limit });

      return {
        pages,
        count,
        edges: entities,
      };
    },
  },
};

const RootQuery = `
  type RootQuery {
    recipes(page: Int, limit: Int): RecipeContainer
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Recipe],
  resolvers,
});

module.exports = schema;
