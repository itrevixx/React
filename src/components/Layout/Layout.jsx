import { NavLink } from 'react-router-dom'
import { LayoutStyle } from './Layout.styles';


const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="contact" >Contact</NavLink></li>
          <li><NavLink to="about" >About</NavLink></li>
          <li><NavLink to="pokemon" >Pokemon</NavLink></li>
          <li><NavLink to="starwars" >StarWars</NavLink></li>
          <li><NavLink to="chucknorris" >ChuckNorris</NavLink></li>
        </ul>
      </nav>
      <main>{children}</main>
    </LayoutStyle>
  )

}

export default Layout;