import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logotipoNavBar.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light mb-3 pl-5 pr-5">
			<Link to="/">
				<img id="navbarlogo" src={logo} className="navbar-brand mb-0 h1" />
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="nav nav-pills ml-auto">
					<li className="nav-item">
						<Link to="/login" className="btn btn-primary">
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="btn btn-primary ml-1">
							Favoritos
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/map" className="btn btn-primary ml-1">
							Mis rutas
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
