import React, { useContext } from "react";
import Local from "../../img/interior-shot-of-cafe.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const LocalSingleCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container col-md-12">
			<div className="row featurette p-5">
				<div className="col-md-6 order-md-1">
					<img src={Local} style={{ width: "95%" }} />
				</div>
				<div className="col-md-6 order-md-2">
					<div className="row align-items-center p-3">
						<h2 className="nombre-local p-3">{store.localData.nombre}</h2>
					</div>
					<p className="local-bajada">Descripción: {store.localData.descripcion}</p>
					<div className="row">
						<div className="col-md-4">
							Horario: <h5>{store.localData.horario}</h5>
						</div>
						<div className="col-md-4">
							Teléfono: <h5>{store.localData.telefono}</h5>
						</div>
						<div className="col-md-4">
							Dirección: <h5>{store.localData.direccion}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

LocalSingleCard.propTypes = {
	nombre: PropTypes.string,
	horario: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	telefono: PropTypes.string,
	id: PropTypes.number
};
