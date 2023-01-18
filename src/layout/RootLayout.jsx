import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import classes from './RootLayout.module.css'

const RootLayout = () => {
    const [open,setOpen] = useState(false)

    return (<>
        <MobileNav 
        open={open} 
        handleBdClick={() => setOpen(false)}
        handleLinkClick={() => setOpen(false)}/>

        <div className="container">
            <Navbar handleTbClick={() => setOpen(true)} />
            <div className={classes['outlet-container']}>
                <Outlet />
            </div>
        </div>
    </>)
}

export default RootLayout