import React from "react";
import Local from "../../img/interior-shot-of-cafe.jpg";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const LocalCard = props => (
	<div className="container col-md-12">
		<div className="row featurette p-5">
			<div className="col-md-6 order-md-1">
				<img src={Local} style={{ width: "95%" }} />
			</div>
			<div className="col-md-6 order-md-2">
				<div className="row align-items-center p-3">
					<button type="button" style={{ height: "44px" }} className="btn btn-outline-warning">
						<i className="fas fa-star" />
					</button>
					<h2 className="nombre-local p-3">{props.nombre}</h2>
				</div>
				<p className="local-bajada">{props.descripcion}</p>
				<div className="row">
					<div className="col-md-4">
						<p3>{props.horario}</p3>
					</div>
					<div className="col-md-4">
						<p3>{props.telefono}</p3>
					</div>
					<div className="col-md-4">
						<p3>{props.direccion}</p3>
					</div>
				</div>
			</div>
		</div>
	</div>
);

LocalCard.propTypes = {
	nombre: PropTypes.string,
	horario: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	telefono: PropTypes.string
};
