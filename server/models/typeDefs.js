const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Itinerary {
    id: ID!
    userId: ID!
    destination: String!
    activities: [String]
  }

  type Query {
    users: [User]
    itineraries: [Itinerary]
    itinerary(id: ID!): Itinerary
  }

  type Token {
    token: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(username: String!, password: String!): Token
    addItinerary(userId: ID!, destination: String!, activities: [String]): Itinerary
    shareItinerary(itineraryId: ID!, email: String!): Itinerary
  }
`;

module.exports = typeDefs;
