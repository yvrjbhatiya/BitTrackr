import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='nav-icon' />
                <h1 className='logo'> BIT <span className='purple'>TRACKR</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
