import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const exercises = () => {
  return db.exercise.findMany({
    where: {
      creatorId: context.currentUser.sub,
    },
  })
}

export const exercise = async ({ id }) => {
  const theExercise = await db.exercise.findMany({
    where: {
      id,
      creatorId: context.currentUser.sub,
    },
  })

  return theExercise[0]
}

export const createExercise = ({ input }) => {
  requireAuth()
  return db.exercise.create({
    data: input,
  })
}

export const updateExercise = ({ id, input }) => {
  requireAuth()
  return db.exercise.update({
    data: input,
    where: { id },
  })
}

export const deleteExercise = ({ id }) => {
  requireAuth()
  return db.exercise.delete({
    where: { id },
  })
}
