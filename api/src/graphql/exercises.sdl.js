export const schema = gql`
  type Exercise {
    createdAt: DateTime!
    id: Int!
    name: String!
  }

  type Query {
    exercises: [Exercise!]!
    exercise(id: Int!): Exercise!
  }

  input CreateExerciseInput {
    name: String!
  }

  input UpdateExerciseInput {
    name: String
  }

  type Mutation {
    createExercise(input: CreateExerciseInput!): Exercise!
    updateExercise(id: Int!, input: UpdateExerciseInput!): Exercise!
    deleteExercise(id: Int!): Exercise!
  }
`
