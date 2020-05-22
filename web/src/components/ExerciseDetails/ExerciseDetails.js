import { Link, routes } from '@redwoodjs/router'

const ExerciseDetails = ({ exercise }) => {
  const { name, createdAt } = exercise

  return (
    <div className="exercise">
      <header>
        <Link to={routes.singleExercise({ id: exercise.id })}>
          <h2>{name}</h2>
        </Link>
      </header>
      <p>{createdAt}</p>
      <hr />
    </div>
  )
}

export default ExerciseDetails
