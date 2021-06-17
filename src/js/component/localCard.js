import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Local from "../../img/interior-shot-of-cafe.jpg";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LocalCard = props => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState(props.id);

	return (
		<div className="container col-md-12">
			<div className="row featurette p-5">
				<div className="col-md-6 order-md-1">
					<img src={Local} style={{ width: "95%" }} />
				</div>
				<div className="col-md-6 order-md-2">
					<div className="row align-items-center p-3">
						<button
							type="button"
							style={{ height: "44px" }}
							className="btn btn-outline-warning"
							onClick={() => actions.addFavorite(props.nombre)}>
							<i className="fas fa-star" />
						</button>
						<Link
							to={"/editlocal/" + props.id}
							onClick={() => {
								actions.getLocalById(id);
							}}
							className="btn btn-primary m-1">
							Editar
						</Link>
						<h2 className="nombre-local p-3 text-primary">{props.nombre}</h2>
					</div>
					<p className="local-bajada text-primary">Descripción:</p>
					<p>{props.descripcion}</p>
					<div className="row">
						<div className="col-md-4 col-lg-4">
							<p className="text-primary"> Horario:</p>
							<p> {props.horario}</p>
						</div>
						<div className="col-md-4 col-lg-4">
							<p className="text-primary"> Teléfono:</p>
							<p> {props.telefono}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-lg-8 border-bottom border-primary mb-3">
							<p className="text-primary"> Dirección:</p>
							<p> {props.direccion}</p>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-4 col-lg-8">
							<h5 className="text-primary">Usuario Ejemplo</h5>
							<p>Comentario ejemplo hecho por el Usuario Ejemplo</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

LocalCard.propTypes = {
	nombre: PropTypes.string,
	horario: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	telefono: PropTypes.string,
	id: PropTypes.number
};
