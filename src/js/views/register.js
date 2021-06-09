import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-3">
			<div className="row d-flex justify-content-center">
				<div>
					<h2 className="text-primary mb-3">Registrarse</h2>
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				<form className="col-4">
					<div className="form-group">
						<input
							onChange={actions.signUpData}
							name="username"
							type="text"
							placeholder="Nombre de Usuario"
							className="form-control"
							aria-describedby="addon-wrapping"
						/>
					</div>
					<div className="form-group">
						<input
							onChange={actions.signUpData}
							name="nombre"
							type="text"
							placeholder="Nombre"
							className="form-control"
							aria-label="First Name"
						/>
					</div>
					<div className="form-group">
						<input
							onChange={actions.signUpData}
							name="apellido"
							type="text"
							placeholder="Apellido"
							className="form-control"
							aria-label="Last Name"
						/>
					</div>
					<div className="form-group">
						<div className="input-group-prepend">
							<label className="input-group-text" htmlFor="inputGroupSelect01">
								Perfil
							</label>
						</div>
						<select
							onChange={actions.signUpData}
							name="perfil"
							className="custom-select"
							id="inputGroupSelect01">
							<option value="">Escoger...</option>
							<option value="1">Ciclista</option>
							<option value="2">Propietario</option>
							<option value="3">Ciclista/Propietario</option>
						</select>
					</div>

					<div className="form-group">
						<input
							onChange={actions.signUpData}
							name="email"
							type="email"
							placeholder="Email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>

					<div className="form-group">
						<input
							onChange={actions.signUpData}
							name="contrasena"
							type="password"
							placeholder="Contraseña"
							className="form-control"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<button
							onClick={e => {
								e.preventDefault();
								actions.signUp();
							}}
							className="btn btn-primary">
							Aceptar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
