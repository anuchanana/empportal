import React from 'react'
import './style.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-dark akacolor'>
                <img src="https://akaech.com/wp-content/themes/akaech/images/aka-logo.svg" width="90px"></img>
                <a className='navbar-brand light-link' href="#">aka Employee Portal </a>
                <ul class="navbar-right-custom">
                    <a className='nav-link' href="#"> Profile </a>
                    <a className='nav-link' href="#"> Logout </a>
                </ul>

            </nav>
        )
    }
}
export default Navbar