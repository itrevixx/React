import { NavLink } from 'react-router-dom'
import { LayoutStyle } from './Layout.styles';


const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <nav>
        <ul>
          <li><NavLink to="/">Read</NavLink></li>
          <li><NavLink to="create" >Create</NavLink></li>
          <li><NavLink to="delete" >Delete</NavLink></li>
        </ul>
      </nav>
      <main>{children}</main>
    </LayoutStyle>
  )
}

export default Layout;