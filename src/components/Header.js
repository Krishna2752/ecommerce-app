import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../crown.svg'
import './HeaderStyles.scss'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />

            </Link>
            <div className="options-container">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>



            </div>

            
        </div>
    )
}

export default Header
