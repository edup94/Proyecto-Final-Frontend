import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const EditarLocales = () => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState(store.readLocalById.nombre);
	const [descripcion, setDescripcion] = useState(store.readLocalById.descripcion);
	const [direccion, setDireccion] = useState(store.readLocalById.direccion);
	const [telefono, setTelefono] = useState(store.readLocalById.telefono);
	const [horario, setHorario] = useState(store.readLocalById.horario);
	const [home, setHome] = useState(false);

	const [newDataLocal, setDataNew] = useState({
		nombre: nombre,
		descripcion: descripcion,
		direccion: direccion,
		telefono: telefono,
		horario: horario
	});

	useEffect(() => {
		setDataNew({
			nombre: nombre,
			descripcion: descripcion,
			direccion: direccion,
			telefono: telefono,
			horario: horario
		});
	});

	return (
		<form className="container col-5 mx-auto">
			<div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlInput1">Nombre de Local</label>
					<input
						onChange={e => setNombre(e.target.value)}
						value={nombre}
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
						onChange={e => setDescripcion(e.target.value)}
						value={descripcion}
						name="descripcion"
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="5"
					/>
				</div>
				<div className="form-group text-primary">
					<label htmlFor="exampleFormControlInput1">Teléfono</label>
					<input
						onChange={e => setTelefono(e.target.value)}
						value={telefono}
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
						onChange={e => setDireccion(e.target.value)}
						value={direccion}
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
						onChange={e => setHorario(e.target.value)}
						value={horario}
						name="horario"
						className="form-control"
						id="exampleFormControlInput9"
					/>
				</div>
				<div className="container">
					<div className="d-flex justify-content-center">
						<button
							to="/home"
							onClick={e => {
								setHome(true);
								e.preventDefault();
								actions.editLocal(newDataLocal);
							}}
							className="btn btn-primary">
							Guardar Cambios
							{home == true ? <Redirect to="/home" /> : ""}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};
