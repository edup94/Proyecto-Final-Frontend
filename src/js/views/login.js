import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container login d-flex justify-content-end">
			<div className="fondo bg-white col-3 shadow p-4 mb-4 m-5">
				<div className="row d-flex justify-content-center mt-5">
					<div>
						<h3 className="text-primary mb-5">User Login</h3>
					</div>
				</div>
				<div className="row d-flex justify-content-center login-box">
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
						<div className="d-flex justify-content-center mb-3">
							<Link to="/recover">
								<h6 className="card-text font-weight-bolder">Recuperar contraseña</h6>
							</Link>
						</div>
						<div className="d-flex justify-content-center mb-5">
							<button
								onClick={e => {
									e.preventDefault();
									actions.login();
								}}
								className="btn btn-primary mt-2">
								<h5>Aceptar</h5>
								{store.loggedIn == true ? <Redirect to="/" /> : ""}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
