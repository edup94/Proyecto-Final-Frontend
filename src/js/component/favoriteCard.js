import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Local from "../../img/interior-shot-of-cafe.jpg";

export function Favorites() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container justify-content-between d-flex mb-4">
			{store.favorites.map((element, index) => {
				return (
					<div key={index} className="mr-5">
						<div className="card text bg-light m-2" style={{ width: "400px" }}>
							<img src={Local} style={{ width: "95%" }} />
							<div className="card-body">
								<h5 className="card-title">{props.nombre}</h5>
								<p className="card-text">
									{props.descripcion}
								</p>
								<div className="d-flex justify-content-between align-items-center">
									<div>
                                        <i
                                        className="far fa-times-circle"
                                        onClick={() => actions.deleteFavorite(element)}
                                        />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

Favorites.propTypes = {
	nombre: PropTypes.string,
	horario: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	telefono: PropTypes.string
};