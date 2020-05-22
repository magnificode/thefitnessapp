import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ExerciseForm from 'src/components/ExerciseForm'

export const QUERY = gql`
  query FIND_EXERCISE_BY_ID($id: Int!) {
    exercise: exercise(id: $id) {
      createdAt
      id
      name
    }
  }
`
const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExerciseMutation($id: Int!, $input: UpdateExerciseInput!) {
    updateExercise(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ exercise }) => {
  const [updateExercise, { loading, error }] = useMutation(
    UPDATE_EXERCISE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.exercises())
      },
    }
  )

  const onSave = (input, id) => {
    updateExercise({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Exercise {exercise.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ExerciseForm
          exercise={exercise}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
