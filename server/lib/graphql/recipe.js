const Author = require('./author');

const Recipe = `
  type Recipe {
    id: ID!
    name: String
    slug: String
    rating: Int
    imgage: String
    time: Int
    servings: Int
    author: Author
  }

  type RecipeContainer {
    pages: Int
    count: Int
    edges: [Recipe]
  }
`;

module.exports = () => [Recipe, Author];
