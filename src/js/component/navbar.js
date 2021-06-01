import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/login">
				<span className="navbar-brand mb-0 h1">Login</span>
			</Link>
			<div className="ml-auto">
				<Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link>
			</div>
		</nav>
	);
};
