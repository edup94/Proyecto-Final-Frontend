import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Local from "../../img/interior-shot-of-cafe.jpg";
import "../../styles/home.scss";

export function Favorites(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="container justify-content-center d-flex mb-4">
			<div>
				<button className="btn btn-primary">
					<i className="far fa-times-circle" onClick={() => actions.deleteFavorite(props.id)} />
				</button>
			</div>
			<div className="card-text bg-light" style={{ width: "400px" }}>
				<img src={Local} style={{ width: "95%" }} />
				<div>
					<h5 className="card-title">{props.nombre}</h5>
				</div>
			</div>
		</div>
	);
}

Favorites.propTypes = {
	nombre: PropTypes.string,
	id: PropTypes.number
};
