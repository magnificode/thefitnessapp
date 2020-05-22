import GetExerciseByIdCell from 'src/components/GetExerciseByIdCell/GetExerciseByIdCell'
import PageLayout from 'src/layouts/PageLayout/PageLayout'

const SingleExercisePage = ({ id }) => {
  return (
    <PageLayout>
      <GetExerciseByIdCell id={id} />
    </PageLayout>
  )
}

export default SingleExercisePage
