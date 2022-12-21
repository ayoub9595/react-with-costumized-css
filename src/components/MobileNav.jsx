import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../store/auth-context'
import {elements} from '../helpers/helpers'
import classes from './MobileNav.module.css'

const MobileNav = () => {
    const context = useContext(AuthContext)
    const handleLinkClick = () => {
        context.hideBackDrop()
        context.hideMobileNav()
    }
    return (
        <div className={classes['mobile-nav-container']}>
                {elements(context.likedItems).map(element => (
                    <Link key={element.id} to={element.link} onClick={handleLinkClick}>
                        <div className={classes.element}>
                            {element.title}</div>
                    </Link>)
                )}
        </div>
    )
}
export default MobileNav