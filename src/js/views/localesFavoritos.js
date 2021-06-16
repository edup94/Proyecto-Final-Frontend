import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Favorites } from "../component/favoriteCard";

export const LocalesFavoritos = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getLocalFav();
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="d-flex justify-content-center text-primary">Mis Locales Favoritos</h2>
			<div className="row justify-content-around">
				{!store.favorites ? (
					<p>Cargando...</p>
				) : store.favorites.length > 0 ? (
					store.favorites.map((element, i) => {
						return <Favorites key={i} id={element.id} nombre={element.nombre} />;
					})
				) : (
					<p>No tienes locales Favoritos</p>
				)}
			</div>
		</div>
	);
};
