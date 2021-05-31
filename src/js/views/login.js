import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		e.preventDefault();
		actions.login("juan.rod@gmail.com", "12345");
	};

	return (
		<div className="container login d-flex justify-content-center">
			<form onSubmit={handlerClick} className="col-4">
				<div className="form-group">
					<input
						type="email"
						placeholder="Email"
						className="form-control luz1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="form-group">
					<input type="password" placeholder="Password" className="form-control luz1" />
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" className="btn btn-outline-light bg-dark luz1 text-white">
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
};
