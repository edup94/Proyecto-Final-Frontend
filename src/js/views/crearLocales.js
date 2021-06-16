import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const CrearLocales = () => {
	const { store, actions } = useContext(Context);

	return (
		<form className="container col-5 mx-auto">
			<div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlInput1">Nombre de Local</label>
					<input
						onChange={actions.localData}
						name="nombre"
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Nombre de tu negocio"
					/>
				</div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlTextarea1">Describí brevemente tu negocio</label>
					<textarea
						onChange={actions.localData}
						name="descripcion"
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="5"
					/>
				</div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlInput1">Teléfono</label>
					<input
						onChange={actions.localData}
						name="telefono"
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="2456 7890"
					/>
				</div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlInput1">Dirección de tu Local</label>
					<input
						onChange={actions.localData}
						name="direccion"
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Calle 1234, Localidad, Departamento"
					/>
				</div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlInput9">Horarios</label>
					<input
						onChange={actions.localData}
						name="direccion"
						className="form-control"
						id="exampleFormControlInput9"
					/>
				</div>
				<div className="form-group container">
					<div className="d-flex justify-content-center">
						<button
							onClick={e => {
								e.preventDefault();
								actions.createLocal();
							}}
							className="btn btn-primary">
							Registrar mi local
							{store.registered == true ? <Redirect to="/home" /> : ""}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};
