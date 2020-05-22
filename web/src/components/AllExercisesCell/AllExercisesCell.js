import ExerciseDetails from '../ExerciseDetails/ExerciseDetails'

export const QUERY = gql`
  query {
    exercises {
      createdAt
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ exercises }) => {
  return exercises.map((exercise) => (
    <ExerciseDetails
      key={`${exercise.name}-${exercise.id}`}
      exercise={exercise}
    />
  ))
}
