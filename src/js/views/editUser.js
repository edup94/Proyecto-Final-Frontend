import React from "react";
import "../../styles/home.scss";

export const Edituser = () => (
	<form className="container col-5 justify-content-center pt-5">
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Nombre de usuario</label>
			<input
				type="text"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Elegí tu nombre de usuario"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Nombre</label>
			<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ejemplo: Juan" />
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Apellido</label>
			<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ejemplo: Pérez" />
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Lugar de residencia</label>
			<input
				type="text"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Ejemplo: Montevideo, Uruguay"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">
				Email (no lo publicaremos, es para contactarte en caso de que pierdas el acceso a tu cuenta)
			</label>
			<input
				type="email"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="tuemail@ejemplo.com"
			/>
		</div>
		<div className="container pt-2">
			<div className="form-group pb-3">
				<label htmlFor="exampleFormControlFile1">Subí una foto de perfil</label>
				<input type="file" className="form-control-file" id="exampleFormControlFile1" />
			</div>
			<div>
				<button type="button" className="btn btn-primary">
					Guardar
				</button>
				<div className="custom-control custom-checkbox pt-3">
					<input type="checkbox" className="custom-control-input" id="customCheck1" />
					<label className="custom-control-label" htmlFor="customCheck1">
						Acepto los términos y condiciones
					</label>
				</div>
			</div>
		</div>
	</form>
);
