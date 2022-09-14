import React, { useState } from 'react'
import Logo from '../images/logo.jpg'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<div className='navbar'>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<ul className={click? "nav-menu active": "nav-menu" }>
				<li className="nav-item">Home</li>
				<li className="nav-item">Pricing</li>
				<li className="nav-item">FAQ</li>
				<li className="nav-item">Contacts</li>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click? (<FaTimes />): (<FaBars />)}
			</div>
		</div>
	)
}

export default Navbar