import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_EXERCISE_MUTATION = gql`
  mutation DeleteExerciseMutation($id: Int!) {
    deleteExercise(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const ExercisesList = ({ exercises }) => {
  const [deleteExercise] = useMutation(DELETE_EXERCISE_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete exercise ' + id + '?')) {
      deleteExercise({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">name</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr
              key={exercise.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{timeTag(exercise.createdAt)}</td>
              <td className="p-3">{truncate(exercise.id)}</td>
              <td className="p-3">{truncate(exercise.name)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.exercise({ id: exercise.id })}
                        title={'Show exercise ' + exercise.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editExercise({ id: exercise.id })}
                        title={'Edit exercise ' + exercise.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete exercise ' + exercise.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(exercise.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExercisesList
