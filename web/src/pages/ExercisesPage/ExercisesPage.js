import ExercisesLayout from 'src/layouts/ExercisesLayout'
import ExercisesCell from 'src/components/ExercisesCell'

import PageLayout from 'src/layouts/PageLayout/PageLayout'

const ExercisesPage = () => {
  return (
    <PageLayout>
      <ExercisesLayout>
        <ExercisesCell />
      </ExercisesLayout>
    </PageLayout>
  )
}

export default ExercisesPage
