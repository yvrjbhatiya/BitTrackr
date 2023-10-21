import React from 'react'
import {RiBitCoinFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <RiBitCoinFill className='nav-icon' />
                <h1 className='logo'> BIT <span className='logo2'>TRACKR</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
