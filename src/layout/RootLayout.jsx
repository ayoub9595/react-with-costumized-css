import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import AuthContext from '../store/auth-context'
import classes from './RootLayout.module.css'

const RootLayout = () => {
    const context = useContext(AuthContext)
    const backdropClickHandler = () => {
        if(context.showMobileNav) {
            context.hideBackDrop()
            context.hideMobileNav()
        }

    }
    return (<>
        {context.showBackdrop &&  <div className={classes.backdrop} onClick={backdropClickHandler}></div> }
        {context.showMobileNav && <MobileNav />}

        <div className="container">
            <Navbar />
            <div className={classes['outlet-container']}>
                <Outlet />
            </div>
        </div>
    </>)
}

export default RootLayout