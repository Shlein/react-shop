import React from 'react'

const Header = () => {
	return (
		<nav className="blue lighten-1">
			<div className="nav-wrapper">
				<a href="#!" className="brand-logo">React showcase</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="https://github.com/Shlein/react-shop" target='_blank' rel='noreferrer'>Repo</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Header