// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
      <Private unauthenticated="home">
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route
          path="/single-exercise/{id:Int}"
          page={SingleExercisePage}
          name="singleExercise"
        />
        <Route
          path="/exercises/new"
          page={NewExercisePage}
          name="newExercise"
        />
        <Route
          path="/exercises/{id:Int}/edit"
          page={EditExercisePage}
          name="editExercise"
        />
        <Route path="/exercises/{id:Int}" page={ExercisePage} name="exercise" />
        <Route path="/exercises" page={ExercisesPage} name="exercises" />
      </Private>
      <Private unauthenticated="newExercise">
        <Route
          path="/exercises/{id:Int}/edit"
          page={EditExercisePage}
          name="editExercise"
        />
        <Route path="/exercises/{id:Int}" page={ExercisePage} name="exercise" />
      </Private>
    </Router>
  )
}

export default Routes
