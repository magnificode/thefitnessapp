import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ExerciseForm from 'src/components/ExerciseForm'

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExerciseMutation($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
    }
  }
`

const NewExercise = () => {
  const [createExercise, { loading, error }] = useMutation(CREATE_EXERCISE_MUTATION, {
    onCompleted: () => {
      navigate(routes.exercises())
    },
  })

  const onSave = (input) => {
    createExercise({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Exercise</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ExerciseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExercise
