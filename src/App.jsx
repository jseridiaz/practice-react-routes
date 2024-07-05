import { Outlet, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <header id='header'>
        <h1>First Project</h1>
        <nav>
          <NavLink to=''>Home</NavLink>
          <NavLink to='series'>Series</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer className='margin-xl'>
        Practice realized by José Daniel Rivera Díaz
      </footer>
    </>
  )
}

export default App
