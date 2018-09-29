
export default `

  scalar Upload

  type Mutation {
    uploadFile(file: Upload!): Boolean
  }

  type Query {
    hello: String
  }

`;
