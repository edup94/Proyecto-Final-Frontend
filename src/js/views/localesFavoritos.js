import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Favorites } from "../component/favoriteCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	// useEffect(() => {
	// 		window.scrollTo(0, 0);
	// 	}, []);

	return (
		<div className="container mt-5">
			<h2 className="d-flex justify-content-center text-primary">Mis Locales Favoritos</h2>
			<div className="row justify-content-around">
				{store.favorites.map((element, i) => {
					return (
						<Favorites
							key={i}
							nombre={element.nombre}
							descripcion={element.descripcion}
							horario={element.horario}
							direccion={element.direccion}
							telefono={element.telefono}
						/>
					);
				})}
			</div>
		</div>
	);
};
