import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Redirect, { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		e.PreventDefault();
	};

	return (
		<div className="title container">
			<h4 className="text-white text-justify">Regístrate para iniciar sesión</h4>
			<div className="container register d-flex justify-content-center">
				<form onSubmit={handlerClick} className="col-4">
					<div className="form-group">
						<input
							onChange={actions.registerData}
							name="username"
							type="text"
							placeholder="Nombre de Usuario"
							className="form-control"
							aria-describedby="addon-wrapping"
						/>
					</div>
					<div className="form-group">
						<input
							onChange={actions.registerData}
							name="First Name"
							type="text"
							placeholder="Nombre"
							className="form-control"
							aria-label="First Name"
						/>
					</div>
					<div className="form-group">
						<input
							onChange={actions.registerData}
							name="Last Name"
							type="text"
							placeholder="Apellido"
							className="form-control"
							aria-label="Last Name"
						/>
					</div>

					<div className="form-group">
						<div className="input-group-prepend">
							<label
								className="input-group-text"
								onChange={actions.registerData}
								htmlFor="inputGroupSelect01">
								Perfil
							</label>
						</div>
						<select className="custom-select" id="inputGroupSelect01">
							<option selected>Escoger...</option>
							<option value="1">Ciclista</option>
							<option value="2">Propietario</option>
							<option value="3">Ciclista/Propietario</option>
						</select>
					</div>

					<div className="form-group">
						<input
							onChange={actions.registerData}
							name="email"
							type="email"
							placeholder="Email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>

					<div className="form-group">
						<input
							onChange={actions.registerData}
							name="contrasena"
							type="password"
							placeholder="Contraseña"
							className="form-control"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<Link to="/login" className="btn btn-dark btn-outline-light">
							<h5 className="card-text">Registrarse</h5>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
