import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { elements } from '../helpers/helpers'
import AuthContext from '../store/auth-context'
import classes from './MobileNav.module.css'

const MobileNav = ({open,handleBdClick,handleLinkClick}) => {
    const context = useContext(AuthContext)

    return (
        <div className={classes.main}>
            <div className={`${classes.backdrop} ${open ? classes.open : ''}`} onClick={handleBdClick}></div>
            <div className={`${classes['mobile-nav-container']} ${open ? classes.open : ''}`}>
                {elements(context.likedItems).map(element => (
                    <Link key={element.id} to={element.link} onClick={handleLinkClick}>
                        <div className={classes.element}>
                            {element.title}</div>
                    </Link>)
                )}
            </div>
        </div>

    )
}
export default MobileNav