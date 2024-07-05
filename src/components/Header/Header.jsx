import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='series' activeClassName='active'>
          Series
        </NavLink>
        <NavLink to='about' activeClassName='active'>
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
