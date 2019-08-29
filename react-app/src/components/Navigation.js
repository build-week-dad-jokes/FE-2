import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
import './Navigation.css'



const Navigation = props => {

   
    return (
        <nav className="nav">
            <header>
                <Link className="navlink" to='/'>Dad Jokes</Link>
                <input className="search" type='search' placeholder="search jokes"/>
                <Link className="addjoke" to='/addjoke'>+ joke</Link>
                <Link className="signin_button" to="/signin">sign in</Link>
            </header>
        </nav>
    )
}
export default Navigation