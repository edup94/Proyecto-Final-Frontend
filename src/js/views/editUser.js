import React from "react";
import "../../styles/home.scss";

export const EditUser = () => (
	<form className="container col-5 justify-content-center pt-5">
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Nombre de usuario</label>
			<input
				name="username"
				type="text"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Elegí tu nombre de usuario"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Nombre</label>
			<input
				name="nombre"
				type="text"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Ejemplo: Juan"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Apellido</label>
			<input
				name="apellido"
				type="text"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="Ejemplo: Pérez"
			/>
		</div>
		<div className="form-group">
			<label htmlFor="exampleFormControlInput1">Email</label>
			<input
				type="email"
				className="form-control"
				id="exampleFormControlInput1"
				placeholder="tuemail@ejemplo.com"
			/>
		</div>
	</form>
);
