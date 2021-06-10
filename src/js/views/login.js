import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
	const { store, actions } = useContext(Context);

	/*const handlerClick = e => {
		e.preventDefault();
		actions.login();
	};*/

	const passwordInc = () => {
		swal.fire({
			text: "Contraseña incorrecta",
			icon: "warning",
			timer: "3000",
			showConfirmButton: false
		});
	};

	const mailInc = () => {
		swal.fire({
			text: "Mail incorrecto",
			icon: "warning",
			timer: "3000"
		});
	};
	return (
		<div className="container login d-flex justify-content-center">
			<form className="col-4">
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
						type="submit"
						className="btn btn-outline-light bg-white text-dark"
						onClick={e => {
							e.preventDefault();
							actions.login();
						}}>
						Login {store.loggedIn == true ? <Redirect to="/" /> : ""}
					</button>
				</div>
			</form>
		</div>
	);
};
