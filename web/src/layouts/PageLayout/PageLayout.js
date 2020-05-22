import { Link, routes } from '@redwoodjs/router'

const PageLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>The Fitness App</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.profile()}>My Profile</Link>
            </li>
            <li>
              <Link to={routes.exercises()}>My Exercises</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PageLayout
