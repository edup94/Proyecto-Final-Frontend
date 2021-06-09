import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container login my-5">
			<div className="row d-flex justify-content-center">
				<div>
					<h3 className="text-primary mb-5">User Login</h3>
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				<form className="">
					<div className="form-group">
						<input
							onChange={actions.loginData}
							name="email"
							type="email"
							placeholder="Email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="form-group">
						<input
							onChange={actions.loginData}
							name="contrasena"
							type="password"
							placeholder="Password"
							className="form-control"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<button
							onClick={e => {
								e.preventDefault();
								actions.login();
							}}
							className="btn btn-primary mt-2">
							Aceptar
							{store.loggedIn == true ? <Redirect to="/" /> : ""}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
