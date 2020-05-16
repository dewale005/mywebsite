/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../img/logo.png';


function NavBar() {
	return (
		<nav className='container-fluid navPosition'>
			<a href='.' className='brand'>
				<img width='50px' src={Logo} alt='Logo' srcSet='' />
			</a>

			<div className='navigations'>
				<a href='#home' className=" active"><span>Home</span></a>
				<a href='#about' className=""><span>About</span></a>
				<a href='#resume' className=""><span>Resume</span></a>
				<a href='#services' className=""><span>Services</span></a>
				<a href='#blog' className=""><span>Blog</span></a>
                <a href='#contact' className=""><span>Contact</span></a>
                <button type="button" name="" id="" className="btn btn-light button">Hire Me</button>
			</div>
		</nav>
	);
}

export default NavBar;
