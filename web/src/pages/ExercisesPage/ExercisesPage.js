import { useAuth } from '@redwoodjs/auth'
import ExercisesLayout from 'src/layouts/ExercisesLayout'
import ExercisesCell from 'src/components/ExercisesCell'

import PageLayout from 'src/layouts/PageLayout/PageLayout'

const ExercisesPage = () => {
  const { currentUser } = useAuth()

  console.log(currentUser)
  return (
    <PageLayout>
      <ExercisesLayout>
        <ExercisesCell />
      </ExercisesLayout>
    </PageLayout>
  )
}

export default ExercisesPage
