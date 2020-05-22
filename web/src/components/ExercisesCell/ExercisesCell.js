import { Link, routes } from '@redwoodjs/router'

import Exercises from 'src/components/Exercises'

export const QUERY = gql`
  query EXERCISES {
    exercises {
      createdAt
      id
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No exercises yet. '}
      <Link
        to={routes.newExercise()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ exercises }) => {
  return <Exercises exercises={exercises} />
}
