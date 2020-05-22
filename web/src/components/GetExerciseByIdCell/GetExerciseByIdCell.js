import ExerciseDetails from '../ExerciseDetails/ExerciseDetails'

export const QUERY = gql`
  query($id: Int!) {
    exercise(id: $id) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ exercise }) => {
  return <ExerciseDetails exercise={exercise} />
}
