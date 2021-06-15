import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="text-white d-flex justify-content-center">Locales</h2>
			<div className="row justify-content-around">
				{/* {store.locales.map((element, i) => {
					return <LocalCard key={i} name={element.name} descripcion={element.descripcion} />;
				})} */}
			</div>
		</div>
	);
};
