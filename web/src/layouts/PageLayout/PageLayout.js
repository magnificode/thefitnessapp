import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const PageLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

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
            <li>
              <button onClick={isAuthenticated ? logOut : logIn}>
                Log {isAuthenticated ? 'Out' : 'In'}
              </button>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PageLayout
