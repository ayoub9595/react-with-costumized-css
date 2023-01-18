
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import AuthContext from '../store/auth-context'
import {elements} from '../helpers/helpers'


const Navbar = ({handleTbClick}) => {
  const context = useContext(AuthContext)
  return (<>
    <div className={classes.nav}>
      <div className={classes['toggle-button']} onClick={handleTbClick}>
        <div className={classes['button-bar']}></div>
        <div className={classes['button-bar']}></div>
        <div className={classes['button-bar']}></div>
      </div>
      <div className={classes['nav-items']}>
        {elements(context.likedItems).map(element => (
          <Link key={element.id} to={element.link}>
            <div className={classes.element}>
              {element.title}</div>
          </Link>)
        )}
      </div>

    </div>
  </>)
}
export default Navbar